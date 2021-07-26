"use strict";
var viewArea, animationOpt, sizeOpt, timer, startButton, stopButton, speed = 250, turboOpt;

function start() {
    var frames = viewArea.value.split("=====\n");
    var i = 0, l = frames.length;
    (function iterator() {
        viewArea.value = frames[i];

        if (++i >= l) {
            i = 0;
        }
        timer = setTimeout(iterator, speed);
    })();
    stopButton.disabled = false;
    startButton.disabled = true;
};

function stop(time) {
    stopButton.disabled = true;
    startButton.disabled = false;
    clearTimeout(timer);
    getFrames();
}


function getFrames() {
    var dropSel = animationOpt.options[animationOpt.selectedIndex].innerHTML;
    viewArea.value = ANIMATIONS[dropSel];

}

function setSize() {
    var fontsize = sizeOpt.options[sizeOpt.selectedIndex].value;
    viewArea.style.fontSize = fontsize;
}

function turbo() {
    if (turboOpt.checked) {
        speed = 50;
    }
    else {
        speed = 250;
    }
}

window.onload = function () {
    viewArea = document.getElementById("text-area");
    animationOpt = document.getElementById("animation");
    sizeOpt = document.getElementById("fontsize");
    turboOpt = document.getElementById("turbo");

    startButton = document.getElementById("start");
    stopButton = document.getElementById("stop");

    startButton.onclick = start;
    stopButton.onclick = stop;
    animationOpt.onchange = getFrames;
    sizeOpt.onchange = setSize;
    turboOpt.onchange = turbo;

}