function home() {
    window.location.replace("main.html");
}
function about() {
    window.location.replace("about.html");
}
$(window).scroll(function() {
    let bgwidth = window.screen.width*1.2;
    let scrollPos = $(this).scrollTop();
    let bgPos = ((scrollPos / bgwidth) * 100)/($(".bg-1").attr("speed"));
    $(".bg-1").css("background-position", bgPos + "% 50%");
});
$(window).scroll(function() {
    let bgwidth = window.screen.width;
    let scrollPos =  $(window).scrollTop() - $(".bg-2").offset().top*2;
    let bgPos = 100 + ((scrollPos / bgwidth) * 100)/($(".bg-2").attr("speed"));
    $(".bg-2").css("background-position", bgPos + "% 50%");
});