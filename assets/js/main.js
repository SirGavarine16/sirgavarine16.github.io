$(function () {
    //AUXILIAR VARS
    var auxVarSlideshow = 1;
    var statisticsReached = false;

    //  AUXILIAR FUNCTIONS
    function advanceSkillometers() {
        //Advance lines
        $('#skillometer1_line60').addClass('skillometer-line60');
        $('#skillometer1_line70').addClass('skillometer-line70');
        $('#skillometer1_line80').addClass('skillometer-line80');
        $('#skillometer1_line90').addClass('skillometer-line90');
        $('#skillometer1_card60').addClass('skillometer-card60');
        $('#skillometer1_card70').addClass('skillometer-card70');
        $('#skillometer1_card80').addClass('skillometer-card80');
        $('#skillometer1_card90').addClass('skillometer-card90');
        $('#skillometer2_line60').addClass('skillometer-line60');
        $('#skillometer2_line70').addClass('skillometer-line70');
        $('#skillometer2_line80').addClass('skillometer-line80');
        $('#skillometer2_line90').addClass('skillometer-line90');
        $('#skillometer2_card60').addClass('skillometer-card60');
        $('#skillometer2_card70').addClass('skillometer-card70');
        $('#skillometer2_card80').addClass('skillometer-card80');
        $('#skillometer2_card90').addClass('skillometer-card90');
        //Advance circles
        $('#circle70_row1').addClass('expertise70');
        $('#circle80_row1').addClass('expertise80');
        $('#circle90_row1').addClass('expertise90');
        $('#circle60_row2').addClass('expertise60');
        $('#circle90_row2').addClass('expertise90');
        $('#circle70_row2').addClass('expertise70');
    }

    function setStatisticsUp() {
        var i = 1;                  
        function myLoop() {         
            setTimeout(function () {   
                if (i < 26) {
                    $('#apples').text(i + 1);
                }
                if (i < 120) {
                    $('#coffees').text(i + 1);
                }
                if (i < 257) {
                    $('#tumblrs').text(i + 1);
                }
                if (i < 37) {
                    $('#mangas').text(i + 1);
                }
                i++;                    
                if (i < 567) {           
                    myLoop();             
                }                       
            }, 1)
        }

        myLoop();                   
    }

    function calculateElementOnScreen() {
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
            advanceSkillometers();
            wipeOutNavBarClass('#li_skills');
            $('#li_skills').removeClass('sidebar-inactive');
            console.log('skills');
        }
        if (isElementReached('#portfolio')) {
            wipeOutNavBarClass('#li_portfolio');
            $('#li_portfolio').removeClass('sidebar-inactive');
            console.log('portfolio');
        }
        if (isElementReached('#statistics') && statisticsReached === false) {
            console.log('statistics');
            statisticsReached = true;
            setStatisticsUp();
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

    function setInitialSlideShow() {
        $('#testimonial_1').addClass('testimonial-shown');
        $('#testimonial_2').addClass('testimonial-hidden');
        $('#testimonial_3').addClass('testimonial-hidden');
    }

    function flushStepperAnimations() {
        $('#testimonial-stepper1').removeClass('hide-stepper');
        $('#testimonial-stepper2').removeClass('hide-stepper');
        $('#testimonial-stepper3').removeClass('hide-stepper');
        $('#testimonial-stepper1').removeClass('show-stepper');
        $('#testimonial-stepper2').removeClass('show-stepper');
        $('#testimonial-stepper3').removeClass('show-stepper');
    }

    $(window).on('load', function () {
        statisticsReached = false;
        setTimeout(function loaderOff() {
            $('#spinner-loader').addClass('loader-container-fadeout')
            setTimeout(() => {
                $('#spinner-loader').remove();
                calculateElementOnScreen();
                setInitialSlideShow();
            }, 1000)

        }, 500);
        setInterval(function slideshow() {
            switch (auxVarSlideshow) {
                case 1:
                    flushStepperAnimations();
                    $('#testimonial_1').removeClass('show-testimonial');
                    $('#testimonial_1').addClass('old-slide-step');
                    $('#testimonial-stepper1').addClass('hide-stepper');
                    $('#testimonial-stepper2').addClass('stepper-hidden');
                    $('#testimonial_2').addClass('show-testimonial');
                    setTimeout(() => {
                        $('#testimonial_1').removeClass('old-slide-step');
                        $('#testimonial_1').addClass('testimonial-hidden');
                        $('#testimonial-stepper1').removeClass('hide-stepper');
                        $('#testimonial-stepper2').addClass('show-stepper');
                        $('#testimonial_2').addClass('testimonial-shown');
                    }, 899);
                    auxVarSlideshow = 2;
                    break;
                case 2:
                    flushStepperAnimations();
                    $('#testimonial_2').removeClass('show-testimonial');
                    $('#testimonial_2').addClass('old-slide-step');
                    $('#testimonial-stepper2').addClass('hide-stepper');
                    $('#testimonial-stepper3').addClass('stepper-hidden');
                    $('#testimonial_3').addClass('show-testimonial');
                    setTimeout(() => {
                        $('#testimonial_2').removeClass('old-slide-step');
                        $('#testimonial_2').addClass('testimonial-hidden');
                        $('#testimonial-stepper2').removeClass('hide-stepper');
                        $('#testimonial-stepper3').addClass('show-stepper');
                        $('#testimonial_3').addClass('testimonial-shown');
                    }, 899);
                    auxVarSlideshow = 3;
                    break;
                case 3:
                    flushStepperAnimations();
                    $('#testimonial_3').removeClass('show-testimonial');
                    $('#testimonial_3').addClass('old-slide-step');
                    $('#testimonial-stepper3').addClass('hide-stepper');
                    $('#testimonial-stepper1').addClass('stepper-hidden');
                    $('#testimonial_1').addClass('show-testimonial');
                    setTimeout(() => {
                        $('#testimonial_3').removeClass('old-slide-step');
                        $('#testimonial_3').addClass('testimonial-hidden');
                        $('#testimonial-stepper3').removeClass('hide-stepper');
                        $('#testimonial-stepper1').addClass('show-stepper');
                        $('#testimonial_1').addClass('testimonial-shown');
                    }, 899);
                    auxVarSlideshow = 1;
                    break;
                default:
                    auxVarSlideshow = 1;
                    break;
            }
        }, 6000);
    });

    $(window).on('scroll', function () {
        calculateElementOnScreen()
    });


    $('#contact_form').submit(function (e) {
        e.preventDefault();
        alert('Form sent');
    });
});