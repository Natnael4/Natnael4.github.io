
$(document).ready(function(){

var started = false;
var boundary = $(".boundary");

// when start is clicked
$("#start").click(function(){
    $("#status").text('Move the cursor to the end to win');
    started = true;
    if (boundary.hasClass('youlose')) {
        boundary.removeClass('youlose');
    }
    boundary.mousemove(function () { 
        lose(); 
    })
});

// if it leaves the whole maze it call the lose function
$("#maze").mouseleave(function () { 
    lose() });

// when it reaches the end
$("#end").mouseover(function(){
    if (started == true) 
            win();
            
    else if (started && boundary.hasClass('youlose')) 
        lose();
   
});

function win(){
    started = false;
    $("#status").text("You Win!");
}

function lose(){
    if (started) {
        started = false;
        boundary.addClass('youlose');
        $("#status").text("You Lose!");
    }
}

});