function setup() {
  createCanvas(windowWidth, windowHeight - 5);

  canvas = document.getElementById('defaultCanvas0');
  canvas.setAttribute('onmousedown', 'mouseDown(event)');
  canvas.setAttribute('onmousemove', 'mouseMove(event)');
  canvas.setAttribute('onmouseup', 'mouseUp(event)');

  canvas.setAttribute('ontouchstart', 'touchStart(event)');
  canvas.setAttribute('ontouchmove', 'touchMove(event)');
  canvas.setAttribute('ontouchend', 'touchEnd(event)');
  canvas.setAttribute('ontouchcancel', 'touchEnd(event)');
}

darkColors = ['#c0392b', '#16a085', '#2980b9', '#8e44ad', '#2c3e50', '#f39c12', '#d35400', '#bdc3c7', '#7f8c8d', '#27ae60']
var baseWidth = 150;
var limit = 1000;
var outerWidth = 20;



function draw() {
  background('#bdc3c7');

  if (clicked) {
    strokeWeight(outerWidth * 2)
    fill('#00000000')
    textSize(32);
    stroke(darkColors[2])
    TimeDifference = Math.floor(((new Date().getTime() - text.getTime()) % limit / limit) * 360);
    arc(circle.clientX, circle.clientY, baseWidth + (outerWidth / 2), baseWidth + (outerWidth / 2), 0, QUARTER_PI / 45 * TimeDifference, PI);


    stroke('#c0392b')
    strokeWeight(10)
    fill('#bdc3c7');
    ellipse(circle.clientX, circle.clientY, baseWidth, baseWidth)
  }

  for (i in touched) {
    if (touched[i] == true) {
      strokeWeight(outerWidth * 2)
      fill('#00000000')
      textSize(32);
      stroke(darkColors[parseInt(i) + 1])
      TimeDifference = Math.floor(((new Date().getTime() - tcircle[i].text.getTime()) % limit / limit) * 360);
      arc(tcircle[i].val.clientX, tcircle[i].val.clientY, baseWidth + (outerWidth / 2), baseWidth + (outerWidth / 2), 0, QUARTER_PI / 45 * TimeDifference, PI);
      strokeWeight(2)

      strokeWeight(10)
      fill('#bdc3c7');
      stroke(darkColors[parseInt(i)])
      ellipse(tcircle[i].val.clientX, tcircle[i].val.clientY, baseWidth, baseWidth)

    }
  }
}

var touched = []
var tcircle = []

function touchStart(e) {
  for (i = 0; i < e.touches.length; i++) {
    touched[i] = true;
    tcircle[i] = {
      val: e.touches[i],
      text: new Date()
    }
  }
}

function touchMove(e) {
  for (i = 0; i < e.touches.length; i++) {
    touched[i] = true;
    tcircle[i].val = e.touches[i];
  }
}

function touchEnd(e) {
  for (i = 0; i <= e.touches.length; i++) {
    touched[i] = false;
    tcircle[i].val = e.touches[i];
  }
}

var clicked = false;
var circle = null;

function mouseDown(e) {
  clicked = true
  circle = e;
  text = new Date()
}

function mouseMove(e) {
  circle = e;
}

function mouseUp(e) {
  clicked = false;
  circle = e;
}