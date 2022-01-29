// Returns channel (1-counting), frames, smallest frame, highest frame, range. 

var bufName = "srcCtrl";
var channels = [7, 8];
var startFrame = 1744997;

function bang()
{
    var b = new Buffer(bufName);

    for(i = 0; i < channels.length; i++)
    {
        smallestFrame = b.peek(channels[i], j, 1);
        largestFrame = b.peek(channels[i], j, 1);
        range = 0;

        for(j = startFrame; j < b.framecount(); j++)
        {
            currentFrame = b.peek(channels[i], j, 1);
            if(currentFrame < smallestFrame)
            {
                smallestFrame = currentFrame;
                range = largestFrame - smallestFrame;
            }
            else if(currentFrame > largestFrame)
            {
                largestFrame = currentFrame;
                range = largestFrame - smallestFrame;
            } 
        }

        outlet(0, channels[i], b.framecount(), smallestFrame, largestFrame, range);
    }
}