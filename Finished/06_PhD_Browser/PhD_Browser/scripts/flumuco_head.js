const animation_duration = 500;

// -------------------------------------------------------------------------------------
//
// A U D I O
//
// -------------------------------------------------------------------------------------
sounds = [];
loaded_sounds = 0;
var playingIntervalId;
var current_sound = [];
var play_state = ["loading", -1]

audio_urls = eval(document.currentScript.getAttribute('audio_urls'));
for(i = 0; i < audio_urls.length; i++){
    new_sound = load_sound("/audio/" + audio_urls[i]);
    sounds.push(new_sound);
}

function load_sound(url){

    var sound = new Howl({
        src: [url]
    })
    .on("play", function(){
        playingIntervalId = setInterval(function(){
            header_player_set_value(sound.seek() * 1000);
        }, 50);
        header_player_change_button("pause");
        play_state[0] = "play"
    })
    .on("end", function(){
        clearInterval(playingIntervalId);
        header_player_set_value(sound.seek() * 1000);
        header_player_change_button("play");
        play_state[0] = "stop"

        //------------------------------------------------------------------------
        // FOR DYNAMIC VIDEO:
        //------------------------------------------------------------------------
        pause_dynamic_video();
    })
    .on("stop", function(){
        clearInterval(playingIntervalId);
        header_player_set_value(sound.seek() * 1000);
        header_player_change_button("play");
        play_state[0] = "stop"
    })
    .on("pause", function(){
        clearInterval(playingIntervalId);
        header_player_set_value(sound.seek() * 1000);
        header_player_change_button("play");
        play_state[0] = "pause"
        play_state[1] = sound.seek();
    })
    .on("load", function(){
        console.log('Loaded ' + url);
        loaded_sounds++
        if(loaded_sounds == sounds.length){
            header_player_loading_finished();
            play_state[0] = "loaded";
            play_state[1] = 0;
        }
    });

    

    return sound;
}

function create_sprites(data, idx){

    for(i = 0; i < data.length; i++){
        start = samps_to_ms(data[i]["bounds"][0], data[i]["sr"]);
        end = samps_to_ms(data[i]["bounds"][1], data[i]["sr"]);
        duration = end - start;
        key_name = data[i]["name"];

        sounds[idx]._sprite[key_name] = [start, duration];
    }
}

function seg_create_sprites(data, idx){

    for(keys in data){
        start = data[keys]["start_ms"];
        end = data[keys]["end_ms"];
        duration = end - start;
        key_name = keys;

        sounds[idx]._sprite[keys] = [start, duration];
    }
}

function samps_to_ms(samps, sr){
    return (samps / sr) * 1000;
}

// -------------------------------------------------------------------------------------
//
// S C A T T E R  P L O T 
//
// -------------------------------------------------------------------------------------
scatters = [];
scatter_count = 0;

function add_new_scatter(data_urls, dims, divs, audio){
    
    new_scatter = create_plot(scatter_count, data_urls, dims, divs, audio);
    scatter_count++;
    scatters.push(new_scatter);
    change_state(new_scatter, 0);
}

function create_plot(idx, data_urls, dims, divs, audio){

    var plot = {
        idx: idx,
        data_urls: data_urls,
        dims: dims,
        divs: divs,
        audio: audio,
        audio_idx: get_audio_idx(audio),
        default_node_col: "#E5E5E5",
        selected_node_col: "#9B3434",
        last_selected_node: null,
        total_nodes: -1
    }

    plot.svg = create_svg_element(plot);
    plot.label = create_label_element(plot);
    if(plot.divs.length > 2){
        plot.select = create_select_element(plot);
    }

    //create_loading_message(plot);

    return plot;
}

function get_audio_idx(audio){

    idx = -1;

    for(i = 0; i < audio_urls.length; i++){
        if(audio_urls[i] == audio){
            idx = i
        }
    }

    return idx;
}

function create_svg_element(plot_obj){

    var svg_element = d3.select("#" + plot_obj.divs[0])
            .append("svg")
            .attr("width", plot_obj.dims[0])
            .attr("height", plot_obj.dims[1])
            .attr("class", "scatter_plot_svg")
            .call(d3.zoom().on("zoom", function () {
                svg_element.attr("transform", d3.event.transform)
             }))
            .append("g");

    return svg_element;
}

function create_label_element(plot_obj){

    var label_element = d3.select("#" + plot_obj.divs[1])
            //.append("p")
            .attr("class", "scatter_plot_label");

    return label_element;
}

function create_select_element(plot_obj){

    var select_element = d3.select("#" + plot_obj.divs[2])
            .append("select")
            .attr("onchange", "change_state_trigger(" + String(plot_obj.idx) + ", this.selectedIndex)")
            .attr("class", "scatter_plot_select");

    for(i = 0; i < plot_obj.data_urls.length; i++){
        select_element
            .append("option")
            .html(sel_option_format(plot_obj.data_urls[i]))
            .attr("value", i);
    }
    
    return select_element;
}

function change_state(plot_obj, state){

    //create_loading_message(plot_obj);

    d3.json("/data/" + plot_obj.data_urls[state], function (data){

        plot_obj.last_selected_node = null;

        values = process_data(plot_obj, data);

        create_sprites(values, plot_obj.audio_idx);

        [x, y] = create_scales(plot_obj, values);
        plot_obj.x = x;
        plot_obj.y = y;

        //remove_loading_message(plot_obj);

        create_nodes(plot_obj, values);
    });
}

function process_data(plot_obj, raw_data){

    keys = d3.keys(raw_data);
    vals = d3.values(raw_data);


    for(i = 0; i < vals.length; i++){
        vals[i]["name"] = keys[i];

        if("colour" in vals[i]){
        }
        else{
            vals[i]["colour"] = plot_obj.default_node_col;
        }
    }


    return vals;
}

function create_scales(plot_obj, vals){
    var pad = plot_obj.dims[2];

        svg_obj = document.getElementById(plot_obj.divs[0]).firstChild;
        w = svg_obj.clientWidth;
        h = svg_obj.clientHeight;
        //w = plot_obj.dims[0],
        //h = plot_obj.dims[1];
    
    var min_x = d3.min(
                vals.map(function (d) {
                    return d.coords[0];
                })
            ),
        max_x = d3.max(
                vals.map(function (d) {
                    return d.coords[0];
                })
            ),
        x_scale = d3.scaleLinear()
            .domain([min_x, max_x])
            .range([pad, w - pad]),
        min_y = d3.min(
                vals.map(function (d) {
                    return d.coords[1];
                })
            ),
        max_y = d3.max(
                vals.map(function (d) {
                    return d.coords[1];
                })
            ),
        y_scale = d3.scaleLinear()
            .domain([min_y, max_y])
            .range([pad, w - pad]);

    return [x_scale, y_scale];
}

function create_nodes(plot_obj, vals){

    var mouseover = function(d){
        
        node_mouse_over(plot_obj, d);
    }
    var mouseleave = function(d){
        
        node_mouse_leave(plot_obj);
    }
    var nodeclick = function(d){
    
        node_mouse_click(plot_obj, d, this);
    }

    if(plot_obj.total_nodes == -1){

        plot_obj.svg.selectAll("circle")
            .data(vals)
            .enter()
            .append("circle")
            .on("mouseover", mouseover)
            .on("mouseleave", mouseleave)
            .on("click", nodeclick)
                .style("opacity", 0)
                .attr("class", "circle")
                .attr("cx", function(d){
                    return plot_obj.x(d.coords[0]);
                })
                .attr("cy", function(d){
                    return plot_obj.y(d.coords[1]);
                })
                //.style("fill", plot_obj.default_node_col)
                .attr("fill", function(d){
                    return d.colour;
                })

                .attr("r", 2)
            .transition()
            .duration(animation_duration)
                .style("opacity", 1);

        plot_obj.total_nodes = vals.length;
    } else if(plot_obj.total_nodes == vals.length){

        plot_obj.svg.selectAll(".circle")
            .data(vals)
                //.style("fill", plot_obj.default_node_col)
                .attr("fill", function(d){
                    return d.colour;
                })
            .transition()
            .duration(animation_duration)
                .attr("class", "circle")
                .attr("cx", function(d){
                    return plot_obj.x(d.coords[0]);
                })
                .attr("cy", function(d){
                    return plot_obj.y(d.coords[1]);
                })
                //.style("fill", plot_obj.default_node_col)
                .attr("fill", function(d){
                    return d.colour;
                })

                .attr("r", 2);

        plot_obj.total_nodes = vals.length;
    } else if(plot_obj.total_nodes < vals.length){

        var u = plot_obj.svg.selectAll(".circle")
            .data(vals)

        u
            .enter()
            .append("circle")
            .on("mouseover", mouseover)
            .on("mouseleave", mouseleave)
            .on("click", nodeclick)
            .merge(u)
                //.style("fill", plot_obj.default_node_col)
                .attr("fill", function(d){
                    return d.colour;
                })
            .transition()
            .duration(animation_duration)
                .attr("class", "circle")
                .attr("cx", function(d){
                    return plot_obj.x(d.coords[0]);
                })
                .attr("cy", function(d){
                    return plot_obj.y(d.coords[1]);
                })
                //.style("fill", plot_obj.default_node_col)
                .attr("fill", function(d){
                    return d.colour;
                })

                .attr("r", 2);

        plot_obj.total_nodes = vals.length;
    } else if(plot_obj.total_nodes > vals.length){

        var u = plot_obj.svg.selectAll(".circle")
            .data(vals)

        u
            //.style("fill", plot_obj.default_node_col)
            .attr("fill", function(d){
                return d.colour;
            })
            .transition()
            .duration(animation_duration)
                .attr("class", "circle")
                .attr("cx", function(d){
                    return plot_obj.x(d.coords[0]);
                })
                .attr("cy", function(d){
                    return plot_obj.y(d.coords[1]);
                })
                //.style("fill", plot_obj.default_node_col)
                .attr("fill", function(d){
                    return d.colour;
                })

                .attr("r", 2);

        u
            .exit()
            .transition()
            .duration(animation_duration)
            .style("opacity", 0)
            .remove()

        plot_obj.total_nodes = vals.length;
    }
}

function create_loading_message(plot_obj){

    remove_loading_message(plot_obj);

    plot_obj.svg
        .append("text")
        .attr("class", "loading")
        .text("Loading ...")
        .attr("x", function () {
            return (plot_obj.dims[0] / 2) - plot_obj.dims[2];
        })
        .attr("y", function () {
            return plot_obj.dims[1] / 2;
        })
        .style("fill", plot_obj.default_node_col);
}

function remove_loading_message(plot_obj){

    plot_obj.svg.selectAll(".loading").remove();
}

function node_mouse_over(plot_obj, data){
    
    plot_obj.label
            .html(data.name);
}

function node_mouse_leave(plot_obj){
    
    plot_obj.label
            .html("");
}

function node_mouse_click(plot_obj, data, selected_node){
    


    if(plot_obj.last_selected_node != null){
        plot_obj.last_selected_node
            //.style("fill", plot_obj.default_node_col)
            .style("fill", plot_obj.last_selected_node.colour)
    }
    
    plot_obj.last_selected_node = d3.select(selected_node)
        .style("fill", plot_obj.selected_node_col);

    if(sounds[plot_obj.audio_idx].state() == "loaded"){
        
        
        for(i = 0; i < sounds.length; i++){
            if(sounds[i].playing()){
                sounds[i].stop()
            }
        }

        // Play the sound:
        sounds[plot_obj.audio_idx].play(data.name);
        current_sound[0] = sounds[plot_obj.audio_idx];
        current_sound[1] = data.name;

        // Header:
        sprite_limits = sounds[plot_obj.audio_idx]._sprite[data.name];
        header_player_set_limits(sprite_limits[0], sprite_limits[0] + sprite_limits[1]);
        header_player_set_value(sprite_limits[0]);
        set_header_player_message(data.name);
        header_player_change_button("pause");

    } else if(sounds[plot_obj.audio_idx].state() == "loading"){
        console.log("Sound still loading...");
    }
}

function change_state_trigger(idx, val){
    change_state(scatters[idx], val);
}

// -------------------------------------------------------------------------------------
//
// S E G M E N T A T I O N
//
// -------------------------------------------------------------------------------------
segmentations = [];
segmentation_count = 0;

function add_new_segmentation(data_urls, dims, divs, audio){
    
    new_segmentation = create_segmentation(segmentation_count, data_urls, dims, divs, audio);
    segmentation_count++;
    segmentations.push(new_segmentation);
    seg_change_state(new_segmentation, 0);
}

function create_segmentation(idx, data_urls, dims, divs, audio){

    var segmentation = {
        idx: idx,
        data_urls: data_urls,
        dims: dims,
        divs: divs,
        audio: audio,
        audio_idx: get_audio_idx(audio),
        selected_seg_col: "#9B3434",
        hover_seg_col: "#5dbcd2",
        selected_segs: [],
        last_hover_seg: null,
        current_parent: "null",
        total_segs: [-1],
        current_state: data_urls[0]
    }

    segmentation.svg = create_seg_svg_element(segmentation);
    segmentation.label = create_seg_label_element(segmentation);
    if(segmentation.divs.length > 2){
        segmentation.select = create_seg_select_element(segmentation);
    }

    //create_loading_message(segmentation);

    return segmentation;
}

function create_seg_svg_element(seg_obj){

    var svg_element = d3.select("#" + seg_obj.divs[0])
            .append("svg")
            .attr("width", seg_obj.dims[0])
            .attr("height", seg_obj.dims[1])
            .attr("class", "segmentation_svg")
            .append("g");

    return svg_element;
}

function create_seg_label_element(seg_obj){

    var label_element = d3.select("#" + seg_obj.divs[1])
            //.append("p")
            .attr("class", "segmentation_label");

    return label_element;
}

function create_seg_select_element(seg_obj){

    var select_element = d3.select("#" + seg_obj.divs[2])
            .append("select")
            .attr("onchange", "seg_change_state_trigger(" + String(seg_obj.idx) + ", this.selectedIndex)")
            .attr("class", "segmentation_select");

    for(i = 0; i < seg_obj.data_urls.length; i++){
        select_element
            .append("option")
            .html(sel_option_format(seg_obj.data_urls[i]))
            .attr("value", i);
    }
    
    return select_element;
}

function seg_change_state(seg_obj, state){

    //create_loading_message(seg_obj);

    d3.json("/data/" + seg_obj.data_urls[state], function (data){

        if(state != seg_obj.current_state){
            seg_obj.last_selected_seg = null;
        }
        seg_obj.current_state = state;
        
        values = seg_process_data(seg_obj, data);

        seg_create_sprites(values, seg_obj.audio_idx);

        seg_obj.x = seg_create_scale(seg_obj, values);

        //remove_loading_message(seg_obj);

        create_segs(seg_obj, values);
    });
}

function seg_create_scale(plot_obj, vals){
    var pad = plot_obj.dims[2];

        svg_obj = document.getElementById(plot_obj.divs[0]).firstChild;
        //w = plot_obj.dims[0]; 
        w = svg_obj.clientWidth;
        

    start_array = [];
    end_array = [];
    for(keys in vals){
        start_array.push(vals[keys]["start_ms"]);
        end_array.push(vals[keys]["end_ms"]);
    }
    
    var min_x = d3.min(start_array),
        max_x = d3.max(end_array),
        x_scale = d3.scaleLinear()
            .domain([min_x, max_x])
            .range([pad, w - pad]);

    return x_scale;
}

function seg_change_state_trigger(idx, val){
    segmentations[idx].current_parent = "null"
    seg_change_state(segmentations[idx], val);
}

function seg_process_data(plot_obj, raw_data){

    vals = d3.values(raw_data)[0];

    return vals;
}

function get_siblings(par, vals){

    sibs = [];
    for(keys in vals){
        if(vals[keys]["parent"] == par){
            sibs.push(keys);
        }
    }

    return sibs;
}

function format_seg_data(data, keys){

    vals_format = [];
        for(key in data){
            if(keys.includes(key)){
                toAdd = {};
                toAdd["name"] = data[key]["name"];
                toAdd["key"] = key;
                toAdd["start"] = data[key]["start_ms"];
                toAdd["end"] = data[key]["end_ms"];
                toAdd["len"] = data[key]["len_ms"];
                toAdd["col"] = data[key]["col"];
                toAdd["parent"] = data[key]["parent"];
                toAdd["children"] = data[key]["children"];
                //toAdd["all_children"] = get_all_children(data, key);
                
                vals_format.push(toAdd);
            }   
        }

    return vals_format;
}

/*

function get_all_children(data, key){

    if(data[key]["children"] != "null"){
        console.log("searching for all children of " + key)
        console.log(key + "'s children: " + data[key]["children"]);
    }

    all_children = [];

    if(data[key]["children"] != "null"){
        for(i = 0; i < data[key]["children"].length; i++){

            the_child = data[key]["children"][i];

            console.log("adding: " + the_child);
            all_children.push(the_child);

            console.log("inspecting child " + the_child);
            childs_children = get_all_children(data, the_child);
            
            if(childs_children != "null"){
                for(j = 0; j < childs_children.length; j++){
                    all_children.push(childs_children[j]);
                }
            }
            
        }
    } 

    return all_children;
}
*/

function create_segs(seg_obj, vals){

    var mouseover = function(d){
        
        seg_mouse_over(seg_obj, d, this);
    }
    var mouseleave = function(d){
        
        seg_mouse_leave(seg_obj, d);
    }
    var segclick = function(d){
    
        seg_mouse_click(seg_obj, d, this);
    }

    if(seg_obj.total_segs[0] == -1){

        top_line = get_siblings("null", vals);

        vals_format = format_seg_data(vals, top_line);

        seg_obj.svg.selectAll("rect")
            .data(vals_format)
            .enter()
            .append("rect")
            .on("mouseover", mouseover)
            .on("mouseleave", mouseleave)
            .on("click", segclick)
                .style("opacity", 0)
                .attr("class", "rect_0")
                .attr("x", function(d){
                    return seg_obj.x(d.start);
                })
                .attr("y", seg_obj.dims[2])
                .attr("width", function(d){
                    return seg_obj.x(d.end) - seg_obj.x(d.start);
                })
                .attr("height", seg_obj.dims[1] - (2 * seg_obj.dims[2]))
                .style("fill", function(d){
                    if(seg_obj.selected_segs.includes(d.key)){
                        return selected_seg_col;
                    } else{
                        return "rgb(" + String(d.col[0] * 255) + "," + String(d.col[1] * 255) + "," + String(d.col[2] * 255) + ")";
                    }
                })
                .style("stroke", "black")
                .style("stroke-width", "1px")
                .transition()
                .duration(animation_duration)
                .style("opacity", 1);

                seg_obj.total_segs[0] = vals_format.length;
    } 

    else {

        datas = get_seg_datas(seg_obj, vals);
        
        /*
        console.log("");
        console.log(datas.length)
        console.log(datas);
        console.log("");
        */

        to_remove = 0;
        if(seg_obj.total_segs.length < datas.length){
            // here the old levels is shorter than incoming, so must create
            num_to_create = datas.length - seg_obj.total_segs.length;
            for(i = 0; i < num_to_create; i++){
                seg_obj.total_segs.push(-1);
            }
        } else if(seg_obj.total_segs.length > datas.length){
            // here old levels is longer than incoming, so must delete
            to_remove = seg_obj.total_segs.length - datas.length;
            for(i = 0; i < to_remove; i++){
                seg_obj.total_segs.pop();
            }
        }






        for(i = 0; i < to_remove; i++){
            // Delete old layers

            //console.log("to remove: " + String(to_remove))
            //console.log("deleting level: " + String(datas.length + i))

            seg_obj.svg.selectAll(".rect_" + String(datas.length + i))
                .transition()
                .duration(animation_duration)
                .style("opacity", 0)
                .remove()
        }





        //console.log("")
        //console.log(seg_obj.total_segs.length + ", " + datas.length);
        //console.log("")







        for(i = 0; i < datas.length; i++){

            formatted_data = format_seg_data(vals, datas[i]);

            /*
            console.log("")
            console.log("Level: " + i);
            console.log("data to format:")
            console.log(datas[i])
            console.log("Formatted data: ")
            console.log(formatted_data);
            console.log("Level previous total segs: " + seg_obj.total_segs[i]);
            console.log("Data length: " + formatted_data.length);
            console.log("")
            */

            

            if(seg_obj.total_segs[i] == -1){

                //console.log(i + ": creating");

            seg_obj.svg.selectAll(".rect_" + String(i))
                .data(formatted_data)
                .enter()
                .append("rect")
                .on("mouseover", mouseover)
                .on("mouseleave", mouseleave)
                .on("click", segclick)
                    .style("opacity", 0)
                    .attr("class", "rect_" + String(i))
                    .attr("x", function(d){
                        return seg_obj.x(d.start);
                    })
                    .attr("y", function(){
                        seg_height = (seg_obj.dims[1] - (2 * seg_obj.dims[2])) / datas.length;
                        return seg_obj.dims[2] + (i * seg_height);
                    })
                    .attr("width", function(d){
                        return seg_obj.x(d.end) - seg_obj.x(d.start);
                    })
                    .attr("height", function(){
                        seg_height = (seg_obj.dims[1] - (2 * seg_obj.dims[2])) / datas.length;
                        return (seg_height);
                    })
                    .style("fill", function(d){
                        if(seg_obj.selected_segs.includes(d.key)){
                            return selected_seg_col;
                        } else{
                            return "rgb(" + String(d.col[0] * 255) + "," + String(d.col[1] * 255) + "," + String(d.col[2] * 255) + ")";
                        }
                    })
                    .style("stroke", "black")
                    .style("stroke-width", "1px")
                    .transition()
                    .duration(animation_duration)
                    .style("opacity", 1);

                    seg_obj.total_segs[i] = formatted_data.length;
            }

            else if(seg_obj.total_segs[i] == formatted_data.length){

                //console.log(i + ": same");

                seg_obj.svg.selectAll(".rect_" + String(i))
                    .data(formatted_data)
                    .style("fill", function(d){
                        if(seg_obj.selected_segs.includes(d.key)){
                            return seg_obj.selected_seg_col;
                        } else{
                            return "rgb(" + String(d.col[0] * 255) + "," + String(d.col[1] * 255) + "," + String(d.col[2] * 255) + ")";
                        }
                    })
                    .transition()
                    .duration(animation_duration)
                    .attr("x", function(d){
                        return seg_obj.x(d.start);
                    })
                    .attr("y", function(){
                        seg_height = (seg_obj.dims[1] - (2 * seg_obj.dims[2])) / datas.length;
                        return seg_obj.dims[2] + (i * seg_height);
                    })
                    .attr("width", function(d){
                        return seg_obj.x(d.end) - seg_obj.x(d.start);
                    })
                    .attr("height", function(){
                        seg_height = (seg_obj.dims[1] - (2 * seg_obj.dims[2])) / datas.length;
                        return (seg_height);
                    })
                    
                    .style("stroke", "black")
                    .style("stroke-width", "1px")
        
                    seg_obj.total_segs[i] = formatted_data.length;
            } 

            else if(seg_obj.total_segs[i] < formatted_data.length){

                //console.log(i + ": less than");

                var u = seg_obj.svg.selectAll(".rect_" + String(i))
                    .data(formatted_data)

                u
                    .enter()
                    .append("rect")
                    .on("mouseover", mouseover)
                    .on("mouseleave", mouseleave)
                    .on("click", segclick)
                    .merge(u)
                        .attr("class", "rect_" + String(i))
                        .style("fill", function(d){
                            if(seg_obj.selected_segs.includes(d.key)){
                                return seg_obj.selected_seg_col;
                            } else{
                                return "rgb(" + String(d.col[0] * 255) + "," + String(d.col[1] * 255) + "," + String(d.col[2] * 255) + ")";
                            }
                        })
                    .transition()
                    .duration(animation_duration)
                        .attr("x", function(d){
                            return seg_obj.x(d.start);
                        })
                        .attr("y", function(){
                            seg_height = (seg_obj.dims[1] - (2 * seg_obj.dims[2])) / datas.length;
                            return seg_obj.dims[2] + (i * seg_height);
                        })
                        .attr("width", function(d){
                            return seg_obj.x(d.end) - seg_obj.x(d.start);
                        })
                        .attr("height", function(){
                            seg_height = (seg_obj.dims[1] - (2 * seg_obj.dims[2])) / datas.length;
                            return (seg_height);
                        })
                        
                        .style("stroke", "black")
                        .style("stroke-width", "1px")

                        seg_obj.total_segs[i] = formatted_data.length;
            }

            else if(seg_obj.total_segs[i] > formatted_data.length){

                //console.log(i + ": more than");

                var u = seg_obj.svg.selectAll(".rect_" + String(i))
                    .data(formatted_data)

                u
                .style("fill", function(d){
                    if(seg_obj.selected_segs.includes(d.key)){
                        return seg_obj.selected_seg_col;
                    } else{
                        return "rgb(" + String(d.col[0] * 255) + "," + String(d.col[1] * 255) + "," + String(d.col[2] * 255) + ")";
                    }
                })
                    .transition()
                    .duration(animation_duration)
                        .attr("x", function(d){
                            return seg_obj.x(d.start);
                        })
                        .attr("y", function(){
                            seg_height = (seg_obj.dims[1] - (2 * seg_obj.dims[2])) / datas.length;
                            return seg_obj.dims[2] + (i * seg_height);
                        })
                        .attr("width", function(d){
                            return seg_obj.x(d.end) - seg_obj.x(d.start);
                        })
                        .attr("height", function(){
                            seg_height = (seg_obj.dims[1] - (2 * seg_obj.dims[2])) / datas.length;
                            return (seg_height);
                        })
                        
                        .style("stroke", "black")
                        .style("stroke-width", "1px")

                u
                    .exit()
                    .transition()
                    .duration(animation_duration)
                    .style("opacity", 0)
                    .remove()

                    seg_obj.total_segs[i] = formatted_data.length;
                }
        }  
    }
}

function get_seg_datas(seg_obj, vals){
    
    return_datas = [];
    levels_list = [];

    if(seg_obj.current_parent == "null"){
        //console.log('parent was null so searching for first top level seg');
        found = false;
        for(keys in vals){
            while(found == false){
                if(vals[keys]["parent"] == "null"){
                    //console.log("found " + keys + " as null parent, added.")
                    levels_list.push(keys);
                    found = true;
                }
            }
        }
    } else{
        //console.log('parent wasnt null');
        //console.log('seeing if it has children:');
        if(vals[seg_obj.current_parent]["children"] != "null"){
            //console.log('has children, so adding first child');
            levels_list.push(vals[seg_obj.current_parent]["children"][0]);
        }

        //console.log("adding current parent");
        levels_list.push(seg_obj.current_parent);

        //console.log("Now we got up to the top");
        reached_top = false;
        temp_seg = seg_obj.current_parent;
        while(reached_top == false){
            if(vals[temp_seg]["parent"] == "null"){
                //console.log("The seg's parent was null, leave process!");
                reached_top = true;
            } else{
                //console.log("The seg's parent was " + vals[temp_seg]["parent"] + ", adding..");
                levels_list.push(vals[temp_seg]["parent"]);
                temp_seg = vals[temp_seg]["parent"];
            }
        }
    }

    //console.log("Final levels list:");
    //console.log(levels_list);
    levels_list.reverse();
    //console.log("reversed:");
    //console.log(levels_list);

    for(i = 0; i < levels_list.length; i++){
        to_add = get_siblings(vals[levels_list[i]]["parent"], vals);
        //console.log("adding to return datas: ");
        //console.log(to_add)
        return_datas.push(to_add);
    }

    return return_datas;
}

function seg_mouse_over(seg_obj, data, hover_seg){
    
    seg_obj.label
            .html(data.name);


    col_string = "rgb(" + String(data.col[0] * 200) + "," + String(data.col[1] * 200) + "," + String(data.col[2] * 200) + ")";

    seg_obj.last_hover_seg = d3.select(hover_seg)
        .style("fill", col_string);
}

function seg_mouse_leave(seg_obj, data){
    
    seg_obj.label
            .html("");

    col_string = "rgb(" + String(data.col[0] * 255) + "," + String(data.col[1] * 255) + "," + String(data.col[2] * 255) + ")";

    seg_obj.last_hover_seg
            .style("fill", col_string);
}

function seg_mouse_click(seg_obj, data, selected_seg){

    /*
    if(seg_obj.last_selected_seg != null){
        col_string = "rgb(" + String(data.col[0] * 255) + "," + String(data.col[1] * 255) + "," + String(data.col[2] * 255) + ")";
        seg_obj.last_selected_seg
            .style("fill", col_string)
    }
    
    seg_obj.last_selected_seg = d3.select(selected_seg)
        .style("fill", seg_obj.selected_seg_col);
    */

    if(sounds[seg_obj.audio_idx].state() == "loaded"){
        
        
        for(i = 0; i < sounds.length; i++){
            if(sounds[i].playing()){
                sounds[i].stop();
            }
        }

        //------------------------------------------------------------------------
        // FOR DYNAMIC VIDEO:
        //------------------------------------------------------------------------
        play_dynamic_video(data.start, data.end); // should be ms

        // Play the sound:
        sounds[seg_obj.audio_idx].play(data.key);
        current_sound[0] = sounds[seg_obj.audio_idx];
        current_sound[1] = data.key;

        // Header:
        sprite_limits = sounds[seg_obj.audio_idx]._sprite[data.key];
        header_player_set_limits(sprite_limits[0], sprite_limits[0] + sprite_limits[1]);
        header_player_set_value(sprite_limits[0]);
        set_header_player_message(data.name);
        header_player_change_button("pause");



    } else if(sounds[seg_obj.audio_idx].state() == "loading"){
        console.log("Sound still loading...");
    }


    //console.log("all children:")
    //console.log(data.all_children);


    if(data.key != seg_obj.current_parent){
        seg_obj.current_parent = data.key;
    } else{
        seg_obj.current_parent = data.parent;
    }

    /*
    if(seg_obj.current_parent == data.key){
        seg_obj.current_parent = data.parent;
    } else{
        seg_obj.current_parent = data.key;
    }
    */

    //seg_obj.selected_segs.push(data.key);
    //console.log(seg_obj.current_parent);

    seg_change_state(seg_obj, seg_obj.current_state);
}

// -------------------------------------------------------------------------------------
//
// S N I P P E T S
//
// -------------------------------------------------------------------------------------
snippets = [];
snippet_count = 0;

function add_new_snippet(snippet_div_id, snippet_text, snippet_audio, snippet_limits, snippet_name){
    
    new_snippet = create_snippet(snippet_count, snippet_div_id, snippet_text, snippet_audio, snippet_limits, snippet_name);
    snippet_count++;
    snippets.push(new_snippet);
    //seg_change_state(new_segmentation, 0);
}

function create_snippet(idx, snippet_div_id, snippet_text, snippet_audio, snippet_limits, snippet_name){

    var snippet = {
        idx: idx,
        div: snippet_div_id,
        text: snippet_text,
        audio: snippet_audio,
        audio_idx: get_audio_idx(snippet_audio),
        audio_limits: snippet_limits,
        name: snippet_name
    }

    snippet_div = document.getElementById(snippet.div);
    //let snippet_p = document.createElement("p");
    snippet_div.setAttribute("class", "snippet_text");
    snippet_div.innerHTML = snippet.text;
    //snippet_div.appendChild(snippet_p);


    // Create sprite:
    start = 0;
    if(snippet.audio_limits[0] == -1){
        start = 0;
    } else{
        start = snippet.audio_limits[0];
    }
    var end;
    if(snippet.audio_limits[1] == -1){
        end = 0;
    } else{
        end = snippet.audio_limits[1];
    }
    duration = end - start;
    key_name = snippet.name;

    sounds[snippet.audio_idx]._sprite[key_name] = [start, duration];


    snippet_div.onclick = function(){

        if(sounds[snippet.audio_idx].state() == "loaded"){
        
        
            for(i = 0; i < sounds.length; i++){
                if(sounds[i].playing()){
                    sounds[i].stop();
                }
            }
            
            // Play the sound:
            sounds[snippet.audio_idx].play(snippet.name);
            current_sound[0] = sounds[snippet.audio_idx];
            current_sound[1] = snippet.name;
    
            // Header:
            sprite_limits = sounds[snippet.audio_idx]._sprite[snippet.name];
            header_player_set_limits(sprite_limits[0], sprite_limits[0] + sprite_limits[1]);
            header_player_set_value(sprite_limits[0]);
            set_header_player_message(snippet.name);
            header_player_change_button("pause");
    
    
    
        } else if(sounds[snippet.audio_idx].state() == "loading"){
            console.log("Sound still loading...");
        }
    }

   

    return snippet;
}

// -------------------------------------------------------------------------------------
//
// M A X  P A T C H
//
// -------------------------------------------------------------------------------------
max_patches = [];
max_patch_count = 0;

function add_new_max_patch(data_urls, dims, divs){
    
    new_max_patch = create_max_patch(max_patch_count, data_urls, dims, divs);
    max_patch_count++;
    max_patches.push(new_max_patch);
    mp_change_state(new_max_patch, 0);
}

function create_max_patch(idx, data_urls, dims, divs, audio){

    var max_patch = {
        idx: idx,
        data_urls: data_urls,
        dims: dims,
        divs: divs,
        last_selected_element: null
    }

    max_patch.svg = mp_create_svg_element(max_patch);
    max_patch.label = mp_create_label_element(max_patch);
    if(max_patch.divs.length > 2){
        max_patch.select = mp_create_select_element(max_patch);
    }

    //create_loading_message(plot);

    return max_patch;
}

function mp_create_svg_element(plot_obj){

    var svg_element = d3.select("#" + plot_obj.divs[0])
            .append("svg")
            .attr("width", plot_obj.dims[0])
            .attr("height", plot_obj.dims[1])
            .attr("class", "max_patch_svg")
            .call(d3.zoom().on("zoom", function () {
                svg_element.attr("transform", d3.event.transform)
             }))
            .append("g");

    return svg_element;
}

function mp_create_label_element(mp_obj){

    var label_element = d3.select("#" + mp_obj.divs[1])
            //.append("p")
            .attr("class", "max_patch_abel");

    return label_element;
}

function mp_create_select_element(mp_obj){

    var select_element = d3.select("#" + mp_obj.divs[2])
            .append("select")
            .attr("onchange", "mp_change_state_trigger(" + String(mp_obj.idx) + ", this.selectedIndex)")
            .attr("class", "max_patch_select");

    for(i = 0; i < mp_obj.data_urls.length; i++){
        select_element
            .append("option")
            .html(sel_option_format(mp_obj.data_urls[i]))
            .attr("value", i);
    }
    
    return select_element;
}

function sel_option_format(original_string){

    if(original_string.includes("/")){
        string_list = original_string.split('/');
        original_string = string_list[string_list.length - 1]
    }

    return_string = original_string.replaceAll("_", ' ');

    return return_string
}

function mp_change_state_trigger(idx, val){
    mp_change_state(max_patches[idx], val);
}

function mp_change_state(mp_obj, state){

    //create_loading_message(mp_obj);

    d3.json("/data/" + mp_obj.data_urls[state], function (data){

        mp_obj.last_selected_element = null;

        values = mp_process_data(mp_obj, data);

        /*
        [x, y] = create_scales(mp_obj, values);
        mp_obj.x = x;
        mp_obj.y = y;
        */

        //remove_loading_message(mp_obj);

        mp_create_objects(mp_obj, values);
    });
}

function mp_process_data(mp_obj, raw_data){

    returnData = {};

    keys = d3.keys(raw_data);
    vals = d3.values(raw_data);

    console.log(vals);

    returnData["boxes"] = [];
    for(i = 0; i < vals[0]["boxes"].length; i++){

        boxDict = {};
        box = vals[0]["boxes"][i];

        box_keys = d3.keys(box["box"]);

        boxDict["id"] = box["box"]["id"];
        boxDict["maxclass"] = box["box"]["maxclass"];
        boxDict["numinlets"] = box["box"]["numinlets"];
        boxDict["numoutlets"] = box["box"]["numoutlets"];
        boxDict["x"] = box["box"]["patching_rect"][0];
        boxDict["y"] = box["box"]["patching_rect"][1];
        boxDict["w"] = box["box"]["patching_rect"][2];
        boxDict["h"] = box["box"]["patching_rect"][3];
        boxDict["outlettype"] = box["box"]["outlettype"];

        if(box_keys.includes("text")){
            boxDict["text"] = box["box"]["text"];
        } 
        if(box_keys.includes("comment")){
            boxDict["comment"] = box["box"]["comment"];
        }

        if(box["box"]["maxclass"] == "message"){
            boxDict["display_name"] = "Message";
        } 
        else if(box["box"]["maxclass"] == "live.text"){
            boxDict["display_name"] = "M4L Text";
        } 
        else if(box["box"]["maxclass"] == "button"){
            boxDict["display_name"] = "Button";
        } 
        else if(box["box"]["maxclass"] == "inlet"){
            boxDict["display_name"] = "Inlet";
        } 
        else if(box["box"]["maxclass"] == "outlet"){
            boxDict["display_name"] = "Outlet";
        }
        else if(box["box"]["maxclass"] == "comment"){
            boxDict["display_name"] = "Comment";
        } 
        else if(box["box"]["maxclass"] == "flonum"){
            boxDict["display_name"] = "Float";
        }
        else if(box["box"]["maxclass"] == "number"){
            boxDict["display_name"] = "Integer";
        }
        else if(box["box"]["maxclass"] == "slider"){
            boxDict["display_name"] = "Slider";
        } 
        else if(box["box"]["maxclass"] == "toggle"){
            boxDict["display_name"] = "Toggle";
        } 
        else if(box_keys.includes("text")){
            the_text = box["box"]["text"]
            if(the_text.substring(0, 2) == "t "){
                boxDict["display_name"] = "Trigger"
            } else{
                boxDict["display_name"] = box["box"]["text"];
            }
        } 
        else{
            boxDict["display_name"] = "Unknown Object";
        }

        if(box_keys.includes("comment")){
            boxDict["display_name"] = boxDict["display_name"] + " (" + boxDict["comment"] + "; " + box["box"]["id"] + ")";
        } else{
            boxDict["display_name"] = boxDict["display_name"] +  " (" + box["box"]["id"] + ")";
        }

        returnData["boxes"].push(boxDict);
    }

    returnData["lines"] = [];
    for(j = 0; j < vals[0]["lines"].length; j++){

        lineDict = {};
        line = vals[0]["lines"][j];

        lineDict["dest_obj"] = line["patchline"]["destination"][0];
        lineDict["dest_inlet"] = line["patchline"]["destination"][1];
        lineDict["source_obj"] = line["patchline"]["source"][0];
        lineDict["source_outlet"] = line["patchline"]["source"][1];

        src_idx = get_max_obj_idx_from_id(line["patchline"]["source"][0], returnData["boxes"]);
        if(returnData["boxes"][src_idx].outlettype[line["patchline"]["source"][1]] == "signal"){
            lineDict["line_type"] = "signal";
        } else{
            lineDict["line_type"] = "msp";
        }

        returnData["lines"].push(lineDict);
    }

    return returnData;
}

function mp_create_objects(mp_obj, vals){


    var mouseover = function(d){
        
        mp_mouse_over(mp_obj, d);
    }
    var mouseleave = function(d){
        
        mp_mouse_leave(mp_obj);
    }
    var nodeclick = function(d){
    
        mp_mouse_click(mp_obj, d, this);
    }

    var line_mouseover = function(d){
        
        mp_line_mouse_over(mp_obj, d, this);
    }
    var line_mouseleave = function(d){
        
        mp_line_mouse_leave(mp_obj, d, this);
    }
    var line_click = function(d){
    
        mp_line_mouse_click(mp_obj, d, this);
    }

    mp_obj.svg.selectAll(".max_obj")
        .transition()
        .duration(animation_duration)
        .style("opacity", 0)
        .remove()

    mp_obj.svg.selectAll(".max_line")
        .transition()
        .duration(animation_duration)
        .style("opacity", 0)
        .remove()

    box_data = vals["boxes"];
    line_data = vals["lines"];

    //draw lines:
    mp_obj.svg.selectAll("max_line")
            .data(line_data)
            .enter()
            .each(function(d){
                d3.select(this)
                    .append("line")
                    .on("mouseover", line_mouseover)
                    .on("mouseleave", line_mouseleave)
                    .on("click", line_click)
                    .style("opacity", 0)
                    .attr("class", "max_line")
                    .attr("x1", function(d){
                        var the_val = -1;
                        src_idx = get_max_obj_idx_from_id(d.source_obj, box_data);
                        if(d.source_outlet == 0){
                            the_val = box_data[src_idx].x + 4;
                        } 
                        else if(d.source_outlet == box_data[src_idx].numoutlets - 1){
                            the_val = (box_data[src_idx].x + box_data[src_idx].w) - 4;
                        } else{
                            edge_space = box_data[src_idx].w - 8;
                            
                            incr = edge_space / (box_data[src_idx].numoutlets - 1);
                            //the_val = (2 + (incr * d.source_outlet)) + box_data[src_idx].x;
                            the_val = box_data[src_idx].x + (incr * d.source_outlet) + 4;
                        }

                        return the_val;
                    })
                    .attr("y1", function(d){
                        src_idx = get_max_obj_idx_from_id(d.source_obj, box_data);

                        return box_data[src_idx].y +  box_data[src_idx].h;
                    })
                    .attr("x2", function(d){
                        var the_val = -1;
                        dest_idx = get_max_obj_idx_from_id(d.dest_obj, box_data);
                        if(d.dest_inlet == 0){
                            the_val = box_data[dest_idx].x + 4;
                        } 
                        else if(d.dest_inlet == box_data[dest_idx].numinlets - 1){
                            the_val = (box_data[dest_idx].x + box_data[dest_idx].w) - 4;
                        } else{
                            edge_space = box_data[dest_idx].w - 8;
                            
                            incr = edge_space / (box_data[dest_idx].numinlets - 1);
                            //the_val = 2 + (incr * d.dest_inlet);
                            the_val = box_data[dest_idx].x + (incr * d.dest_inlet) + 4;
                        }

                        return the_val;
                    })
                    .attr("y2", function(d){
                        dest_idx = get_max_obj_idx_from_id(d.dest_obj, box_data);

                        return box_data[dest_idx].y;
                    })
                    .style("stroke-width", 2)
                    .style("stroke", function(d){
                        var returnCol;
                        src_idx = get_max_obj_idx_from_id(d.source_obj, box_data);
                        if(box_data[src_idx].outlettype[d.source_outlet] == "signal"){
                            returnCol = "#daff83";
                        } else{
                            returnCol = "#b3b3b3";
                        }

                        return returnCol;
                    })
                    .transition()
                    .duration(animation_duration)
                    .style("opacity", 1);

            });

    //draw objects:
    mp_obj.svg.selectAll("max_obj")
            .data(box_data)
            .enter()
            .each(function(d){
                var cont = d3.select(this)
                        .append("g")
                        .on("mouseover", mouseover)
                        .on("mouseleave", mouseleave)
                        .on("click", nodeclick);

                if(d.maxclass == "message"){
                    

                    cont
                        .append("rect")
                        .style("opacity", 0)
                        .attr("class", "max_obj")
                        .attr("x", function(d){
                            return d.x;
                        })
                        .attr("y", function(d){
                            return d.y;
                        })
                        .attr("width", function(d){
                            return d.w;
                        })
                        .attr("height", function(d){
                            return d.h;
                        })
                        .attr("rx", 4)
                        .attr("ry", 4)
                        .style("fill", "#333333")
                        .transition()
                        .duration(animation_duration)
                        .style("opacity", 1);


                    //Text:
                    cont
                        .append("text")
                        .style("opacity", 0)
                        .attr("class", "max_obj")
                        .attr("x", function(d){
                            return d.x + 2;
                        })
                        .attr("y", function(d){
                            return d.y + 13;
                        })
                        .attr("font-family", "Arial")
                        .attr("font-size", 12)
                        .style("fill", "#F7F7F7")
                            .each(function(d){

                             
                                
                                treated_text = text_wrapper(d.text, d.w, "Arial", 12);
                                text_array = treated_text.split('*LINEBREAK*');

                                for(i = 0; i < text_array.length; i++){
                                    d3.select(this)
                                        .append("tspan")
                                        .attr("x", d.x + 2)
                                        .attr("y", d.y + 14 + (14 * i))
                                        .html(text_array[i]);
                                }

                                
                            })
                        .transition()
                        .duration(animation_duration)
                        .style("opacity", 1);

/*
                    cont
                        .append("text")
                        .style("opacity", 0)
                        .attr("class", "max_obj")
                        .attr("x", function(d){
                            return d.x + 2;
                        })
                        .attr("y", function(d){
                            return d.y + 15;
                        })
                        .attr("font-family", "Arial")
                        .attr("font-size", 12)
                        .style("fill", "#F7F7F7")
                        .html(d.text)
                        .transition()
                        .duration(animation_duration)
                        .style("opacity", 1);
*/
                    

                }

                else if(d.maxclass == "comment"){
                    // Bg: 
                    /*                   
                    cont
                        .append("rect")
                        .style("opacity", 0)
                        .attr("class", "max_obj")
                        .attr("x", function(d){
                            return d.x;
                        })
                        .attr("y", function(d){
                            return d.y;
                        })
                        .attr("width", function(d){
                            return d.w;
                        })
                        .attr("height", function(d){
                            return d.h;
                        })
                        .style("stroke", "#333333")
                        .style("fill-opacity", 0)
                        .transition()
                        .duration(animation_duration)
                        .style("opacity", 1);
                    */

                    //Text:
                    //Text:
                    cont
                        .append("text")
                        .style("opacity", 0)
                        .attr("class", "max_obj")
                        .attr("x", function(d){
                            return d.x + 2;
                        })
                        .attr("y", function(d){
                            return d.y + 13;
                        })
                        .attr("font-family", "Arial")
                        .attr("font-size", 12)
                        .style("fill", "#333333")
                            .each(function(d){

                             
                                
                                treated_text = text_wrapper(d.text, d.w, "Arial", 12);
                                text_array = treated_text.split('*LINEBREAK*');

                                for(i = 0; i < text_array.length; i++){
                                    d3.select(this)
                                        .append("tspan")
                                        .attr("x", d.x + 2)
                                        .attr("y", d.y + 14 + (14 * i))
                                        .html(text_array[i]);
                                }

                                
                            })
                        .transition()
                        .duration(animation_duration)
                        .style("opacity", 1);
                }

                else if(d.maxclass == "live.text"){
                    // Bg:
                    cont
                        .append("rect")
                        .style("opacity", 0)
                        .attr("class", "max_obj")
                        .attr("x", function(d){
                            return d.x;
                        })
                        .attr("y", function(d){
                            return d.y;
                        })
                        .attr("width", function(d){
                            return d.w;
                        })
                        .attr("height", function(d){
                            return d.h;
                        })
                        .style("fill", "#A5A5A5")
                        .transition()
                        .duration(animation_duration)
                        .style("opacity", 1);

                    //Text:
                    cont
                        .append("text")
                        .style("opacity", 0)
                        .attr("class", "max_obj")
                        .attr("x", function(d){
                            return d.x + 2;
                        })
                        .attr("y", function(d){
                            return d.y + 15;
                        })
                        .attr("font-family", "Arial")
                        .attr("font-size", 9.5)
                        .style("fill", "#F7F7F7")
                        .html(d.text)
                        .transition()
                        .duration(animation_duration)
                        .style("opacity", 1);
                }

                else if(d.maxclass == "inlet" || d.maxclass == "outlet"){
                    // Bg:
                    cont
                        .append("rect")
                        .style("opacity", 0)
                        .attr("class", "max_obj")
                        .attr("x", function(d){
                            return d.x;
                        })
                        .attr("y", function(d){
                            return d.y;
                        })
                        .attr("width", function(d){
                            return d.w;
                        })
                        .attr("height", function(d){
                            return d.h;
                        })
                        .style("fill", "#333333")
                        .transition()
                        .duration(animation_duration)
                        .style("opacity", 1);

                    if(d.maxclass == "inlet"){
                        cont
                            .append("polygon")
                            .style("opacity", 0)
                            .attr("class", "max_obj")
                            .attr("points", function(d){
                                point1 = String(d.x + 2) + "," + String(d.y + 2) + " ";
                                point2 = String((d.x + d.w) - 2) + "," + String(d.y + 2) + " ";
                                point3 = String(d.x + (d.w * 0.5)) + "," + String(d.y + (d.h * 0.5)) + " ";
                                return point1 + point2 + point3;
                            })
                            .style("fill", "#EDED5A")
                            .transition()
                            .duration(animation_duration)
                            .style("opacity", 1);
                    } else if(d.maxclass == "outlet"){
                        cont
                            .append("polygon")
                            .style("opacity", 0)
                            .attr("class", "max_obj")
                            .attr("points", function(d){
                                point1 = String(d.x + 2) + "," + String((d.y + d.h) - 4) + " ";
                                point2 = String((d.x + d.w) - 2) + "," + String((d.y + d.h) - 4) + " ";
                                point3 = String(d.x + (d.w * 0.5)) + "," + String(d.y + (d.h * 0.5)) + " ";
                                return point1 + point2 + point3;
                            })
                            .style("fill", "#EDED5A")
                            .transition()
                            .duration(animation_duration)
                            .style("opacity", 1);
                    }
                    
                }
                
                else if(d.maxclass == "button"){
                    // Bg:                    
                    cont
                        .append("rect")
                        .style("opacity", 0)
                        .attr("class", "max_obj")
                        .attr("x", function(d){
                            return d.x;
                        })
                        .attr("y", function(d){
                            return d.y;
                        })
                        .attr("width", function(d){
                            return d.w;
                        })
                        .attr("height", function(d){
                            return d.h;
                        })
                        .style("fill", "#333333")
                        .transition()
                        .duration(animation_duration)
                        .style("opacity", 1);

                    //circle:
                    cont
                        .append("circle")
                        .style("opacity", 0)
                        .attr("class", "max_obj")
                        .attr("cx", function(d){
                            return d.x + (d.w * 0.5);
                        })
                        .attr("cy", function(d){
                            return d.y + (d.w * 0.5);
                        })
                        .attr("r", function(d){
                            return (d.w * 0.5) - 2;
                        })
                        .style("stroke", "#595959")
                        .style("fill-opacity", 0)
                        .transition()
                        .duration(animation_duration)
                        .style("opacity", 1);
                }

                else if(d.maxclass == "toggle"){
                    // Bg:                    
                    cont
                        .append("rect")
                        .style("opacity", 0)
                        .attr("class", "max_obj")
                        .attr("x", function(d){
                            return d.x;
                        })
                        .attr("y", function(d){
                            return d.y;
                        })
                        .attr("width", function(d){
                            return d.w;
                        })
                        .attr("height", function(d){
                            return d.h;
                        })
                        .style("fill", "#333333")
                        .transition()
                        .duration(animation_duration)
                        .style("opacity", 1);

                    cont
                        .append("line")
                        .style("opacity", 0)
                        .attr("class", "max_obj")
                        .attr("x1", function(d){
                            return d.x + 4;
                        })
                        .attr("y1", function(d){
                            return d.y + 4;
                        })
                        .attr("x2", function(d){
                            return (d.x + d.w) - 4;
                        })
                        .attr("y2", function(d){
                            return (d.y + d.h) - 4;
                        })
                        .style("stroke-weight", 3)
                        .style("stroke", "#595959")
                        .transition()
                        .duration(animation_duration)
                        .style("opacity", 1);

                    cont
                        .append("line")
                        .style("opacity", 0)
                        .attr("class", "max_obj")
                        .attr("x1", function(d){
                            return (d.x + d.w) - 4;
                        })
                        .attr("y1", function(d){
                            return d.y + 4;
                        })
                        .attr("x2", function(d){
                            return d.x + 4
                        })
                        .attr("y2", function(d){
                            return (d.y + d.h) - 4;
                        })
                        .style("stroke-weight", 3)
                        .style("stroke", "#595959")
                        .transition()
                        .duration(animation_duration)
                        .style("opacity", 1);
                }

                else if(d.maxclass == "number" || d.maxclass == "flonum"){
                    // Bg:
                    cont
                        .append("rect")
                        .style("opacity", 0)
                        .attr("class", "max_obj")
                        .attr("x", function(d){
                            return d.x;
                        })
                        .attr("y", function(d){
                            return d.y;
                        })
                        .attr("width", function(d){
                            return d.w;
                        })
                        .attr("height", function(d){
                            return d.h;
                        })
                        .style("fill", "#333333")
                        .transition()
                        .duration(animation_duration)
                        .style("opacity", 1);

                    cont
                        .append("polygon")
                        .style("opacity", 0)
                        .attr("class", "max_obj")
                        .attr("points", function(d){
                            point1 = String(d.x + 2) + "," + String(d.y + 2) + " ";
                            point2 = String(d.x + 2) + "," + String((d.y + d.h) - 2) + " ";
                            point3 = String(d.x + 8) + "," + String(d.y + (d.h * 0.5)) + " ";
                            return point1 + point2 + point3;
                        })
                        .style("fill", "#EDED5A")
                        .transition()
                        .duration(animation_duration)
                        .style("opacity", 1);
                }

                else if(d.maxclass == "slider"){
                    // Bg:
                    cont
                        .append("rect")
                        .style("opacity", 0)
                        .attr("class", "max_obj")
                        .attr("x", function(d){
                            return d.x;
                        })
                        .attr("y", function(d){
                            return d.y;
                        })
                        .attr("width", function(d){
                            return d.w;
                        })
                        .attr("height", function(d){
                            return d.h;
                        })
                        .style("fill", "#333333")
                        .transition()
                        .duration(animation_duration)
                        .style("opacity", 1);

                    if(d.w > d.h){
                        cont
                            .append("rect")
                            .style("opacity", 0)
                            .attr("class", "max_obj")
                            .attr("x", function(d){
                                return d.x;
                            })
                            .attr("y", function(d){
                                return d.y;
                            })
                            .attr("width", function(d){
                                return d.w * 0.5;
                            })
                            .attr("height", function(d){
                                return d.h;
                            })
                            .style("fill", "#CEE5E8")
                            .transition()
                            .duration(animation_duration)
                            .style("opacity", 1);
                    } else{
                        cont
                        .append("rect")
                        .style("opacity", 0)
                        .attr("class", "max_obj")
                        .attr("x", function(d){
                            return d.x;
                        })
                        .attr("y", function(d){
                            return d.y + (d.h * 0.5);
                        })
                        .attr("width", function(d){
                            return d.w;
                        })
                        .attr("height", function(d){
                            return d.h * 0.5;
                        })
                        .style("fill", "#CEE5E8")
                        .transition()
                        .duration(animation_duration)
                        .style("opacity", 1);
                    }
                }
                
                else if("text" in d){
                    // Bg:
                    cont
                        .append("rect")
                        .style("opacity", 0)
                        .attr("class", "max_obj")
                        .attr("x", function(d){
                            return d.x;
                        })
                        .attr("y", function(d){
                            return d.y;
                        })
                        .attr("width", function(d){
                            return d.w;
                        })
                        .attr("height", function(d){
                            return d.h;
                        })
                        .style("fill", "#333333")
                        .transition()
                        .duration(animation_duration)
                        .style("opacity", 1);

                    //Borders:
                    cont
                        .append("rect")
                        .style("opacity", 0)
                        .attr("class", "max_obj")
                        .attr("x", function(d){
                            return d.x;
                        })
                        .attr("y", function(d){
                            return d.y;
                        })
                        .attr("width", function(d){
                            return d.w;
                        })
                        .attr("height", 4)
                        .style("fill", "#808080")
                        .transition()
                        .duration(animation_duration)
                        .style("opacity", 1);
                    cont
                        .append("rect")
                        .style("opacity", 0)
                        .attr("class", "max_obj")
                        .attr("x", function(d){
                            return d.x;
                        })
                        .attr("y", function(d){
                            return (d.y + d.h )- 4;
                        })
                        .attr("width", function(d){
                            return d.w;
                        })
                        .attr("height", 4)
                        .style("fill", "#808080")
                        .transition()
                        .duration(animation_duration)
                        .style("opacity", 1);

                    //Text:
                    cont
                        .append("text")
                        .style("opacity", 0)
                        .attr("class", "max_obj")
                        .attr("x", function(d){
                            return d.x + 2;
                        })
                        .attr("y", function(d){
                            return d.y + 15;
                        })
                        .attr("font-family", "Arial")
                        .attr("font-size", 12)
                        .style("fill", "#F7F7F7")
                            .each(function(d){
                                
                                treated_text = text_wrapper(d.text, d.w, "Arial", 12);
                                text_array = treated_text.split('*LINEBREAK*');

                                for(i = 0; i < text_array.length; i++){
                                    d3.select(this)
                                        .append("tspan")
                                        .attr("x", d.x + 2)
                                        .attr("y", d.y + 14 + (14 * i))
                                        .html(text_array[i]);
                                }
                            })
                        .transition()
                        .duration(animation_duration)
                        .style("opacity", 1);
                } 
                
                else{
                    cont
                    .append("rect")
                    .on("mouseover", mouseover)
                    .on("mouseleave", mouseleave)
                    .on("click", nodeclick)
                    .style("opacity", 0)
                    .attr("class", "max_obj")
                    .attr("x", function(d){
                        return d.x;
                    })
                    .attr("y", function(d){
                        return d.y;
                    })
                    .attr("width", function(d){
                        return d.w;
                    })
                    .attr("height", function(d){
                        return d.h;
                    })
                    .style("fill", "red")
                    .transition()
                    .duration(animation_duration)
                    .style("opacity", 1);
                }  

                
               // inlets:
               if(d.maxclass != "comment"){
                for(j = 0; j < d.numinlets; j++){
                    cont
                        .append("circle")
                        .style("opacity", 0)
                        .attr("class", "max_obj")
                        .attr("cx", function(d){
                            the_val = -1;
                            if(d.numinlets == 1){
                                the_val = d.x + 4;
                            } else if(d.numinlets == 2){
                                if(j == 0){
                                    the_val = d.x + 4;
                                } else{
                                    the_val = (d.x + d.w) - 4;
                                }   
                            } else if(d.numinlets > 2){
                                incr = (d.w - 8) / (d.numinlets - 1);
                                the_val = d.x + (j * incr) + 4;
                            }

                            return the_val;
                        })
                        .attr("cy", function(d){
                            return d.y;
                        })
                        .attr("r", 2)
                        .style("fill", "#4d4d4d")
                        .transition()
                        .duration(animation_duration)
                        .style("opacity", 1);
                }
                //outlets:
                for(j = 0; j < d.numoutlets; j++){
                    cont
                        .append("circle")
                        .style("opacity", 0)
                        .attr("class", "max_obj")
                        .attr("cx", function(d){
                            the_val = -1;
                            if(d.numoutlets == 1){
                                the_val = d.x + 4;
                            } else if(d.numoutlets == 2){
                                if(j == 0){
                                    the_val = d.x + 4;
                                } else{
                                    the_val = (d.x + d.w) - 4;
                                }   
                            } else if(d.numoutlets > 2){
                                incr = (d.w - 8) / (d.numoutlets - 1);
                                the_val = d.x + (j * incr) + 4;
                            }

                            return the_val;
                        })
                        .attr("cy", function(d){
                            return d.y + d.h;
                        })
                        .attr("r", 2)
                        .style("fill", "#4d4d4d")
                        .transition()
                        .duration(animation_duration)
                        .style("opacity", 1);
                }
               }
                
                

            });

    
}

function get_max_obj_idx_from_id(id, data){

    returnIdx = -1;
    for(i = 0; i < data.length; i++){
        if(id == data[i].id){
            returnIdx = i;
        }
    }

    return returnIdx;
}

function mp_mouse_over(mp_obj, data){

    mp_obj.label
            .html(data.display_name);
}

function mp_mouse_leave(mp_obj){
    
    mp_obj.label
            .html("");
}

function mp_mouse_click(mp_obj, data, selected_node){
  
    /*
    if(mp_obj.last_selected_node != null){
        mp_obj.last_selected_node
            .style("fill", mp_obj.default_node_col)
    }
    
    mp_obj.last_selected_node = d3.select(selected_node)
        .style("fill", mp_obj.selected_node_col);

    if(sounds[mp_obj.audio_idx].state() == "loaded"){
        
        
        for(i = 0; i < sounds.length; i++){
            if(sounds[i].playing()){
                sounds[i].stop()
            }
        }

        // Play the sound:
        sounds[mp_obj.audio_idx].play(data.name);
        current_sound[0] = sounds[mp_obj.audio_idx];
        current_sound[1] = data.name;

        // Header:
        sprite_limits = sounds[mp_obj.audio_idx]._sprite[data.name];
        header_player_set_limits(sprite_limits[0], sprite_limits[0] + sprite_limits[1]);
        header_player_set_value(sprite_limits[0]);
        set_header_player_message(data.name);
        header_player_change_button("pause");

    } else if(sounds[mp_obj.audio_idx].state() == "loading"){
        console.log("Sound still loading...");
    }
    */
}

function mp_line_mouse_over(mp_obj, data, hovered_line){
    d3.select(hovered_line)
        .style("stroke-width", 3)
        .style("stroke", "red");
    
}

function mp_line_mouse_leave(mp_obj, data, hovered_line){
    
    d3.select(hovered_line)
        .style("stroke-width", 2)
        .style("stroke", function(data){
            var returnCol;
            if(data.line_type == "signal"){
                returnCol = "#daff83";
            } else if(data.line_type == "msp"){
                returnCol = "#b3b3b3";
            }
            return returnCol;
        });
}

function mp_line_mouse_click(mp_obj, data, selected_node){
  
    /*
    if(mp_obj.last_selected_node != null){
        mp_obj.last_selected_node
            .style("fill", mp_obj.default_node_col)
    }
    
    mp_obj.last_selected_node = d3.select(selected_node)
        .style("fill", mp_obj.selected_node_col);

    if(sounds[mp_obj.audio_idx].state() == "loaded"){
        
        
        for(i = 0; i < sounds.length; i++){
            if(sounds[i].playing()){
                sounds[i].stop()
            }
        }

        // Play the sound:
        sounds[mp_obj.audio_idx].play(data.name);
        current_sound[0] = sounds[mp_obj.audio_idx];
        current_sound[1] = data.name;

        // Header:
        sprite_limits = sounds[mp_obj.audio_idx]._sprite[data.name];
        header_player_set_limits(sprite_limits[0], sprite_limits[0] + sprite_limits[1]);
        header_player_set_value(sprite_limits[0]);
        set_header_player_message(data.name);
        header_player_change_button("pause");

    } else if(sounds[mp_obj.audio_idx].state() == "loading"){
        console.log("Sound still loading...");
    }
    */
}

function text_wrapper(txt, wid, font, font_size){

    if (get_text_wid(txt, font, font_size) > wid) {   
        
        line_remainder = get_line(txt, wid, font, font_size);


        /*
        //TREAT HERE, IF NOT " *LINEBREAK*", there's a problem... DOESNT QUITE WORK
        line_arr = line_remainder[0].split(" ")
        if(line_arr.length > 2){
            if(line_arr[line_arr.length - 1] != " "){
                to_keep = line_remainder[0].substring(0, line_remainder[0].length - line_arr[line_arr.length - 1].length);
                to_retreat = line_arr[line_arr.length - 1] + line_remainder[1];
            }else{
                to_keep = line_remainder[0];
                to_retreat = line_remainder[1];
            }
        } else{
            to_keep = line_remainder[0];
            to_retreat = line_remainder[1];
        }
        */

       to_keep = line_remainder[0];
       to_retreat = line_remainder[1];
        
        

        return to_keep + '*LINEBREAK*' + text_wrapper(to_retreat, wid, font, font_size);
    }
    
    return txt;
}

function get_line(txt, wid, font, font_size){

    
    string_array = txt.split("");
    //console.log(string_array)

    var temp_string = '';
    var the_idx = 0;

    if(string_array.length > 2){
        for(i = 0; i < string_array.length; i++){
            temp_string = temp_string + string_array[i];
            if(get_text_wid(temp_string, font, font_size) > wid){
                if(i > 0){
                    the_idx = i - 1;
                } else{
                    the_idx = 0;
                }
                
                break;
            }
            if(i == string_array.length - 1){
                the_idx = i;
            }
        }
    
        var the_line = '';
        var the_rest = '';
    
        for(i = 0; i < the_idx - 1; i++){
            the_line = the_line + string_array[i];
        }
        for(i = the_idx - 1; i < string_array.length; i++){
            the_rest = the_rest + string_array[i];
        }
    
        /*
        console.log('');
        console.log(txt);
        console.log(the_line);
        console.log(the_rest);
        */
    
        return [the_line, the_rest];
    }

    else if(string_array.length == 2){
        return [string_array[0], string_array[1]];
    } else{
        return[string_array[0], ''];
    }
    
}

/*
function get_line(txt, wid, font, font_size){

    
    string_array = txt.split(" ");
    //console.log(string_array)

    var temp_string = '';
    var the_idx = 0;

    if(string_array.length > 2){
        for(i = 0; i < string_array.length; i++){
            temp_string = temp_string + string_array[i] + ' ';
            if(get_text_wid(temp_string, font, font_size) > wid){
                if(i > 0){
                    the_idx = i - 1;
                } else{
                    the_idx = 0;
                }
                
                break;
            }
            if(i == string_array.length - 1){
                the_idx = i;
            }
        }
    
        var the_line = '';
        var the_rest = '';
    
        for(i = 0; i < the_idx - 1; i++){
            the_line = the_line + string_array[i] + ' ';
        }
        for(i = the_idx - 1; i < string_array.length; i++){
            the_rest = the_rest + string_array[i] + ' ';
        }
    

        console.log('');
        console.log(txt);
        console.log(the_line);
        console.log(the_rest);

    
        return [the_line, the_rest];
    }

    else if(string_array.length == 2){
        return [string_array[0], string_array[1]];
    } else{
        return[string_array[0], ''];
    }
    
}
*/

function get_text_wid(txt, font, font_size){
    var canvas = document.createElement('canvas'),
    context = canvas.getContext('2d');

    context.font = font_size + 'px ' + font;
    width =  context.measureText(txt).width;

    return width;
}

// -------------------------------------------------------------------------------------
//
// N E T W O R K  G R A P H
//
// -------------------------------------------------------------------------------------
networks = [];
network_count = 0;

function add_new_network(data_urls, dims, divs){
    
    new_network = create_network(scatter_count, data_urls, dims, divs);
    network_count++;
    networks.push(new_network);
    network_change_state(new_network, 0);
}

function create_network(idx, data_urls, dims, divs){

    var network = {
        idx: idx,
        data_urls: data_urls,
        dims: dims,
        divs: divs,
        default_edge_col: "#E5E5E5",
        default_node_col: "#3283a8",
        default_text_col: "#a5b0b5",
        selected_node_col: "#9B3434",
        last_selected_node: null,
        total_nodes: -1
    }

    network.svg = network_create_svg_element(network);
    network.label = network_create_label_element(network);
    if(network.divs.length > 2){
        network.select = network_create_select_element(network);
    }

    //create_loading_message(network);

    return network;
}

function network_create_svg_element(net_obj){

    var svg_element = d3.select("#" + net_obj.divs[0])
            .append("svg")
            .attr("width", net_obj.dims[0])
            .attr("height", net_obj.dims[1])
            .attr("class", "network_graph_svg")
            .call(d3.zoom().on("zoom", function () {
                svg_element.attr("transform", d3.event.transform)
             }))
            .append("g");

    return svg_element;
}

function network_create_label_element(net_obj){

    var label_element = d3.select("#" + net_obj.divs[1])
            //.append("p")
            .attr("class", "network_graph_label");

    return label_element;
}

function network_create_select_element(net_obj){

    var select_element = d3.select("#" + net_obj.divs[2])
            .append("select")
            .attr("onchange", "network_change_state_trigger(" + String(net_obj.idx) + ", this.selectedIndex)")
            .attr("class", "network_graph_select");

    for(i = 0; i < net_obj.data_urls.length; i++){
        select_element
            .append("option")
            .html(sel_option_format(net_obj.data_urls[i]))
            .attr("value", i);
    }
    
    return select_element;
}

function network_change_state_trigger(idx, val){
    network_change_state(networks[idx], val);
}

function network_change_state(net_obj, state){

    //create_loading_message(plot_obj);

    d3.json("/data/" + net_obj.data_urls[state], function (data){

        net_obj.last_selected_node = null;

        values = network_process_data(net_obj, data);

        [x, y] = network_create_scales(net_obj, values["nodes"]);
        net_obj.x = x;
        net_obj.y = y;

        //remove_loading_message(net_obj);

        network_create_nodes(net_obj, values);
    });
}

function network_process_data(net_obj, raw_data){

    retData = {}
    retData["nodes"] = raw_data["elements"]["nodes"]
    retData["edges"] = raw_data["elements"]["edges"]

    return retData;
}

function network_create_scales(net_obj, vals){
    var pad = net_obj.dims[2];

        svg_obj = document.getElementById(net_obj.divs[0]).firstChild;
        w = svg_obj.clientWidth;
        h = svg_obj.clientHeight;
        //w = net_obj.dims[0],
        //h = net_obj.dims[1];
    
    var min_x = d3.min(
                vals.map(function (d) {
                    return d.position.x;
                })
            ),
        max_x = d3.max(
                vals.map(function (d) {
                    return d.position.x;
                })
            ),
        x_scale = d3.scaleLinear()
            .domain([min_x, max_x])
            .range([pad, w - pad]),
        min_y = d3.min(
                vals.map(function (d) {
                    return d.position.y;
                })
            ),
        max_y = d3.max(
                vals.map(function (d) {
                    return d.position.y;
                })
            ),
        y_scale = d3.scaleLinear()
            .domain([min_y, max_y])
            .range([pad, w - pad]);

    return [x_scale, y_scale];
}

function network_create_nodes(net_obj, vals){

    var mouseover = function(d){
        
        network_node_mouse_over(net_obj, d);
    }
    var mouseleave = function(d){
        
        network_node_mouse_leave(net_obj);
    }
    var nodeclick = function(d){
    
        network_node_mouse_click(net_obj, d, this);
    }

    var edge_mouseover = function(d){
        
        edge_node_mouse_over(net_obj, d, this);
    }
    var edge_mouseleave = function(d){
        
        edge_node_mouse_leave(net_obj, this);
    }
    var edge_nodeclick = function(d){
    
        edge_node_mouse_click(net_obj, d, this);
    }

    node_vals = vals["nodes"];
    edge_vals = vals["edges"];

    net_obj.svg.selectAll(".lines")
        .transition()
        .duration(animation_duration)
        .style("opacity", 0)
        .remove()

    net_obj.svg.selectAll(".circle")
        .transition()
        .duration(animation_duration)
        .style("opacity", 0)
        .remove()

    net_obj.svg.selectAll(".lines")
        .data(edge_vals)
        .enter()
        .append("line")
        .on("mouseover", edge_mouseover)
        .on("mouseleave", edge_mouseleave)
        .on("click", edge_nodeclick)
            .style("opacity", 0)
            .attr("class", "lines")
            .attr("x1", function(d){
                the_source = network_get_node_from_id(d.data.source, node_vals);
                return net_obj.x(the_source.position.x);
            })
            .attr("y1", function(d){
                the_source = network_get_node_from_id(d.data.source, node_vals);
                return net_obj.y(the_source.position.y);
            })
            .attr("x2", function(d){
                the_source = network_get_node_from_id(d.data.target, node_vals);
                return net_obj.x(the_source.position.x);
            })
            .attr("y2", function(d){
                the_source = network_get_node_from_id(d.data.target, node_vals);
                return net_obj.y(the_source.position.y);
            })
            .style("stroke-width", 2)
            .style("stroke", net_obj.default_edge_col)
            
        .transition()
        .duration(animation_duration)
            .style("opacity", 1);

        net_obj.svg.selectAll("circle")
            .data(node_vals)
            .enter()
            .each(function(d){
                var cont = d3.select(this)
                    .append("g")
                    .on("mouseover", mouseover)
                    .on("mouseleave", mouseleave)
                    .on("click", nodeclick);

                cont
                .append("circle")
            .on("mouseover", mouseover)
            .on("mouseleave", mouseleave)
            .on("click", nodeclick)
                .style("opacity", 0)
                .attr("class", "circle")
                .attr("cx", function(d){
                    return net_obj.x(d.position.x);
                })
                .attr("cy", function(d){
                    return net_obj.y(d.position.y);
                })
                .style("fill", net_obj.default_node_col)
                .attr("r", 4)
            .transition()
            .duration(animation_duration)
                .style("opacity", 1);

                cont
                .append("text")
                .style("opacity", 0)
                .attr("class", "circle")
                .attr("x", function(d){
                    return net_obj.x(d.position.x + 2);
                })
                .attr("y", function(d){
                    return net_obj.y(d.position.y + 15);
                })
                .attr("font-family", "Arial")
                .attr("font-size", 10)
                .style("fill", net_obj.default_text_col)
                    .each(function(d){
                        d3.select(this)
                                .append("tspan")
                                .attr("x", net_obj.x(d.position.x))
                                .attr("y", net_obj.y(d.position.y))
                                .html(d.data.name);
                    })
                .transition()
                .duration(animation_duration)
                .style("opacity", 1);

            })
                net_obj.total_nodes = node_vals.length;

}

function network_get_node_from_id(id, data){

    for(i = 0; i < data.length; i ++){
        if(data[i].data.id == id){
            return data[i];
        }
    }


}

function network_node_mouse_over(net_obj, data){
    
    the_string = data.data.name;
    the_string = the_string + ". Type(s): ";
    for(i = 0; i < data.data.type.length; i++){
        the_string = the_string + data.data.type[i];
        if(i != data.data.type.length - 1){
            the_string = the_string + ", ";
        }
    }
    the_string = the_string + ". Subtype(s): ";
    for(i = 0; i < data.data.subtype.length; i++){
        the_string = the_string + data.data.subtype[i];
        if(i != data.data.subtype.length - 1){
            the_string = the_string + ", ";
        }
    }
    the_string = the_string + ".";


    net_obj.label
            .html(the_string);
}

function network_node_mouse_leave(net_obj){
    
    net_obj.label
            .html("");
}

function network_node_mouse_click(net_obj, data, selected_node){
    
    /*
    if(net_obj.last_selected_node != null){
        net_obj.last_selected_node
            .style("fill", net_obj.default_node_col)
    }
    
    net_obj.last_selected_node = d3.select(selected_node)
        .style("fill", net_obj.selected_node_col);

    if(sounds[net_obj.audio_idx].state() == "loaded"){
        
        
        for(i = 0; i < sounds.length; i++){
            if(sounds[i].playing()){
                sounds[i].stop()
            }
        }

        // Play the sound:
        sounds[net_obj.audio_idx].play(data.name);
        current_sound[0] = sounds[net_obj.audio_idx];
        current_sound[1] = data.name;

        // Header:
        sprite_limits = sounds[net_obj.audio_idx]._sprite[data.name];
        header_player_set_limits(sprite_limits[0], sprite_limits[0] + sprite_limits[1]);
        header_player_set_value(sprite_limits[0]);
        set_header_player_message(data.name);
        header_player_change_button("pause");

    } else if(sounds[net_obj.audio_idx].state() == "loading"){
        console.log("Sound still loading...");
    }
    */
}

function edge_node_mouse_over(net_obj, data, hovered_edge){
    
    the_string = data.data.name;
    the_string = the_string + ". Description: ";
    the_string = the_string + data.data.description;

    net_obj.label
            .html(the_string);

    d3.select(hovered_edge)
            .style("stroke-width", 3)
            .style("stroke", "red");
}

function edge_node_mouse_leave(net_obj, hovered_edge){
    
    net_obj.label
            .html("");

            d3.select(hovered_edge)
            .style("stroke-width", 2)
            .style("stroke", net_obj.default_edge_col)
            
}

function edge_node_mouse_click(net_obj, data, selected_node){
    
    /*
    if(net_obj.last_selected_node != null){
        net_obj.last_selected_node
            .style("fill", net_obj.default_node_col)
    }
    
    net_obj.last_selected_node = d3.select(selected_node)
        .style("fill", net_obj.selected_node_col);

    if(sounds[net_obj.audio_idx].state() == "loaded"){
        
        
        for(i = 0; i < sounds.length; i++){
            if(sounds[i].playing()){
                sounds[i].stop()
            }
        }

        // Play the sound:
        sounds[net_obj.audio_idx].play(data.name);
        current_sound[0] = sounds[net_obj.audio_idx];
        current_sound[1] = data.name;

        // Header:
        sprite_limits = sounds[net_obj.audio_idx]._sprite[data.name];
        header_player_set_limits(sprite_limits[0], sprite_limits[0] + sprite_limits[1]);
        header_player_set_value(sprite_limits[0]);
        set_header_player_message(data.name);
        header_player_change_button("pause");

    } else if(sounds[net_obj.audio_idx].state() == "loading"){
        console.log("Sound still loading...");
    }
    */
}