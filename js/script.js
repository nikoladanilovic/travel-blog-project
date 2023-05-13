/*
var n = 2;
var i;
for(i=1; i < n+1; i++){
    var secId, arrowId, infoId, secImgId;

    secId = "#section_tips"+i;
    arrowId = "#hide_arrow_tips"+i;
    infoId = "#hidden_info_tips"+i;
    secImgId = "#section_img_tips"+i;

    $(document).ready(function() {
        $(secId).click(function(){
            $(infoId).show(1000);
        });
        $(arrowId).click(function(){
            $(infoId).hide(1000);
        });
        $(secId).hover(function(){
            $(secImgId).addClass("fade");
        });
        $(secId).mouseout(function(){
            $(secImgId).removeClass("fade");
        });
    });
}
*/

$(document).ready(function() {
    


    $("#section_tips1").click(function(){
        $("#hidden_info_tips1").show(1000);
    });
    $("#hide_arrow_tips1").click(function(){
        $("#hidden_info_tips1").hide(1000);
    });
    $("#section_tips1").hover(function(){
        $("#section_img_tips1").addClass("fade");
    });
    $("#section_tips1").mouseleave(function(){
        $("#section_img_tips1").removeClass("fade");
    });

    $("#section_tips2").click(function(){
        $("#hidden_info_tips2").show(1000);
    });
    $("#hide_arrow_tips2").click(function(){
        $("#hidden_info_tips2").hide(1000);
    });
    $("#section_tips2").hover(function(){
        $("#section_img_tips2").addClass("fade");
    });
    $("#section_tips2").mouseleave(function(){
        $("#section_img_tips2").removeClass("fade");
    });



    $("#section_travels1").click(function(){
        $("#hidden_info_travels1").show(1000);
    });
    $("#hide_arrow_travels1").click(function(){
        $("#hidden_info_travels1").hide(1000);
    });
    $("#section_travels1").hover(function(){
        $("#section_img_travels1").addClass("fade");
    });
    $("#section_travels1").mouseleave(function(){
        $("#section_img_travels1").removeClass("fade");
    });



    $("#section_travels2").click(function(){
        $("#hidden_info_travels2").show(1000);
    });
    $("#hide_arrow_travels2").click(function(){
        $("#hidden_info_travels2").hide(1000);
    });
    $("#section_travels2").hover(function(){
        $("#section_img_travels2").addClass("fade");
    });
    $("#section_travels2").mouseleave(function(){
        $("#section_img_travels2").removeClass("fade");
    });


    $("#section_travels3").click(function(){
        $("#hidden_info_travels3").show(1000);
    });
    $("#hide_arrow_travels3").click(function(){
        $("#hidden_info_travels3").hide(1000);
    });
    $("#section_travels3").hover(function(){
        $("#section_img_travels3").addClass("fade");
    });
    $("#section_travels3").mouseleave(function(){
        $("#section_img_travels3").removeClass("fade");
    });



    $("#section_travels4").click(function(){
        $("#hidden_info_travels4").show(1000);
    });
    $("#hide_arrow_travels4").click(function(){
        $("#hidden_info_travels4").hide(1000);
    });
    $("#section_travels4").hover(function(){
        $("#section_img_travels4").addClass("fade");
    });
    $("#section_travels4").mouseleave(function(){
        $("#section_img_travels4").removeClass("fade");
    });



    $("#section_bike1").click(function(){
        $("#hidden_info_bike1").show(1000);
    });
    $("#hide_arrow_bike1").click(function(){
        $("#hidden_info_bike1").hide(1000);
    });
    $("#section_bike1").hover(function(){
        $("#section_img_bike1").addClass("fade");
    });
    $("#section_bike1").mouseleave(function(){
        $("#section_img_bike1").removeClass("fade");
    });



    $("#section_bike2").click(function(){
        $("#hidden_info_bike2").show(1000);
    });
    $("#hide_arrow_bike2").click(function(){
        $("#hidden_info_bike2").hide(1000);
    });
    $("#section_bike2").hover(function(){
        $("#section_img_bike2").addClass("fade");
    });
    $("#section_bike2").mouseleave(function(){
        $("#section_img_bike2").removeClass("fade");
    });



    $("#section_plans1").click(function(){
        $("#hidden_info_plans1").show(1000);
    });
    $("#hide_arrow_plans1").click(function(){
        $("#hidden_info_plans1").hide(1000);
    });
    $("#section_plans1").hover(function(){
        $("#section_img_plans1").addClass("fade");
    });
    $("#section_plans1").mouseleave(function(){
        $("#section_img_plans1").removeClass("fade");
    });



    $("#section_plans2").click(function(){
        $("#hidden_info_plans2").show(1000);
    });
    $("#hide_arrow_plans2").click(function(){
        $("#hidden_info_plans2").hide(1000);
    });
    $("#section_plans2").hover(function(){
        $("#section_img_plans2").addClass("fade");
    });
    $("#section_plans2").mouseleave(function(){
        $("#section_img_plans2").removeClass("fade");
    });



    $("#section_plans3").click(function(){
        $("#hidden_info_plans3").show(1000);
    });
    $("#hide_arrow_plans3").click(function(){
        $("#hidden_info_plans3").hide(1000);
    });
    $("#section_plans3").hover(function(){
        $("#section_img_plans3").addClass("fade");
    });
    $("#section_plans3").mouseleave(function(){
        $("#section_img_plans3").removeClass("fade");
    });
});

