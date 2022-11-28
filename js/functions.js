$(document).ready(function(){
    
    const changeHeader = () => {
        $('header').addClass('alternative');
        $('header ul li button').css('color', 'black');
        $('header div').css('display', 'flex');
    }

    const headerToInit = () => {
        $('header ul li button').css('color', 'white');
        $('header').removeClass('alternative');
        $('header div').css('display', 'none');
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
        if(scroll > 250 && scroll < 650){
            changeHeader();
            hideHeader();
        }
        if(scroll < 250)
            headerToInit();
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
            $('html,body').animate({'scrollTop': 0});
        else{
            var offSetTop = $(href).offset().top;
            $('html,body').animate({'scrollTop':offSetTop})
        }
    })

    const aboutSlider = (id) =>{
        var slider = $('.slider-exhibition-container');
        var option = $(`#${id}`);
        $('.slider-toggle-container button').removeClass('selected');
        option.addClass('selected');
        if(id === 'history')
            slider.animate({right: '0%'})
        if(id === 'construction')
            slider.animate({right: '100%'})
        if(id === 'reform')
            slider.animate({right: '200%'})
    }

    $('.slider-toggle-container button').click(function(){
        var elementId = $(this).attr('id');
        aboutSlider(elementId);
    })

    const commerciesSlider = (id) =>{
        var slider = $('.commerce-inner-view');
        var option = $(`#${id}`);
        $('.commerce-option').removeClass('selected');
        option.addClass('selected');
        if(id === 'restaurant')
            slider.animate({top: '-15%'})
        if(id === 'food')
            slider.animate({top: '-135%'})
        if(id === 'shoes')
            slider.animate({top: '-255%'})
        if(id === 'boutique')
            slider.animate({top: '-375%'})
    }

    $('.commerce-option').click(function(){
        var elementId = $(this).attr('id');
        commerciesSlider(elementId);
    })

    const showModal = (list) => {
        console.log('oioi')
        $('.modal').css('display', 'flex');
        $('body').addClass('prevent-scroll');
        $(`.${list}-list`).css('display', 'flex');
    }

    $('button#shoes').click(function(){
        showModal('history');
    })

})