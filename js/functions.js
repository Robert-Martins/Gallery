$(document).ready(function(){

    
    $('html, body').fadeIn('slow');

    const loadHandler = () => {
        $('.splash-screen').fadeOut('out');
        $('body').removeClass('prevent-scroll');
    }

    var imageCounter = 0;

    $('img').on('load', function(){
        imageCounter++;
        if(imageCounter >= 45){
            loadHandler();
        }
    })

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

    const aboutSlider = (id) =>{
        var slider = $('.slider-exhibition-container');
        var option = $(`#${id}`);
        $('.slider-toggle-container button').removeClass('selected');
        option.addClass('selected');
        if(id === 'history')
            slider.animate({right: '0%'})
        if(id === 'reform')
            slider.animate({right: '100%'})
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
        $('.modal').css('display', 'flex');
        $('body').addClass('prevent-scroll');
        $(`.${list}-list`).css('display', 'flex');
    }

    const closeModal = () =>{
        $('.modal').css('display', 'none');
        $('body').removeClass('prevent-scroll');
        $('.modal nav').css('display', 'none');
    }

    $('img#history').click(function(){
        showModal('history');
        $('#modal-image').attr('src', './assets/about/history/1.jpg');
    })

    $('img#reform').click(function(){
        showModal('reform');
        $('#modal-image').attr('src', './assets/about/reform/1.jpg');
    }) 

    $('button#restaurant').click(function(){
        showModal('restaurant');
        $('#modal-image').attr('src', './assets/rooms/restaurant/1.jpg');
    })

    $('button#food').click(function(){
        showModal('food');
        $('#modal-image').attr('src', './assets/rooms/food/1.jpg');
    })

    $('button#shoes').click(function(){
        showModal('shoes');
        $('#modal-image').attr('src', './assets/rooms/shoes/1.jpg');
    })

    $('button#boutique').click(function(){
        showModal('boutique');
        $('#modal-image').attr('src', './assets/rooms/boutique/1.jpg');
    })

    $('.modal').on('click',function(e){
        if(!(($(e.target).closest(".modal-body").length > 0)))
            closeModal();
    })

    $('#close').click(function(){
        closeModal();
    })

    $('nav#list img').click(function(){
        var source = $(this).attr('src');
        console.log(source)
        if(source === './assets/about/history/5.jpg'){
            $('article h6').css('display', 'none');
            $('article h6.portrait').css('display', 'block');
        }
        else if(source === './assets/about/history/3.jpg'){
            $('article h6').css('display', 'none');
            $('article h6.museum').css('display', 'block');
        }
        else{
            $('article h6').css('display', 'none');
        }
        $('#modal-image').attr('src', source);
    })

    $('button#home').click(function(){
        $('html,body').animate({'scrollTop':0})
    })

    $('button#about').click(function(){
        $('html,body').animate({'scrollTop':700})
    })

    $('button#commercies').click(function(){
        $('html,body').animate({'scrollTop':1240})
    })

})