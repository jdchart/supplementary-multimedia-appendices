header_div_id = document.currentScript.getAttribute('header_div_id');

let header_node = document.getElementById(header_div_id);

// Adding space:
let header_space = document.createElement("div");
header_space.style.height = String(header_node.offsetHeight) + "px";
header_node.after(header_space);

// Adding image divs:
let image_0_div = document.createElement("div");
image_0_div.setAttribute("id", "image_0_div");
image_0_div.style.height = String(header_node.offsetHeight) + "px";
image_0_div.style.width = String(header_node.offsetHeight) + "px";
image_0_div.style.position = "relative";
header_node.appendChild(image_0_div);

let image_1_div = document.createElement("div");
image_1_div.setAttribute("id", "image_1_div");
image_1_div.style.height = String(header_node.offsetHeight) + "px";
image_1_div.style.width = "0px";
image_1_div.style.position = "relative";
header_node.appendChild(image_1_div);

// Adding info + scrub div
let info_scrub_div = document.createElement("div");
info_scrub_div.setAttribute("id", "info_scrub_div");
info_scrub_div.style.height = String(header_node.offsetHeight) + "px";
header_node.appendChild(info_scrub_div);

// Adding info div
let info_div = document.createElement("div");
info_div.setAttribute("id", "info_div");
info_div.style.height = String(header_node.offsetHeight * 0.5) + "px";
info_scrub_div.appendChild(info_div);

// Adding scrub div
let scrub_div = document.createElement("div");
scrub_div.setAttribute("id", "scrub_div");
scrub_div.style.height = String(header_node.offsetHeight * 0.5) + "px";
info_scrub_div.appendChild(scrub_div);

// Adding info p
let info_p = document.createElement("p");
info_p.setAttribute("id", "info_p");
info_p.style.height = String(header_node.offsetHeight * 0.5) + "px";
info_p.innerHTML = "Loading sounds...";
info_div.appendChild(info_p);

// Adding time p
let time_p = document.createElement("p");
time_p.setAttribute("id", "time_p");
time_p.style.height = String(header_node.offsetHeight * 0.5) + "px";
time_p.innerHTML = "";
info_div.appendChild(time_p);
var current_sprite_min_max = [0, 0];

// Adding scrub slider
let scrub_input = document.createElement("input");
scrub_input.disabled = true;
scrub_input.setAttribute("type", "range");
scrub_input.setAttribute("id", "scrub_input");
scrub_input.setAttribute("min", "0");
scrub_input.setAttribute("max", "0");
scrub_input.setAttribute("value", "0");
scrub_div.style.height = String(header_node.offsetHeight * 0.5) + "px";
scrub_div.appendChild(scrub_input);
scrub_input.oninput = function(){
    current_sound[0].seek(scrub_input.value / 1000);

    //------------------------------------------------------------------------
        // FOR DYNAMIC VIDEO:
        //------------------------------------------------------------------------
    seek_dynamic_video(scrub_input.value / 1000);
}

// Adding loading image:
let loading_img = document.createElement('img');
loading_img.setAttribute("src", "/img/loading.png");
loading_img.setAttribute("alt", "loading audio");
loading_img.setAttribute("id", "audio_loading_img");
image_0_div.appendChild(loading_img);

// Adding play image:
let play_img = document.createElement('img');
play_img.setAttribute("src", "/img/play.png");
play_img.setAttribute("alt", "play audio");
play_img.setAttribute("id", "audio_play_img");
play_img.onclick = function(){
    if(play_state[0] != "loaded" || play_state[0] != "loading"){
        if(play_state[0] == "stop"){
            current_sound[0].play(current_sound[1]);
            
            //------------------------------------------------------------------------
        // FOR DYNAMIC VIDEO:
        //------------------------------------------------------------------------
            play_dynamic_video_from_beginning();

        }
        else if(play_state[0] == "play"){
            current_sound[0].pause();

            //------------------------------------------------------------------------
        // FOR DYNAMIC VIDEO:
        //------------------------------------------------------------------------
            pause_dynamic_video();
        }
        else if(play_state[0] == "pause"){

            

            current_sound[0].play();

            //------------------------------------------------------------------------
        // FOR DYNAMIC VIDEO:
        //------------------------------------------------------------------------
            resume_dynamic_video();
        }
    }
}

// Adding stop image:
let stop_img = document.createElement('img');
stop_img.setAttribute("src", "/img/stop-button.png");
stop_img.setAttribute("alt", "play stop");
stop_img.setAttribute("id", "audio_stop_img");
stop_img.onclick = function(){
    if(play_state[0] == "play" || play_state[0] == "pause"){
        current_sound[0].stop();

        //DYNAMIC VIDEO:
        pause_dynamic_video();
    }
}

function set_header_player_message(msg){
    info_p.innerHTML = msg;
}

function header_player_loading_finished(){
    set_header_player_message("All sounds loaded!");
    remove_element("audio_loading_img");
    image_0_div.appendChild(play_img);
    image_1_div.style.width = String(header_node.offsetHeight) + "px";
    image_1_div.appendChild(stop_img);

    scrub_input.disabled = false;
}

function remove_element(element_id) {
    var element = document.getElementById(element_id);
    element.parentNode.removeChild(element);
}

function header_player_set_limits(min, max){
    scrub_input.setAttribute("min", String(min));
    scrub_input.setAttribute("max", String(max));
    current_sprite_min_max[0] = min;
    current_sprite_min_max[1] = max;
}

function header_player_set_value(val){
    scrub_input.value = val;
    the_pos = val - current_sprite_min_max[0];
    the_max = current_sprite_min_max[1] - current_sprite_min_max[0];
    time_p.innerHTML = "(" + ms_format(the_pos) + "/" + ms_format(the_max) + ")";
}

function ms_format(ms){

    seconds = (ms / 1000) % 60;
    //minutes = (ms / 1000) / 60;
    minutes = Math.floor((ms / 1000) / 60);
    
    if(seconds < 10){
        secondString = "0" + String(seconds.toFixed(2))
    } else{
        secondString = String(seconds.toFixed(2));
    }

    if(minutes < 10){
        minuteString = "0" + String(minutes.toFixed(2))
    } else{
        minuteString = String(minutes.toFixed(2));
    }

    return parseInt(minuteString) + ":" + secondString;
}

function header_player_change_button(btn){
    
    if(btn == "play"){
        play_img.setAttribute("src", "/img/play.png");
    }
    else if(btn == "pause"){
        play_img.setAttribute("src", "/img/pause.png");
    }
}

if(audio_urls.length == 0){
    header_player_loading_finished();
    play_state[0] = "loaded";
    play_state[1] = 0;
    set_header_player_message("No sounds on this page...");
}