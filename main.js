$(document).ready(function () {
    $(".mobile-filter-content-area .content-category-head").click(function () {
        $(this).toggleClass("active");
        if ($(this).hasClass("active")) {
            $(".mobile-filter-content-area").find("ul").eq(0).slideDown();
        } else {
            $(".mobile-filter-content-area").find("ul").eq(0).slideUp();
        }
    });
});


$(document).ready(function () {

    $(".bread-back-icon").click(function (event) {
        $(this).parents("ul").eq(0).attr("style", "display:none");
        $(this).parents("ul").eq(0).find("li").eq(0).attr("style", "display:none");
        $(this).parents("ul").eq(1).find("li").attr("style", "display:block");
        $(this).parents("ul").eq(1).find("li").children("span").attr("style", "display:flex");
        event.stopPropagation();
    });

    $(".mobile-filter-content-area ul li").click(function () {
        if ($(this).hasClass("category-breadcrumb"))
        {

        }
        else{
            $(this).siblings().hide();
            $(this).css({
                "borderBottom": "0",
                "marginBottom": "0",
                "paddingBottom": "0"
            });
            var k = $(this).children("ul").eq(0).show();
            $(this).children("ul").not(k).hide();
            $(this).children("ul").parents().eq(0).children("span").hide();
        }
        
    });

});