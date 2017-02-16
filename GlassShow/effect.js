$(document).ready(function() {
    $(".glass_list").delegate("img", "click", function(e) {
        var src = $(e.target).attr("src");
        $("#glass").css({
            'top':'20%',
            'left': '50%',
            'margin-left': '-100px',
            'width': '200px',
            'height': '80px',
            'transform': 'rotate(0deg)'
        });
        $("#glass").attr("src", src);
    })

    $("#clear").bind("click", function() {
        $("#glass").attr("src", "")
    });

    $("#sizeW").bind("click", function() {
        $("#glass").css("transform", "scaleX(2)")
    });

    $("#sizeH").bind("click", function() {
        $("#glass").css("transform", "scaleY(2)")
    });

    $("#size").bind("click", function() {
        $("#glass").css("transform", "scale(1.5)")
    });

    $("#rotateL").bind("click", function() {
        $("#glass").css("transform", "rotate(-45deg)")
    });

    $("#rotateR").bind("click", function() {
        $("#glass").css("transform", "rotate(45deg)")
    });

    $("#glass").draggable();
});