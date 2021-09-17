<<<<<<< HEAD
$("#h_r").css("border-right","solid 5px black");
=======
>>>>>>> c9fe56a4cbb1887ef618091ef74a1df2f786e27d
var x = 0;
var y = $("#q2_t").offset().top + parseInt($("#preview").css("height"));
var z = document.getElementById("welcome").offsetHeight+document.getElementById("pre").offsetHeight+230;
t = window.outerHeight;
$("#home_p").css("height",z+"px");
$("#information").scroll(function(){
    x = $(this).scrollTop();
    var f_size = Math.min(24+0.04*x, 48);
    var o_welcome = 1-0.001*x;
    var p_size = Math.min(0.2*x,150);
    var w_q2bg = Math.min(x/160*0.1*x, 100);
    var o_q2bg = 0;
    $("#bg").offset({top:0});
    if (x < 550){
        $("#bg").css({"opacity":Math.min(0.0015*x, 0.75)});
        $(".reference,#header").css({"filter":"invert("+Math.min(0.002*x, 1)+")"});
    };
    $("#welcome").css({"opacity":o_welcome});
    $("#q2").css({"margin-top":p_size+"px"});
    $("#pre").css({"padding-top":p_size+"px"});
    $("#q2_t").css({"font-size":f_size+"px"});
    if (document.getElementById("q2_t").style.fontSize == "48px"){
        $("#preview").css("visibility","visible");
        $("#preview").fadeIn("slow","linear");
        $("#q2_t").css({"color":"white"});
        $("#q3").css("visibility","visible");
    };
    if ($("#q2_t").css("font-size") != "48px"){
        $("#q2_t").css({"color":"black"});
        $("#preview").fadeOut("fast","linear");
        $("#q3").css("visibility","hidden");
        document.getElementById("video").pause();
    };
    if ($("#q2_t").offset().top <= 0 && x>y){
        $("#bg").css({"opacity":Math.max(0.75-0.0015*(x-y), 0)});
        $(".reference,#header").css({"filter":"invert("+Math.max(1-0.002*(x-y), 0)+")"});
    };
<<<<<<< HEAD
    if ($("#home_p").offset().top > (-parseInt($("#home_p").css("height"))+0.4*t) && $("#home_p").offset().top<=60){
        $("#h_r").css("border-right","solid 5px black");
    }else{
        $("#h_r").css("border-right","none");
    };
    if ($("#info_p").offset().top > (-parseInt($("#info_p").css("height"))+0.5*t) && document.getElementById("h_r").style.borderRight == "none"){
        $("#i_r").css("border-right","solid 5px black");
    }else{
        $("#i_r").css("border-right","none");
    };
    if ($("#contact").offset().top > (-parseInt($("#contact_p").css("height"))+0.6*t) && document.getElementById("i_r").style.borderRight == "none" && document.getElementById("h_r").style.borderRight == "none"){
        $("#c_r").css("border-right","solid 5px black");
    }else{
        $("#c_r").css("border-right","none");
    };
=======
>>>>>>> c9fe56a4cbb1887ef618091ef74a1df2f786e27d
});
$("#video").click(function(){
    if (document.getElementById("video").paused){
        document.getElementById("video").play();
    }else{
        document.getElementById("video").pause();
    };
});
$("#h_r").click(function(){
    $("#bg").css({"visibility":"hidden"});
    document.getElementById("home_p").scrollIntoView({behavior:"smooth", block: "start", inline: "nearest"});
    setTimeout(function(){
        $("#bg").css({"visibility":"visible"});
    },750);
});
$("#i_r").click(function(){
    $("#bg").css({"visibility":"hidden"});
    document.getElementById("info_p").scrollIntoView({behavior:"smooth", block: "center", inline: "nearest"});
    setTimeout(function(){
        $("#bg").css({"visibility":"visible"});
        $("#q2").css({"visibility":"visible"});
    },750);
});
$("#h_r").mouseover(function(){
    $(this).css("backdrop-filter","invert(1)");
});
$("#i_r").mouseover(function(){
    $(this).css("backdrop-filter","invert(1)");
});
$("#c_r").mouseover(function(){
    $(this).css("backdrop-filter","invert(1)");
});
$("#s_r").mouseover(function(){
    $(this).css("backdrop-filter","invert(1)");
});
$("#h_r").mouseout(function(){
    $(this).css("backdrop-filter","invert(0)");
});
$("#i_r").mouseout(function(){
    $(this).css("backdrop-filter","invert(0)");
});
$("#c_r").mouseout(function(){
    $(this).css("backdrop-filter","invert(0)");
});
$("#s_r").mouseout(function(){
    $(this).css("backdrop-filter","invert(0)");
});
$("#c_r").click(function(){
    document.getElementById("contact_p").scrollIntoView({behavior:"smooth"});
});
$("#s_r").click(function(){
<<<<<<< HEAD
    // alert($("#home_p").css("height"));
});
=======
    alert(document.getElementById("video").paused);
});
>>>>>>> c9fe56a4cbb1887ef618091ef74a1df2f786e27d
