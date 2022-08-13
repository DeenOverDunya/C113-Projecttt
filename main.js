function preload()
{

}


function setup()
{
canvas=createCanvas(500,500);
video=createCapture(VIDEO);
video.hide();
}


function draw()
{
    image (video,100,100,300,300);
    stroke(	101, 93, 138);
    fill(	101, 93, 138)
    square(30, 20, 55);
    circle(195, 47, 55);
    square(310, 20, 55);
    circle(440, 100, 55);
    square(410, 220, 55);
    circle(438, 390, 55);
square(310,418,55);
circle(190, 445, 55);
square(30,418, 55);
circle(55, 300, 55);
square(30,140, 55);

    stroke(		120, 151, 171);
    fill(		120, 151, 171);
    circle(100, 47, 55);
    square(218, 20, 55);
    circle(387, 47, 55);
    square(410,120, 55);
    circle(440, 290, 55);
    square(410,418, 55);
    circle(290, 445, 55);
    square(110,418, 55);
    circle(55, 400, 55);
    square(30,230, 55);
    circle(55, 110, 70);





    stroke(		216, 133, 163);
    fill(	216, 133, 163);
    square(120, 20, 55);
    circle(290, 47, 55);
    square(410,20, 55);
    circle(440, 200, 55);
    square(410, 310, 55);
    circle(385, 445, 55);
    square(210,418, 55);
    circle(90, 445, 55);
    square(30,325, 55);
    circle(55, 210, 55);
}


function take_snapshot()
{
save ('frame.png');
}
