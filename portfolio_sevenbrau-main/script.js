$(function(){
    AOS.init();

    $('a[href="#"]').on('click', function(e){
        e.preventDefault();
    });

    //fade in section
    $(window).scroll(function() {
        var section = $('#contents section')
        var windowBottom = $(window).height() + $(window).scrollTop();
        
        for (var i = 0; i <  section.length; i++) {
            var sectionBottom = $(section[i]).height()/2 + $(section[i]).offset().top;
            console.log(section,windowBottom,sectionBottom)
            if (windowBottom >= sectionBottom) {
                    $(section[i]).animate({opacity: '1'}, 500);
            }    
        }
    });

    //ourstory story-bg

});//