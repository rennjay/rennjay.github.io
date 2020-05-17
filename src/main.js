$(document).ready(function () {
    $(".pf-item").hover(function () {
            // $(".pf-caption").css("height", "100%");
            $(this).find(".pf-caption").addClass("pf-caption-hover");
        },
        function () {
            $(this).find(".pf-caption").removeClass("pf-caption-hover");
        }
    );

});