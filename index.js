var check = 0;
var y = $("#q2_t").offset().top + parseInt($("#pre_bg").css("height"));
var z = document.getElementById("welcome").offsetHeight+document.getElementById("pre").offsetHeight+230;
$("#home_p").css("height",z+"px");
$("#information").scroll(function(){
    var check = 0;
    var pre_offset = $("#pre").offset();
    var x = $(this).scrollTop();
    var f_size = Math.min(24+0.04*x, 48);
    var o_welcome = 1-0.001*x;
    var p_size = Math.min(0.2*x,150);
    var w_q2bg = Math.min(x/160*0.1*x, 100);
    var o_q2bg = 0;
    $("#bg").offset({top:0});
    if (x < 550){
        $("#bg").css({"opacity":Math.min(0.0015*x, 0.75)});
    };
    if (x>=200){
        o_q2bg = 0.0025*(x-200);
        $("#q2_bg").css({"transition":"1s","opacity":"1","width":w_q2bg+"%"});
    }else{
        $("#q2_bg").css({"transition":"0.25s","opacity":"0","width":"0%"});
    };
    $("#welcome").css({"opacity":o_welcome});
    $("#q2").css({"margin-top":p_size+"px"});
    $("#pre").css({"padding-top":p_size+"px"});
    $("#q2_t").css({"font-size":f_size+"px"});
    if (document.getElementById("q2_bg").style.width == "100%"){
        $("#preview").css({"transition":"1s linear","height":"36vw"});
        $("#q2_t").css({"color":"white"});
        $(".reference,#header").css("filter","invert(100%)");
        if (document.getElementById("q2_t").style.color == "white"){
                $("#q3").css("visibility","visible");
        };
    };
    if (document.getElementById("q2_bg").style.width == "100%" && $("#q2_t").css("font-size") != "48px"){
        $("#q2_t").css({"color":"black"});
        $("#preview").css({"transition":"0.25s","height":"0vw"});
        $("#q3").css("visibility","hidden");
        document.getElementById("video").pause();
    };
    if ($("#preview").offset().top <= 100 || document.getElementById("preview").style.height != "36vw"){
        document.getElementById("video").pause();
        $(".reference,#header").css("filter","none");
    }else if ($("#preview").offset().top <= 200){
        document.getElementById("video").play();
    };
    if ($("#q2_t").offset().top <= 0 && x>y){
        $("#bg").css({"opacity":Math.max(0.75-0.0015*(x-y), 0)});
    };
});
$("#video").click(function(){
    document.getElementById("video").play();
});
$("#home").click(function(){
    $("#bg").css({"visibility":"hidden"});
    $(".reference,#header").css("transition-delay","0.25s"); // = transition-duration to prevent scrollIntoview bad transition
    document.getElementById("home_p").scrollIntoView({behavior:"smooth"});
    setTimeout(function(){
        $("#bg").css({"visibility":"visible"});
        $(".reference,#header").css("transition-delay","0s");
    },750);
});
$("#get_info").click(function(){
    $("#bg").css({"visibility":"hidden"});
    $(".reference,#header").css("transition-delay","0.25s"); // = transition-duration to prevent scrollIntoview bad transition
    document.getElementById("info_p").scrollIntoView({behavior:"smooth"});
    setTimeout(function(){
        $("#bg").css({"visibility":"visible"});
        $("#q2").css({"visibility":"visible"});
        $(".reference,#header").css("transition-delay","0s");
    },750);
});
$("#support").click(function(){
    alert($("#home_p").css("height"));
});
// $("#contact").click(function(){
//     alert(document.getElementById("q2_t").style.color);
// });
$("#home_r").mouseover(function(){
    $(this).css("filter","invert(100%)");
});
$("#info_r").mouseover(function(){
    $(this).css("filter","invert(100%)");
});
$("#contact_r").mouseover(function(){
    $(this).css("filter","invert(100%)");
});
$("#support_r").mouseover(function(){
    $(this).css("filter","invert(100%)");
});
$(".reference").mouseout(function(){
    $(this).css("filter","none");
});
$("#contact").click(function(){
    document.getElementById("contact_p").scrollIntoView({behavior:"smooth"});
});