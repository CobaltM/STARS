/*
	Hack GSU Fall 2018
	NCR_Challenge_index.js
*/

//==================================| JQuery |================================/

//animation for expanding container div for Data Visualization - onLoad()
//Target ID: #demo_container
$(document).ready(function(){
    $("button").click(function(){
        var div = $("div");
        div.animate({height: '300px', opacity: '0.4'}, "slow");
        div.animate({width: '300px', opacity: '0.8'}, "slow");
        div.animate({height: '100px', opacity: '0.4'}, "slow");
        div.animate({width: '100px', opacity: '0.8'}, "slow");
    });
});

//scroll to first #ID
$("#button").click(function() {
    $('html, body').animate({
        scrollTop: $("#about").offset().top
    }, 2000);
});


//Target ID: #demo_contents
$(document).ready(function(){
    $("button").click(function(){
        var div = $("div");
        div.animate({height: '300px', opacity: '0.4'}, "slow");
        div.animate({width: '300px', opacity: '0.8'}, "slow");
        div.animate({height: '100px', opacity: '0.4'}, "slow");
        div.animate({width: '100px', opacity: '0.8'}, "slow");
    });
});
