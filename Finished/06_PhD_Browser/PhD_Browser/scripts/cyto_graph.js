element_div = document.currentScript.getAttribute('the_div');


 let cy;

 // just a standard http get request
 fetch("/data/constanzo_network_graphs/constanzo_global_circular.cyjs")
   .then( response => response.json() )
   .then( exportedJson => {
       console.log(exportedJson["elements"])

        formatted_elements = [];
        formatted_positions = [];

        for (i = 0; i < exportedJson["elements"]["nodes"].length; i++){
            entry = {};
            data_entry = {};
            data_entry['id'] = exportedJson["elements"]["nodes"][i]["data"]['SUID'];
            data_entry['name'] = exportedJson["elements"]["nodes"][i]["data"]['name'];


            entry["data"] = data_entry;
            
            pos_entry = []
            //pos_entry.push(exportedJson["elements"]["nodes"][i]["data"]['SUID']);
            formatted_positions.push(exportedJson["elements"]["nodes"][i]["position"]);
            formatted_positions.push(pos_entry)
            
            entry["group"] = "nodes";
            formatted_elements.push(entry);
        }


        for (i = 0; i < exportedJson["elements"]["edges"].length; i++){
            entry = {};

            data_entry = {};
            data_entry["id"] = exportedJson["elements"]["edges"][i]["data"]['SUID'];
            data_entry["source"] = exportedJson["elements"]["edges"][i]["data"]['source'];
            data_entry["target"] = exportedJson["elements"]["edges"][i]["data"]['target'];


            entry["data"] = data_entry;
            entry["group"] = "edges";
            formatted_elements.push(entry);
        }




     cy = cytoscape( {

        container: document.getElementById(element_div),

        //elements: exportedJson["elements"]

        elements: formatted_elements,

        style: [ // the stylesheet for the graph
            {
            selector: 'node',
            style: {
                'background-color': '#666',
                'label': 'data(name)'
            }
            },

            {
            selector: 'edge',
            style: {
                'width': 3,
                'line-color': '#ccc',
                'target-arrow-color': '#ccc',
                'target-arrow-shape': 'triangle',
                'curve-style': 'bezier'
            }
            }
        ],

     }); // and use the json verbatim

     let options = {

        name: 'preset',

        positions: formatted_positions, // map of (node id) => (position obj); or function(node){ return somPos; }
        zoom: undefined, // the zoom level to set (prob want fit = false if set)
        pan: undefined, // the pan level to set (prob want fit = false if set)
        fit: true, // whether to fit to viewport
        padding: 30, // padding on fit
        animate: false, // whether to transition the node positions
        animationDuration: 500, // duration of animation in ms if enabled
        animationEasing: undefined, // easing of animation if enabled
        animateFilter: function ( node, i ){ return true; }, // a function that determines whether the node should be animated.  All nodes animated by default on animate enabled.  Non-animated nodes are positioned immediately when the layout starts
        ready: undefined, // callback on layoutready
        stop: undefined, // callback on layoutstop
        transform: function (node, position ){ return position; } // transform a given node position. Useful for changing flow direction in discrete layouts
    };

      layout = cy.layout(options);
      layout.run();


   } )
 ;
 