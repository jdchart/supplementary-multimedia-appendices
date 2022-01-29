// ---------------------------------------------------------------------------------
//
// forceDirected for Max Network.
//
// ---------------------------------------------------------------------------------

// #################################################################################
// Importing modules ###############################################################
// #################################################################################

var ut = require("netUtils");

// #################################################################################
// Global variables ################################################################
// #################################################################################

var usedIntList = [];

// #################################################################################
// Export functions ################################################################
// #################################################################################

exports.random_coords_ext = function (nodeList, xRange, yRange)
{
    // ##############################
    // Distributes a random, unique coordinate to each node in the current node list.
    // ##############################

    random_coords(nodeList, xRange, yRange)
}

exports.force_directed = function (nodeList, xRange, yRange, springRest, repulsion, spring, timeStep, iterations)
{
    // ##############################
    // Implement a simple force-directed layout algorithm.
    // ##############################

    random_coords(nodeList, xRange, yRange);

    for(iter = 0; iter < iterations; iter++)
    {
        init_net_forces(nodeList);

        repulse_nodes(nodeList, repulsion);

        spring_force(nodeList, springRest, spring);

        update_coords(nodeList, timeStep);
    }

}

// #################################################################################
// Internal functions ##############################################################
// #################################################################################

function unique_int(intList, range)
{
    // ##############################
    // Creates a random number and returns it.
    // If the number is already in the given list, a new number will be found.
    // ##############################

    var loopOn = true;
    while(loopOn)
    {
        uniqueInt = Math.floor(Math.random() * range);

        if (intList.indexOf(uniqueInt) == -1)
        {
            intList.push(uniqueInt)
            loopOn = false;
        }
    }
    return uniqueInt;
}

function random_coords(nodeList, xRange, yRange)
{
    // ##############################
    // Distributes a random, unique coordinate to each node in the current node list.
    // ##############################

    usedIntList = [];
    for(i = 0; i < nodeList.length; i++)
    {
        nodeList[i]["x"] = unique_int(usedIntList, xRange);
        nodeList[i]["y"] = unique_int(usedIntList, yRange);
    }
}

function init_net_forces(nodeList)
{
    // ##############################
    // Initialise the net forces at the beginning of each iteration.
    // ##############################

    for(i = 0; i < nodeList.length; i++)
    {
        nodeList[i]["netForceX"] = 0;
        nodeList[i]["netForceY"] = 0;
    }
}

function repulse_nodes(nodeList, kR)
{
    // ##############################
    // Calculate the repulsion between each node and update the net force.
    // ##############################

    for (i = 0; i < nodeList.length - 1; i++)
    {
        node1 = nodeList[i];

        for (j = i + 1; j < nodeList.length; j++)
        {
            node2 = nodeList[j];

            dx = node2["x"] - node1["x"];
            dy = node2["y"] - node1["y"];

            if(dx != 0 || dy != 0)
            {
                distanceSquared = (dx * dx) + (dy * dy);
                distance = Math.sqrt(distanceSquared);
                force = kR / distanceSquared;

                fx = force * dx / distance;
                fy = force * dy / distance;

                nodeList[i]["netForceX"] = nodeList[i]["netForceX"] - fx;
                nodeList[i]["netForceY"] = nodeList[i]["netForceY"] - fy;
                nodeList[j]["netForceX"] = nodeList[j]["netForceX"] - fx;
                nodeList[j]["netForceY"] = nodeList[j]["netForceY"] - fy;
            }
        }
    }
}

function spring_force(nodeList, L, kS)
{
    // ##############################
    // Calculate the spring force between node neighbours and update net forces.
    // ##############################

    for(i = 0; i < nodeList.length; i++)
    {
        node1 = nodeList[i];
        node1NeighbourList = node1["neighbours"];

        for (j = 0; j < node1NeighbourList.length; j++)
        {
            i2 = node1NeighbourList[j];
            node2idx = ut.find_node_idx(nodeList, i2);
            node2 = nodeList[node2idx];

            if (i < node2idx)
            {
                dx = node2["x"] - node1["x"];
                dy = node2["y"] - node2["y"];

                if (dx != 0 || dy != 0)
                {
                    distance = Math.sqrt((dx * dx) + (dy + dy));
                    force = kS * (distance - L);

                    fx = force * dx / distance;
                    fy = force * dy / distance;

                    nodeList[i]["netForceX"] = nodeList[i]["netForceX"] + fx;
                    nodeList[i]["netForceY"] = nodeList[i]["netForceY"] + fy;
                    nodeList[node2idx]["netForceX"] = nodeList[node2idx]["netForceX"] - fx;
                    nodeList[node2idx]["netForceY"] = nodeList[node2idx]["netForceY"] - fy;
                }
            }
        }
    }
}

function update_coords(nodeList, deltaT)
{
    // ##############################
    // Update the node coordinates at the end of each iteration.
    // ##############################

    for(i = 0; i < nodeList.length; i++)
    {
        node = nodeList[i];
        dx = deltaT * node["netForceX"];
        dy = deltaT * node["netForceY"];
        displacementSquared = (dx * dx) + (dy + dy);

        nodeList[i]["x"] = nodeList[i]["x"] + dx;
        nodeList[i]["y"] = nodeList[i]["y"] + dy;
    }
}
