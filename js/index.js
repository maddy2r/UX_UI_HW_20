function fade(){
$(".preloader").fadeOut("slow");
}
setTimeout(fade, 2000);

$('.scrollTo').click(function(){
    var getElement=$(this).attr('href');
    if ($(getElement).length){
        var getOffset=$(getElement).offset().top;
        $('html,body').animate({
            scrollTop: getOffset
        }, 500);
    }
    return false;
});