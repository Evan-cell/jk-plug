$("document").ready(function(){
    $("body").append("<h1>hello its kim</h1>");
    $("h1").css("color", "blue");

    $("#show").on("click", function(){
        $("#para").show();
    });
    $("#hide").on("click", function(){
        $("#para").hide();
    });
    

    $("#see").on("click", function(){
        $("#textbox").show();
    })
    $("#nosee").on("click", function(){
        $("#textbox").hide();
    })
    $("#fade-in").on("click", function(){
        $("#togo").fadeIn("fast")
    })
    $("#slide").on("click", function(){
        $("img").slideUp("2000","linear")
    })
    $("#slideDown").on("click", function(){
        $("img").slideDown("2000","linear")
    })
    $("#toggle").on("click", function(){
        $("img").toggle("2000","linear")
    })
    $("#grow").on("click", function(){
        $("#img2").animate({width: "500px"})
    })
    $("#grow1").on("click", function(){
        $("#img2").animate({width: "200px"})
    })
});