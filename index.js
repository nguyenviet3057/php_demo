var check = 0;
// var d = 0;
var x = 0;
var y = $("#q2_t").offset().top + parseInt($("#pre_bg").css("height"));
var z = document.getElementById("welcome").offsetHeight+document.getElementById("pre").offsetHeight+230;
$("#home_p").css("height",z+"px");
$("#information").scroll(function(){
    x = $(this).scrollTop();
    var f_size = Math.min(24+0.04*x, 48);
    var o_welcome = 1-0.001*x;
    var p_size = Math.min(0.2*x,150);
    var w_q2bg = Math.min(x/160*0.1*x, 100);
    var o_q2bg = 0;
    $("#bg").offset({top:0});
    if (x < 550 && check == 0){
        $("#bg").css({"opacity":Math.min(0.0015*x, 0.75)});
        $(".reference,#header").css({"filter":"invert("+Math.min(0.002*x, 1)+")"});
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
    }else if ($("#preview").offset().top <= 200){
        document.getElementById("video").play();
    };
    if ($("#q2_t").offset().top <= 0 && x>y && check == 0){
        $("#bg").css({"opacity":Math.max(0.75-0.0015*(x-y), 0)});
        $(".reference,#header").css({"filter":"invert("+Math.max(1-0.002*(x-y), 0)+")"});
    };
    // document.getElementById("s_t").innerHTML = x;
});
$("#video").click(function(){
    document.getElementById("video").play();
});
$("#h_r").click(function(){
    // check = 1;
    $("#bg").css({"visibility":"hidden"});
    document.getElementById("home_p").scrollIntoView({behavior:"smooth"});
    setTimeout(function(){
        $("#bg").css({"visibility":"visible"});
        check = 0;
    },750);
});
$("#i_r").click(function(){
    // check = 1;
    $("#bg").css({"visibility":"hidden"});
    document.getElementById("info_p").scrollIntoView({behavior:"smooth"});
    setTimeout(function(){
        $("#bg").css({"visibility":"visible"});
        $("#q2").css({"visibility":"visible"});
        check = 0;
    },750);
});
$("#h_r").mouseover(function(){
    $(this).css("backdrop-filter","invert(1)");

    // $("#information").scroll(function(){
    // });
});
$("#i_r").mouseover(function(){

    $(this).css("backdrop-filter","invert(1)");

    // $("#information").scroll(function(){
    //     // alert("scroll");
    //     var inv = 1-parseFloat($("#home_r").css("filter").replace("invert(",""));
    // });
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
    // check = 1;
    // alert(parseFloat($("#home_r").css("filter").replace("invert(","")));
});