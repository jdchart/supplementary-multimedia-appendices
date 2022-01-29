fileList = [],
verbose = true;

function clear_files(){
    fileList = [];
    if(verbose)
        file_list_length();
}

function add_file(filepath){
    fileList.push(filepath);
}

function print_file_list(){
    post('Files: ' + String(fileList.length) + '\n');
    for(i = 0; i < fileList.length; i++){
        post(fileList[i] + '\n')
    }
}