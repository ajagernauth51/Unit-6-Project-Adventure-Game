$(".bball1").click(function() {
    $(".begin").hide();
    $(".base-acc").show();
    $("body").css("background-color", "red");
  	$("h1").css("color", "pink");
});

$(".base-1").click(function() {
    $(".base-acc").hide();
    $(".base-story1").show();
});

$(".take").click(function() {
    $(".base-story1").hide();
    $(".base-took").show();
});

$(".base-2t").click(function() {
    $(".base-took").hide();
    $(".fail").show();
});

$(".swing").click(function() {
    $(".base-story1").hide();
    $(".base-swung").show();
});

$(".base-2s").click(function() {
    $(".base-swung").hide();
    $(".mlbdraft").show();
    $(".yanks").hide().delay(1000).fadeIn(1000);
});

$(".restart1").dblclick(function() {
    $(".fail").fadeOut();
    $(".fail2").fadeOut();
    $(".begin").fadeIn();
    $("body").css("background-color", "blue");
    $("h1").css("color", "black");
});

$(".yanks").hover(function() {
    $(".mlbdraft").delay(1000).fadeOut();
    $(".mlbend").delay(1500).fadeIn();
});

$(".restart2").click(function() {
    $(".mlbend").fadeOut();
    $(".nbaend").fadeOut();
    $(".begin").fadeIn();
    $("body").css("background-color", "blue");
    $("h1").css("color", "black");
});

$(".bball2").click(function() {
    $(".begin").hide();
    $(".bask-acc").show();
    $("body").css("background-color", "purple");
    $("h1").css("color", "blue");
});

$(".bask-1").click(function() {
    $(".bask-acc").hide();
    $(".bask-story1").show();
});

$(".shoot").click(function() {
    $(".bask-story1").hide();
    $(".bask-shot").show();
});

$(".bask-2s").click(function() {
    $(".bask-shot").hide();
    $(".fail2").show();
});

$(".pass").click(function() {
    $(".bask-story1").hide();
    $(".bask-pass").show();
});

$(".bask-2p").click(function() {
    $(".bask-pass").hide();
    $(".nbadraft").show();
    $(".lakers").hide().delay(1000).fadeIn(1000);
});

$(".lakers").hover(function() {
    $(".nbadraft").delay(1000).fadeOut();
    $(".nbaend").delay(1500).fadeIn();
});