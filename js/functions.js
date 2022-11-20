$(document).ready(function(){
    
    const changeHeader = () => {
        $('header').addClass('alternative');
        $('header ul li button').css('color', 'black');
        $('header h4').css('display', 'block');
    }

    const headerToInit = () => {
        $('header ul li button').css('color', 'white');
        $('header').removeClass('alternative');
        $('header h4').css('display', 'none');
        showHeader();
    }

    const hideHeader = () => {
        $('header').css('opacity', 0);
    }

    const showHeader = () => {
        $('header').css('opacity', 1);
    }

    $(document).scroll(function(){
        var scroll = $(window).scrollTop();
        if(scroll > 250 && scroll < 650)
            changeHeader();
        if(scroll < 250)
            headerToInit();
        if(scroll > 550)
            hideHeader();
    })

    $('header').mouseenter(function(){
        showHeader();
    })

    $('header').mouseleave(function(){
        if($(window).scrollTop() > 550)
            hideHeader();
    })

    $('li button').click(function(){
        var href = $(this).attr('href');
        var home = "#home"
        if(href == home)
            $('html,body').animate({'scrollTop':0});
        else{
            var offSetTop = $(href).offset().top;
            $('html,body').animate({'scrollTop':offSetTop})
        }
    })

})