$('.imgArrow').removeClass('active');
$('.phoneList').css("display","none");
$('.btn_more_news').removeClass('active');
$('.dop_news_content').slideUp();
$('.imgArrow').click(function(){
    if(!$('.imgArrow').hasClass('active')){
        $('.imgArrow').addClass('active');
        $('.phoneList').css({
            "display":"block",
            "z-index":"1"
        });
        $('.phoneList').fadeIn();
    }else{
        $('.imgArrow').removeClass('active');
        $('.phoneList').css("z-index","1");
        $('.phoneList').fadeOut();
    };
});
$('.btn_more_news').click(function(){
    if(!$('.btn_more_news').hasClass('active')){
        $('.btn_more_news').addClass('active');
        $('.dop_news_content').slideDown();
    }else{
        $('.btn_more_news').removeClass('active');
        $('.dop_news_content').slideUp();
    };
});

$('.nav_burger_button').click(function(){
    if(!$('.nav_burger_button').hasClass('active')){
        $('.nav_burger_button').addClass('active');
        $('.nav_burger_content').slideDown();

        
    }else{
        $('.nav_burger_button').removeClass('active');
        
        $('.nav_burger_content').slideUp();
        
    }
})
$('.nav_burger_body .nav_a').click(function(){
    $('.nav_burger_button').removeClass('active');
    $('.nav_burger_content').slideUp();
})