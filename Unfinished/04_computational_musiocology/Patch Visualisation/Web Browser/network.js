// Uses d3.v4, not v5 (see bottom)

// need to cd to /Users/macbook/Documents/Code/GitHub_repos/computationalMusicology/Patch Visualisation/Web Browser/
// the python -m SimpleHTTPServer

// Selecting the canvas:
var canvas = d3.select('#network'),
width      = canvas.attr("width"),
height     = canvas.attr("height"),
r          = 50, // Radius of the nodes
ctx        = canvas.node().getContext("2d"),
// Simulation objects:
simulation = d3.forceSimulation()
    .force('x'      , d3.forceX(width / 2))
    .force('y'      , d3.forceY(height / 2))
    .force('collide', d3.forceCollide(r))
    .force('charge' , d3.forceManyBody()
        .strength(-200))
    .force('link'   , d3.forceLink()
        .id(function (d) { return d.uniqueid; })) // What ID to look for in the node list <---
    // update everytime something happens.

// Assigning random coordinates:
// graph.nodes.forEach(function (d) {
//     d.x = Math.random() * width;
//     d.y = Math.random() * height;
// });

d3.json('json_export.json', function (err, graph) {
    if (err) throw err;

    simulation.nodes(graph.nodes)
        .on("tick", update)
        .force('link')
        .links(graph.links);

    canvas
        .call(d3.drag()
        .container(canvas.node())
        .subject(dragsubject)
        .on("start", dragstarted)
        .on("drag" , dragged)
        .on("end"  , dragended));

    function update() {
        ctx.clearRect(0, 0, width, height); // Clearing whole canvas.
    
        // Background:
        ctx.beginPath();
        ctx.globalAlpha = 1.0;
        ctx.moveTo(0, 0);
        ctx.fillStyle = '#E5E5E5';
        ctx.rect(0, 0, width, height);
        ctx.fill()

        // Draw edges:
        ctx.beginPath();
        ctx.globalAlpha = 0.8;
        ctx.strokeStyle = '#B3B3B3';
        graph.links.forEach(drawLink);
        ctx.stroke();
    
        // Draw nodes:
        // ctx.beginPath();
        // ctx.globalAlpha = 1.0;
        // graph.nodes.forEach(drawNodeBack);
        // ctx.fill();
        // ctx.beginPath();
        // graph.nodes.forEach(drawNodeFront);
        // ctx.fill();

        ctx.globalAlpha = 1.0;
        graph.nodes.forEach(drawNode);
    }

    function dragsubject() {
        return simulation.find(d3.event.x, d3.event.y);
    }
})

function drawNode(d) {
    ctx.beginPath();
    ctx.moveTo(d.x, d.y);
    ctx.fillStyle = '#808080';
    ctx.rect(d.x - (r * 0.5), d.y - (r * 0.25), r, r * 0.5);
    ctx.fill();
    ctx.beginPath();
    ctx.fillStyle = '#333333';
    ctx.rect(d.x - (r * 0.5), d.y - (r * 0.125), r, r * 0.25);
    ctx.fill();

    // Label:
    ctx.fillStyle = '#F7F7F7';
    ctx.font = "12px Arial";
    ctx.textAlign = "center";
    ctx.fillText(d.displayname, d.x, d.y + (r * 0.05));
}

// function drawNodeBack(d) {
//     ctx.moveTo(d.x, d.y);
//     ctx.fillStyle = '#808080';
//     ctx.rect(d.x - (r * 0.5), d.y - (r * 0.25), r, r * 0.5);
// }

// function drawNodeFront(d) {
//     ctx.moveTo(d.x, d.y);
//     ctx.fillStyle = '#333333';
//     ctx.rect(d.x - (r * 0.5), d.y - (r * 0.125), r, r * 0.25);
//     ctx.fill();
// }

function drawLink(l) {
    ctx.moveTo(l.source.x, l.source.y); // Moving the cursor
    ctx.lineTo(l.target.x, l.target.y);
}

function dragstarted() {
    if (!d3.event.active) simulation.alphaTarget(0.3).restart();
    d3.event.subject.fx = d3.event.subject.x;
    d3.event.subject.fy = d3.event.subject.y;

    //console.log(d3.event.subject);
    d3.select('#selected_node').text('Object: ' + d3.event.subject.displayname)
    d3.select('#selected_uniqueid').text('ID: ' + d3.event.subject.uniqueid)
    d3.select('#selected_parent').text('Parent: ' + d3.event.subject.parent)
}
  
  function dragged() {
    d3.event.subject.fx = d3.event.x;
    d3.event.subject.fy = d3.event.y;
}
  
  function dragended() {
    if (!d3.event.active) simulation.alphaTarget(0);
    d3.event.subject.fx = null;
    d3.event.subject.fy = null;
}

// Update for anyone using d3 v5 (instead of v4 used in the video): when loading in the json data, instead of "d3.json("VotacionesSenado2017.json", function(err, graph){...})" the code should now be "d3.json("VotacionesSenado2017.json").then(function(graph){...}).catch(function(err){...})" and now the "if(err)..." line should be placed inside the catch body. 
// When adding colours to the nodes, "d3.schemeCategory20" has been removed in d3 v5, but new scheme's have been added instead. Simply replace "schemeCategory20" with "schemeAccent".
