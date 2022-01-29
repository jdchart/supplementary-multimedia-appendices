this_data_urls = eval(document.currentScript.getAttribute('data_urls'));
this_dims = eval(document.currentScript.getAttribute('dims'));
this_divs = eval(document.currentScript.getAttribute('divs'));
this_audio = document.currentScript.getAttribute('audio');

add_new_segmentation(this_data_urls, this_dims, this_divs, this_audio);