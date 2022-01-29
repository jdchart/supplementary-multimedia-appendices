// Calls from:
//flucomo head (sound on end)
// flumoco head seg mouse click
//header player (stop start scrub)

this_vid = eval(document.currentScript.getAttribute('video_id'));
//this_vid = document.getElementById(vid_id);

//console.log(this_vid);

current_dynamic_video_slice = {
    start : 0,
    end : 0
};

function play_dynamic_video(start, end){

    current_dynamic_video_slice.start = start / 1000;
    current_dynamic_video_slice.end = end / 1000;
    //console.log('playing from', start / 1000, end / 1000);
    
    this_vid.currentTime = String(current_dynamic_video_slice.start);
    this_vid.play();
};

function pause_dynamic_video(){
    this_vid.pause();
}

function play_dynamic_video_from_beginning(){
    this_vid.currentTime = String(current_dynamic_video_slice.start);
    this_vid.play();
}

function resume_dynamic_video(){
    this_vid.play();
}

function seek_dynamic_video(val){
    //console.log(val);
    this_vid.currentTime = String(current_dynamic_video_slice.start + val);
};