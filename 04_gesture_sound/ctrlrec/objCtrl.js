setinletassist(0, 'Ctrl In');
setoutletassist(0, 'Selected Chan Out');

chanList = [[0, 'A']];
bufLen   = 600000;
route = ['a', 'b', 'x', 'y', 'up', 'down', 'left', 'right', 'lstick_scal_x', 'lstick_scal_y', 'rstick_scal_x', 'rstick_scal_y', 'l3', 'r3', 'l1', 'r1', 'l2_scal', 'r2_scal', 'start', 'shift', 'middlebutton'];
presets = [[[8, 'Left Stick x'], [9, 'Left Stick y'], [17, 'R2 (accelerate)'], [16, 'L2 (brake)'], [0, 'A (jump)']],
            [[8, 'Left Stick x'], [9, 'Left Stick y'], [10, 'Right Stick x'], [11, 'Right Stick y'], [17, 'R2 (Shoot)'], [16, 'L2 (Aim)'], [1, 'B (crouch)']],
            [[8, 'Left Stick x'], [9, 'Left Stick y'], [10, 'Right Stick x'], [11, 'Right Stick y'], [17, 'R2'], [16, 'L2'], [1, 'B'], [15, 'R1']],
            [[8, 'Left Stick x'], [9, 'Left Stick y'], [17, 'R2 (accelerate)'], [16, 'L2 (brake)']]]
createCoords = [500, 10];
currentChan = 0;

function select_preset(preset){
    chanList = [];
    for(i = 0; i < presets[preset].length; i++){
        chanList.push(presets[preset][i]);
    }
    process(createCoords, 0);
}

function modify_int(int){
    chanList[currentChan][0] = int;

    process(createCoords, currentChan);
}

function modify_name(){
    a    = arrayfromargs(messagename,arguments);
    name = '';
    for(i = 1; i < a.length; i++){
        name = name + a[i];
        if(i != a.length - 1){
            name = name + ' ';
        }
    }

    chanList[currentChan][1] = name;

    process(createCoords, currentChan);
}

function add_channel(){
    a       = arrayfromargs(messagename,arguments);

    chanInt = a[1];

    chanName = '';
    for(i = 2; i < a.length; i++){
        chanName = chanName + String(a[i]);
        if(i != a.length - 1){
            chanName = chanName + ' ';
        }
    }

    chanList.push([chanInt, chanName]);

    process(createCoords, chanList.length - 1);
}

function delete_channel(chan){
    if(chanList.length != 1){
        newArray = [];
        for(i = 0; i < chanList.length; i++){
            if(i != chan){
                newArray.push(chanList[i]);
            }
        }
        chanList = [];
        for(i = 0; i < newArray.length; i++){
            chanList.push(newArray[i]);
        }
        if(chan == 0){
            process(createCoords, 0);
        }
        else{
            process(createCoords, chan - 1);
        }
    }
    else{
        error('Cannot delete the first channel!');
    }
}

function buf_len(x){
    bufLen = x;

    process(createCoords, currentChan);
}

function process(coords, chan){
    clear();
    
    buffer = this.patcher.newdefault(coords[0] + 0, coords[1] + 0, 'buffer~', 'controllerbuf', bufLen, chanList.length + 2);
    buffer.varname = "jstodelete";
    
    controller = this.patcher.getnamed("controllerin");
    
    routerList = [];
    for(i = 0; i < chanList.length; i++){
        routerList.push(route[chanList[i][0]]);
    }
    router = this.patcher.newdefault(coords[0] + 0, coords[1] + 25, 'route', routerList);
    router.varname = "jstodeleteROUTER";
    this.patcher.connect(controller, 2, router, 0);

    recorder = this.patcher.newdefault(coords[0] + 0, coords[1] + 150, 'record~', 'controllerbuf', chanList.length + 2);
    recorder.varname = "jstodelete";
    sound = this.patcher.getnamed('soundinput');
    this.patcher.connect(sound, 0, recorder, 0);
    this.patcher.connect(sound, 1, recorder, 1);

    rectog = this.patcher.getnamed('rectog');
    this.patcher.connect(rectog, 0, recorder, 0);

    savemess = this.patcher.getnamed('savemess');
    lenobj   = this.patcher.getnamed('lenobj');
    this.patcher.connect(savemess, 0, buffer, 0);
    this.patcher.connect(buffer, 1, lenobj, 0);

    for(i = 0; i < chanList.length; i++){
        /*
        if(chanList[i][0] == 8 || chanList[i][0] == 9 || chanList[i][0] == 10 || chanList[i][0] == 11){
            if(chanList[i][0] == 8 || chanList[i][0] == 10){
                unpack = this.patcher.newdefault(coords[0] + (i * 100), coords[1] + 50, 'unpack', 'f', 'f');
                unpack.varname = "jstodelete";
                sig = this.patcher.newdefault(coords[0] + (i * 100), coords[1] + 75, 'sig~', '0.');
                sig.varname = "jstodelete";
                this.patcher.connect(router, i, unpack, 0);
                this.patcher.connect(unpack, 0, sig, 0);
                this.patcher.connect(sig, 0, recorder, i);
            }
            else{
                unpack = this.patcher.newdefault(coords[0] + (i * 100), coords[1] + 50, 'unpack', 'f', 'f');
                unpack.varname = "jstodelete";
                sig = this.patcher.newdefault(coords[0] + (i * 100), coords[1] + 75, 'sig~', '0.');
                sig.varname = "jstodelete";
                this.patcher.connect(router, i, unpack, 0);
                this.patcher.connect(unpack, 1, sig, 0);
                this.patcher.connect(sig, 0, recorder, i);
            }
        }
        else{
            sig = this.patcher.newdefault(coords[0] + (i * 100), coords[1] + 75, 'sig~', '0.');
            sig.varname = "jstodelete";
            this.patcher.connect(router, i, sig, 0);
            this.patcher.connect(sig, 0, recorder, i);
        }
        */
        sig = this.patcher.newdefault(coords[0] + (i * 100), coords[1] + 75, 'sig~', '0.');
        sig.varname = "jstodelete";
        this.patcher.connect(router, i, sig, 0);
        this.patcher.connect(sig, 0, recorder, i + 2);
    }

    chanMenu = this.patcher.getnamed("chanumenu");
    chanMenu.message('clear');
    for(i = 0; i < chanList.length; i++){
        chanMenu.message('append', chanList[i][1]);
    }
    chanMenu.message('set', chan);

    select_chan(chan);
}

function select_chan(chan){
    intMenu = this.patcher.getnamed("interfaceumenu");
    intMenu.message('set', chanList[chan][0]);

    router = this.patcher.getnamed('jstodeleteROUTER');
    slider = this.patcher.getnamed('interfaceslider');

    for(i = 0; i < chanList.length; i++){
        this.patcher.disconnect(router, i, slider, 0);
    }

    this.patcher.connect(router, chan, slider, 0);

    currentChan = chan;
    outlet(0, chan);
}

function clear(){
    obj     = this.patcher.firstobject;
    delList = []
    for(i = 0; i < this.patcher.count; i++){
        if(obj.varname.indexOf("jstodelete") != -1)
            delList.push(obj)
        obj = obj.nextobject
    }
    for(i = 0; i < delList.length; i++){
        this.patcher.remove(delList[i])
    }
}

function loadbang(){
    process(createCoords, 0);
}

//process(createCoords, 0);