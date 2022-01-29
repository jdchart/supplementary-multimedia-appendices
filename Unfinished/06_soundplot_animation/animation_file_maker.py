import json
import os

def load_data(file):
    print('Loading data...')
    with open(file) as json_file:
        data = json.load(json_file)

    print('Loaded data...')
    return data

def get_timeline(data):
    print('Getting timeline...')
    order_array = []

    for key in data:
        to_add = []
        to_add.append(data[key]['bounds'][0])
        to_add.append(data[key]['bounds'][1])
        to_add.append(key)
        order_array.append(to_add)

    print('Ordering timeline...')
    ordered = sorted(order_array, key=lambda l:l[0])

    for i in range(len(ordered)):
        ordered[i].append(i)

    print('Getting full timeline...')
    full_timeline = []

    count = 0
    for i in range(len(ordered)):
        for j in range(ordered[i][0], ordered[i][1]):
            full_timeline.append(ordered[i])
            count = count+1

    return full_timeline

def get_events(timeline, chunk_size, skip):
    print('Getting events...')

    return_dict = {}
    last_frame = len(timeline)

    last_element = {}
    count = 0
    for i in range(0, last_frame, skip):
        start = i - chunk_size
        if start < 0:
            start = 0
        overlaps = get_overlaps(timeline, start, i)
        entry = create_entry(i, overlaps, start, i)
        return_dict[i] = entry
        last_element = entry
        count = count + 1

    # Redo for the last one 
    last_start = last_element['end']
    last_end = last_frame
    overlaps = get_overlaps(timeline, last_start, last_end)
    entry = create_entry(last_end, overlaps, last_start, last_end)
    return_dict[last_end] = entry

    return return_dict

def get_overlaps(timeline, start, end):
    return_array = []

    for i in range(start, end):
        if timeline[i] not in return_array:
            return_array.append(timeline[i])
     
    return return_array

def create_entry(idx, overlaps, start, end):
    to_add = {}
    to_add['start'] = start
    to_add['end'] = idx
    to_add['overlaps'] = overlaps

    return to_add

def format_events(events, alpha_min, timeline):
    print('Formatting events...')
    format_dict = {}
    
    count = 0
    num_events = len(events.keys())
    for event in events:
        print('Formatting event ' + str(count) + '/' + str(num_events))
        event_start = events[event]['start']
        event_end = events[event]['end']
        to_add = {}
        to_add['points'] = []
        to_add['points_alpha'] = []
        to_add['lines'] = []
        to_add['lines_alpha'] = []

        for i in range(len(events[event]['overlaps'])):
            this_start = events[event]['overlaps'][i][0]
            this_end = events[event]['overlaps'][i][1]
            this_slice = events[event]['overlaps'][i][2]
            this_idx = events[event]['overlaps'][i][3]

            scaled_start = rescale(this_start, event_start, event_end, 0, 1)
            scaled_end = rescale(this_end, event_start, event_end, 0, 1)

            the_alpha = alpha_min
            if scaled_start > 0:
                the_alpha = rescale(scaled_start, 0, 1, alpha_min, 1)

            if scaled_end >=1:
                to_add['points'].append(this_slice)
                to_add['points_alpha'].append(the_alpha)
            
            line_target = this_slice
            line_source = this_slice
            if(this_idx > 0):
                line_source = get_slice(this_idx - 1, timeline)
            
            to_add['lines'].append(line_source)
            to_add['lines'].append(line_target)
            to_add['lines_alpha'].append(the_alpha)

        if len(to_add['lines']) == 0:
            to_add['lines'] = -1
        if len(to_add['points']) == 0:
            to_add['points'] = -1
        if len(to_add['lines_alpha']) == 0:
            to_add['lines_alpha'] = -1
        if len(to_add['points_alpha']) == 0:
            to_add['points_alpha'] = -1

        format_dict[event] = to_add
        count = count + 1

    return format_dict

def get_slice(this_idx, timeline):
    for i in range(len(timeline)):
        if timeline[i][3] == this_idx:
            return timeline[i][2]

def rescale(val, oldmin, oldmax, newmin, newmax):
    return newmin + ((val - oldmin) * (newmax - newmin) / (oldmax - oldmin))      

def output(data, outname):
    print('Exporting to JSON...')
    filename = os.path.join(os.getcwd(), outname + '_ANIMATION.json')

    with open(filename, 'w') as outfile:
        json.dump(data, outfile, indent=4)

def process(file, **kwargs):
    export = kwargs.get('export', True)
    chunk_size = kwargs.get('chunk_size', 44100)
    skip = kwargs.get('skip', 10000)
    min_alpha = kwargs.get('min_alpha', 0.1)
    outfile = kwargs.get('outfile', 'EXPORT')


    data = load_data(slice_file)
    timeline = get_timeline(data)
    events = get_events(timeline, chunk_size, skip)
    formatted = format_events(events, min_alpha, timeline)
    
    if export:
        output(formatted, outfile)

slice_file = '/Users/macbook/Desktop/Z_vis/z_flat_corpus_slices.json'
process(slice_file, outfile='test')