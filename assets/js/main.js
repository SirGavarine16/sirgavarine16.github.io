$(function () {
 

    function isElementReached(element) {
        var _window = $(window),
            docViewTop = _window.scrollTop(),
            docViewBottom = docViewTop + _window.height(),
            elemTop = $(element).offset().top,
            elemBottom = elemTop + $(element).outerHeight();
        if ($(element).outerHeight() > _window.height()) {
            return ((elemBottom >= docViewBottom) && (elemTop <= docViewTop));
        } else {
            return ((elemBottom <= docViewBottom) && (elemTop >= docViewTop));
        }
    }

    

    $(window).on('load', function () {
        
    });

    $(window).on('scroll', function () {
        console.log($(window).scrollTop())
        if($(window).scrollTop() >= 45) {
            $('#top_btn').removeClass('display-none');
        } else {
            $('#top_btn').addClass('display-none');
        }

    });


    
});