import '@fancyapps/fancybox/dist/jquery.fancybox.min';
import '@fancyapps/fancybox/dist/jquery.fancybox.min.css';

$(()=>{
    //video popups
    (() => {
        //const $videoPopups = $('.iframe-popup');

        $('.iframe-video').fancybox({
            type: "iframe"
        });

        $('.iframe-popup').fancybox({
            type: "iframe"
        });

        $('.tm-slider-feedbacks').on('setPosition', function(){
            $('.iframe-popup').fancybox({
                type: "iframe"
            });
        });
    })();
});
