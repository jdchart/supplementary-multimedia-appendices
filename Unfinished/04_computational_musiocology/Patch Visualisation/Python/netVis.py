import json
import networkx as nx
import matplotlib.pyplot as plt

def open_json(filepath):
    with open(filepath) as json_file:
        data = json.load(json_file)

    return data

def dict_to_graph(netDict):
    g = nx.Graph()
    labelDict = {}

    for i in range(len(netDict['nodes'])):
        g.add_node(netDict['nodes'][i]['uniqueid'])
        if 'text' in netDict['nodes'][i].keys():
            labelDict[netDict['nodes'][i]['uniqueid']] = netDict['nodes'][i]['text']
        else:
            labelDict[netDict['nodes'][i]['uniqueid']] = netDict['nodes'][i]['maxclass']

    for i in range(len(netDict['edges'])):
        g.add_edge(netDict['edges'][i]['source'], netDict['edges'][i]['destination'])

    #g = nx.relabel_nodes(g, labelDict)
    #print(labelDict)

    g.name = 'Test Patch'
    #print(nx.info(g))

    nx.draw(g, with_labels = True)
    plt.show()

toShow = open_json('/Users/macbook/Documents/Code/GitHub_repos/computationalMusicology/Patch Visualisation/json_export.json')

dict_to_graph(toShow)
