import os

def process(**kwargs):

    dest = kwargs.get('dest', os.path.join(os.getcwd(), 'tools/temp'))
    sources = kwargs.get('sources', os.path.join(os.getcwd(), 'tools/construction_data'))


    write_file(dest, sources)

def write_file(dest, sources):

    dest_path = os.path.join(dest, 'index.html')

    source_path = os.path.join(sources, 'index.txt')
    source_file = open(source_path, "r")

    with open(dest_path, 'w') as f:
        for line in source_file:
            for character in line:
                f.write(character)   

    print('done.')  
            


    





dest = '/Users/macbook/Desktop/Jacob Hart PhD Digital Elements/Browser Interface'
process(dest=dest)