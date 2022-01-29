from pydub import AudioSegment
import os

def perform_convert(src_folder, src_file, dest_foler, index, len):
    print(str(index + 1) + '/' + str(len))
    src = os.path.join(src_folder, src_file)
    dest = os.path.join(dest_foler, os.path.splitext(src_file)[0] + '.mp3')
    print('Converting ' + src + ' to ' + dest + '...')

    sound = AudioSegment.from_mp3(src)
    sound.export(dest, format="wav")

    print('Converted!')

def return_wavs(file_list):
    return_list = []
    for i in range(len(file_list)):
        extention = os.path.splitext(file_list[i])
        if extention[1] == '.wav':
            return_list.append(file_list[i])

    return return_list

def cull_wavs(file_list, ignore_list):
    return_list = []
    for i in range(len(file_list)):
        
        if file_list[i] not in ignore_list:
            return_list.append(file_list[i])

    return return_list

def process(src_folder, dest_folder, ignore_list):
    to_treat = [f for f in os.listdir(src_folder) if os.path.isfile(os.path.join(src_folder, f))]
    to_treat_wavs = return_wavs(to_treat)
    to_treat_wavs_culled = cull_wavs(to_treat_wavs, ignore_list)


    for i in range(len(to_treat_wavs_culled)):
        perform_convert(src_folder, to_treat_wavs_culled[i], dest_folder, i, len(to_treat_wavs_culled))

    print('Finished batch!')


src_folder = '/Users/macbook/Desktop/DIGITAL ELEMENTS/03 Audio/02 Sound Plot Audio/01 Constanzo'
dest_folder = '/Users/macbook/Desktop/converts'
ign_list = ['_metal_res_wavefolder_flat_corpus.wav']

process(src_folder, dest_folder, ign_list)

