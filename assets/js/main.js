$(function () {
    //  AUXILIAR FUNCTIONS

    function calculateElementOnScreen() {
        console.log('a')

        if (isElementReached('#home')) {
            wipeOutNavBarClass('#li_home');
            $('#li_home').removeClass('sidebar-inactive');
            console.log('home');
        }

        if (isElementReached('#aboutme')) {
            wipeOutNavBarClass('#li_about');
            $('#li_about').removeClass('sidebar-inactive');
            console.log('about');
        }

        if (isElementReached('#resume')) {
            wipeOutNavBarClass('#li_resume');
            $('#li_resume').removeClass('sidebar-inactive');
            console.log('resume');
        }

        if (isElementReached('#skills')) {
            wipeOutNavBarClass('#li_skills');
            $('#li_skills').removeClass('sidebar-inactive');
            console.log('skills');
        }

        if (isElementReached('#portfolio')) {
            wipeOutNavBarClass('#li_portfolio');
            $('#li_portfolio').removeClass('sidebar-inactive');
            console.log('portfolio');
        }

        if (isElementReached('#testimonials')) {
            wipeOutNavBarClass('#li_testimonials');
            $('#li_testimonials').removeClass('sidebar-inactive');
            console.log('testimonials')
        }

        if (isElementReached('#contact')) {
            wipeOutNavBarClass('#li_contact');
            $('#li_contact').removeClass('sidebar-inactive');
            console.log('contact')
        }
    }

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

    function wipeOutNavBarClass(active) {
        let navBarElem = ['#li_home', '#li_about', '#li_resume', '#li_skills', '#li_portfolio', '#li_testimonials', '#li_contact'];
        navBarElem.forEach((elem) => {
            if (elem !== active) {
                $(elem).addClass('sidebar-inactive');
            }
        });
    }

    setTimeout(function loaderOff() {
        $('#spinner-loader').addClass('loader-container-fadeout')
        setTimeout(() => {
            $('#spinner-loader').remove();
        }, 1000)

    }, 500)



    $(window).on('load', function () {
        calculateElementOnScreen();
    });

    $(window).on('scroll', function () {
        calculateElementOnScreen()
    });


    $('#contact_form').submit(function (e) {
        e.preventDefault();
        alert('Form sent');
    });
});