console.log("Seja, Bem Vindo!");

jQuery(document).ready(function() {
    $(window).scroll(function () {
        set = $(document).scrollTop()+"px";
        jQuery('#float-banner').animate(
            {top:set},
            {duration:1000, queue:false}
        );
    });
});