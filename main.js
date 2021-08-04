img = "";
status = "";
object = [] ;
function setup() {
    canvas = createCanvas(640,420);
    canvas.center();
    objectDetector = ml5.objectDetector("cocossd" , modelLoaded);
    document.getElementById("status").innerHTML = "Status : Detecting Objects";
}

function preload()
{
    img = loadImage("dog_cat.jpg");
}

function draw()
    {
        image(img,0,0,640,420);
        if(status != "")
        {
            for(i = 0; i < object.length ; i++)
            {
                document.getElementById("status").innetatusrHTML = "Status : Object Detected";
                fill("red");
                percent = floor(object[i].confidence * 100);
                text(object[i].label + " " + percent + "%", object[i].x , object[i].y);
                noFill();
                stroke("blue");
                rect(object[i].x,object[i].y -10, object[i].width , object[i].height);
            }
        }
      
    }

    function modelLoaded()
    {
        console.log("Model is Loaded");
        status = true;
        objectDetector.detect(img,gotResult);
    }

    function gotResult(error,results)
    {
if(error){
    console.log(error);
}
console.log(results);
object = results;
    }


