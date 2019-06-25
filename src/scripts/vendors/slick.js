import 'slick-slider/slick/slick';
import 'slick-slider/slick/slick.css';
import 'slick-slider/slick/slick-theme.css';

$(()=>{
    //slick slider
    (() => {
        const $sliderFeedbacks = $('.tm-slider-feedbacks');
        const sliderFeedbacksOptions = {
            autoplay: false,
            arrows: false,
            dots: false,
            infinite: true,
            slidesToShow: 3,
            swipeToSlide: true,
            //focusOnSelect: true,
            //centerMode: true,
            //centerPadding: '10%'
            // responsive: [
            //     {
            //         breakpoint: 992,
            //         settings: {
            //             slidesToShow: 3,
            //         }
            //     },
            //     {
            //         breakpoint: 768,
            //         settings: {
            //             slidesToShow: 2,
            //         }
            //     },
            //     {
            //         breakpoint: 576,
            //         settings: {
            //             slidesToShow: 1,
            //             centerMode: true
            //         }
            //     }
            // ]
        };

        $sliderFeedbacks.slick(sliderFeedbacksOptions);
    })();
});
