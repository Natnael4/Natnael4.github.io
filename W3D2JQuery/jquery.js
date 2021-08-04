"use strict";

$(document).ready(function () {
    let timer;


    function growingCircle() {
        let size = parseInt($(".circle").height()) + parseInt($("#growthAmount").val());
        $(".circle").height(size);
        $(".circle").width(size);
    }

    function timeInterval() {
        timer = setInterval(growingCircle, parseInt($("#growthRate").val()));
    }

   

    function getRandomColor() {
        var letters = '0123456789ABCDEF';
        var color = '#';
        for (var i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }

    function getRandomInteger(num) {
        return Math.floor(Math.random() * num);
    }

    function createCircles() {
        let height = $('.circlesClass').height();
        let width = $('.circlesClass').width();
        let circleSize = parseInt($("#width").val());
        for (let i = 0; i < parseInt($("#numOfCircles").val()); i++) {
            $(".circlesClass").append($("<div>", {
                "class": "circle",
                "css": {
                    "background-color": getRandomColor(),
                    "width": circleSize,
                    "height": circleSize,
                    "top": getRandomInteger(height + circleSize),
                    "left": getRandomInteger(width - circleSize)
                    
                },
                "click": function () {
                    this.remove();
                }
            }));
        }
    }

    $("form").submit(function (e) {
        e.preventDefault();
        createCircles();
        timeInterval();
    });
});