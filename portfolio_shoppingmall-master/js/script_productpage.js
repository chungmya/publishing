$(function(){
//[productPage]
//------------------------- .more .mobile
$('#info').hide();
$('.up').on('click', function(){
    $('#info').slideDown();
    $('.up').css('display','none'); 
    $('.down').css('display','block'); 
    //밑에 깔려 있는 close버튼이 쨘! 하고 나타남.
});

$('.down').on('click', function(){
    $('#info').slideUp();
      $('.down').css('display','none');
      $('.up').css('display','block');
});


//------------------------- .gallery2
//자동 슬라이드 
/*
let num = 0
function slide(){
    num = (num +1) % 2;
    $('.gallery2').animate({
        marginLeft: -100 * num + '%'
    }, 1000);

};
let auto = setInterval(slide, 1000);
*/

//------------------------- .buy
$('.buy #buy').on('click', function(){
    alert('구매가 완료되었습니다.');
});
$('#btn .wish').on('click', function(){
    $('#btn .wish > img').attr({'src':'../image/icon_mobile_wishlist_color.png', 'alt':'done'});
});



});//끝