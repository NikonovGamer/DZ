let canvas = document.getElementById("sandbox"),
    context = canvas.getContext("2d"),
    circle, cherta;

circle = new Path2D();
circle.arc(150, 150, 150, 0 ,2 * Math.PI);
context.circleWidth = 5;

context.stroke(circle);


let R = 300 / 2;
for(let d = 0; d < 60; ++d) {
    let angel = (d / 60) * (2 * Math.PI);
    let pX = Math.cos(angel) * R;
    let pY = -Math.sin(angel) * R;
    let qX = 0.9 * pX;
    let qY = 0.9 * pY;
    pX += R; pY += R;
    qX += R; pY += R;
    /*боже, как же я устал*/
    cherta = new Path2D();
    cherta 
}