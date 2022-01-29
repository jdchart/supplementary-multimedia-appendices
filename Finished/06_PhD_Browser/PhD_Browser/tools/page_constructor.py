import os

def get_vocab(file_prefix):
    print('Making vocab...')
    vocab = {}
    vocab['file_name'] = file_prefix + ".html"
    vocab['tab_title'] = file_prefix + " - Sound Plot"
    vocab['audio_path'] = '/pasquet_sound_plot_audio/' + file_prefix + "_flat_corpus.wav"
    vocab['page_title'] = file_prefix + " - Sound Plot"
    vocab['data_file_tsne_mfcc'] = '/pasquet_sound_plots/' + file_prefix + "_MFCC_TSNE_COL.json"
    vocab['data_file_umap_mfcc'] = '/pasquet_sound_plots/' + file_prefix + "_MFCC_UMAP_COL.json"
    vocab['data_file_tsne_ss'] = '/pasquet_sound_plots/' + file_prefix + "_SS_TSNE_COL.json"
    vocab['data_file_umap_ss'] = '/pasquet_sound_plots/' + file_prefix + "_SS_UMAP_COL.json"

    print('Vocab made:')

    for item in vocab:
        print(item, vocab[item])

    return vocab

def build_page(vocab, dest):
    page01 = '<!DOCTYPE html>\n<html lang="en">\n<head>\n<meta charset="UTF-8">\n<meta name="viewport" content="width=device-width, initial-scale=1.0">\n<link rel="stylesheet" type="text/css" href="/style/reset.css">\n<link rel="stylesheet" type="text/css" href="/style/main.css">\n<title>'
    page02 = '</title>\n<script src="https://d3js.org/d3.v4.js" SameSite=None></script>\n<script src="/scripts/howler/howler.core.js" SameSite=None></script>\n<script src="/scripts/flumuco_head.js"\naudio_urls=\'[\n"'
    page03 = '"]\' ></script>\n</head>\n<body>\n<div id="top_menu"></div>\n<script src="/scripts/top_menu.js"></script>\n<div id="header_player"></div>\n<script src="/scripts/header_player.js"\nheader_div_id="header_player"></script>\n<div id="actual_page_body">\n<h2>'
    page04 = '</h2>\n<div id="iter_plot"></div>\n<p>File: <span id="iter_plotlabel"></span></p>\n<div id="iter_plot_menu"></div>\n<script src="/scripts/scatter_plot.js"\ndata_urls=\'[\n"'
    page05 = '", \n"'
    page06 = '"]\' \ndims=\'["100%", 500, 10]\' \ndivs=\'["iter_plot", "iter_plot_label", "iter_plot_menu"]\' \naudio="'
    page07 = '"></script>\n</div>\n<script src="/scripts/collapsables.js"></script>\n</body>\n</html>'
    
    file_name = os.path.join(dest, vocab['file_name'])

    print('Building ' + file_name + '...')

    with open(file_name, 'w') as f:
        f.write(page01)
        f.write(vocab['tab_title'])
        f.write(page02)
        f.write(vocab['audio_path'])
        f.write(page03)
        f.write(vocab['page_title'])
        f.write(page04)
        f.write(vocab['data_file_tsne_mfcc'])
        f.write(page05)
        f.write(vocab['data_file_umap_mfcc'])
        f.write(page05)
        f.write(vocab['data_file_tsne_ss'])
        f.write(page05)
        f.write(vocab['data_file_umap_ss'])
        f.write(page06)
        f.write(vocab['audio_path'])
        f.write(page07)

    print('Page built!')

def process(file_prefix, dest):
    vocab = get_vocab(file_prefix)

    build_page(vocab, dest)

def build_refs(prefix_list):
    print('Building references...')
    with open(os.path.join(os.getcwd(), 'HTML_REFS.html'), 'w') as f:
        for i in range(len(prefix_list)):
            page01 = '<li><a href="pages/misc/pasquet_sound_plots/'
            file_ref = prefix_list[i] + ".html"
            page02 = '">'
            page_title = prefix_list[i] + " - Sound Plot"
            page03 = '</a></li>\n'

            f.write(page01)
            f.write(file_ref)
            f.write(page02)
            f.write(page_title)
            f.write(page03)
    
    print('References built at ' + os.path.join(os.getcwd(), 'HTML_REFS') + '!')

def multi_process(prefix_list, dest):
    for i in range(len(prefix_list)):
        process(prefix_list[i], dest)

    build_refs(prefix_list)

#---------------------------------------------------
prefix_list = ['all_same_settings',
    'global_comparison_01',
    'global_comparison_02',
    'other_params',
    'other_trees',
    'params_01',
    'params_02',
    'params_03',
    'params_04',
    'params_05',
    'params_06',
    'params_07',
    'params_08',
    'params_09',
    'params_10',
    'params_11',
    'params_12',
    'params_13',
    'params_14',
    'params_15',
    'params_16',
    'params_17',
    'params_18',
    'params_19',
    'params_20',
    'params_21',
    'params_22',
    'params_23',
    'params_24']
multi_process(prefix_list, os.path.join(os.getcwd(), 'pages/misc/pasquet_sound_plots'))