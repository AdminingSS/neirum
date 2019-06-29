import 'slick-slider/slick/slick';
import 'slick-slider/slick/slick.css';
import 'slick-slider/slick/slick-theme.css';

$(()=>{

    $(window).on('contextmenu', function (e) {
        e.preventDefault();
        e.stopPropagation();
        e.stopImmediatePropagation();
    });
    $(window).on('keydown', function (e) {

        if(e.shiftKey) {
            e.preventDefault();
            e.stopPropagation();
            e.stopImmediatePropagation();
        }

    });
    $(window).on('keypress', function (e) {
        if(e.shiftKey) {
            e.preventDefault();
            e.stopPropagation();
            e.stopImmediatePropagation();
        }
    });

    //slick slider
    (() => {
        const $sliderFeedbacks = $('.tm-slider-feedbacks');
        const sliderFeedbacksOptions = {
            autoplay: false,
            arrows: false,
            dots: false,
            infinite: true,
            slidesToShow: 3,
            slidesToScroll: 1,
            //swipeToSlide: true,
            //focusOnSelect: true,
            //centerMode: true,
            //centerPadding: '10%'
            responsive: [
                {
                    breakpoint: 640,
                    settings: {
                        slidesToShow: 1,
                        centerMode: true,
                        centerPadding: '160px',
                        swipeToSlide: true,
                    }
                },
                {
                    breakpoint: 570,
                    settings: {
                        slidesToShow: 1,
                        centerMode: true,
                        centerPadding: '120px',
                        swipeToSlide: true,
                    }
                },
                {
                    breakpoint: 470,
                    settings: {
                        slidesToShow: 1,
                        centerMode: true,
                        centerPadding: '90px',
                        swipeToSlide: true,
                    }
                },
                {
                    breakpoint: 400,
                    settings: {
                        slidesToShow: 1,
                        centerMode: true,
                        //centerPadding: '60px',
                        swipeToSlide: true,
                    }
                }
            ]
        };

        $sliderFeedbacks.slick(sliderFeedbacksOptions);

        let $videoPopups = $('.iframe-popup');

        $videoPopups.on('click', handleSliderClick);

        $sliderFeedbacks.on('setPosition', function(){
            $videoPopups.off('click', handleSliderClick);
            $videoPopups = $('.iframe-popup');
            $videoPopups.on('click', handleSliderClick);
        });

        function handleSliderClick (e) {
            const sliderMode = $('.slick-current+.slick-active').length;
            const $target = $(e.target);

            if(!sliderMode) {
                if(!$target.parents('.slick-current').length) {
                    e.stopImmediatePropagation();
                    e.stopPropagation();
                    e.preventDefault();

                    if($target.parents('.slick-current+.slick-slide').length) {
                        $sliderFeedbacks.slick('slickNext');
                    }
                    else {
                        $sliderFeedbacks.slick('slickPrev');
                    }
                }
                return;
            }

            if(!$target.parents('.slick-current+.slick-active').length) {
                e.stopImmediatePropagation();
                e.stopPropagation();
                e.preventDefault();

                if($target.parents('.slick-current').length) {
                    $sliderFeedbacks.slick('slickPrev');
                }
                else {
                    $sliderFeedbacks.slick('slickNext');
                }
            }
        }

    })();
});
