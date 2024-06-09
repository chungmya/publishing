$(function(){
//[indexpage]
//-------------------------mobile .hamburger
    $('#hamburger').hide()
    $('#icon .menu_icon').on('click', function(){
        $('#hamburger').stop().slideDown();
    });
    $('#hamburger .close').on('click', function(){
        $('#hamburger').stop().slideUp();
    });


    $('.hambuger_sub').hide();
    $('#hamburger > li a').on('click',function(){
        $('.hambuger_sub').stop().slideUp();
        $(this).next().stop().slideToggle();
    });

//-------------------------[메인 배너 스크립트]
    $('a[href="#"]').click(function(e){
        e.preventDefault();
    });

    //클릭시 해당 이미지로 이동
    $('.btn').on('click', function(){
        let num = $(this).index();
        $('.banner_img').animate({
            marginLeft: -100 * num + '%'
        }, 1000);

        $('.btn').removeClass('active');
        $(this).addClass('active');
    });

    //자동 슬라이드 
    let num = 0 //멈춰라 이건가..?
    function slide (){
        num = (num +1) % 4;
        $('.banner_img').animate({
            marginLeft: -100 * num + '%'
        }, 3000);

        $('.btn').eq(num).addClass('active').siblings().removeClass('active');
        //eq(num)이 있어야 해당 버튼이 .active된다.
    }

    let auto = setInterval(slide, 5000);

    $('.btn').hover(function(){
        clearInterval(auto); //값이 끝
    }, function(){  
        //끝난 값을 다시 재 선언
        auto = setInterval(slide, 2000)
    });
/*
swiper
    var swiper = new Swiper('.swiper-container', {
        //해당되는 옵션의 값 여기에 입력
        autoplay: {delay:2000},
        loop:true,//반복 / 1로 롤백 되는게 아니라 자연스럽게 넘어감
        pagination: { el: '.swiper-pagination', clickable:true, //dynamicMainBullets: 1, type:'progressbar' },
        //하단에 머릿말 기호처럼 생김 //clickable : true 손가락 모양으로 바뀜
        }
    }); 

    $('#gnb li').on('click', function(){
        let i = (this).index() + 1;
        swiper.slideToLoop(i);
        swiper.autoplay.start();
    });
*/


//-------------------------[slide b] 자동 슬라이드
/* 
자동 슬라이드 
    let i = 0 //멈춰라 이건가..?
    function slide(){
        i = (i +1) % 4;
        $('.wrapper > section').animate({
            marginLeft: -100 * i + '%'
        }, 3000);
    }
    let replay = setInterval(slide, 5000);
*/

//-------------------------[#product]

    $('#new > li').on({'mouseenter': function(){
        $(this).stop().animate({
            top: -25
    }, 500);

    }, 'mouseleave':function(){
        $(this).stop().animate({
            top: 0
    }, 500);
    }
    });

 



//[listpage]
//------------------------- .gnb
    $('.gnb_sub').hide();

    $('.gnb > li > a').on('mouseenter', function(){
        const style = $(this).hasClass('.on');

        if(style == false){ //.on이 없는 경우
            $('.gnb > li > a').removeClass('on');
            $(this).removeClass('on');

            $('.gnb .gnb_sub').stop().slideUp();
            $(this).next().stop().slideDown();
        }else {
            $(this).removeClass('on');
            $(this).next().slideUp();
        }
    });


//-------------------------#product
    $('gallery_list > li').on({'mouseenter': function(){
        $(this).stop().animate({
            top: -25
    }, 500);

    }, 'mouseleave':function(){
        $(this).stop().animate({
            top: 0
    }, 500);
    }
    });


//-------------------------#category
    $('.category_sub').hide();

    $('.category .menu > a').on('click', function(){
            $('.category > li a').removeClass('on');
            $(this).addClass('on');

            $(this).next('.category_sub').stop().slideToggle();
    });

});//준비문서