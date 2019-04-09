$(document).ready(function(){

    $('.sm').smartmenus();

    /**
     * mobile-mnu customization
     */
    var mmenu = $('#mobile-mnu');
    var $mmenu = mmenu.mmenu({
        "navbars": [
            {
                "position": "top",
                "content": [
                    "breadcrumbs",
                    "close"
                ]
            }
        ],
        "slidingSubmenus": false,
        "pageScroll": true,

        "navbar": {
            "title" : "",
        },
        "extensions": [
            "theme-dark",
            "pagedim-black",
            "position-front",
        ],
    }, {
        offCanvas: {
            pageSelector: "#page-container"
        },
    });

    var mmenuBtn = $("#mmenu-btn");
    var API = $mmenu.data("mmenu");

    mmenuBtn.click(function() {
        API.open();
    });
    /**
     * end mobile-mnu customization
     */


    /**
     * side-mnu customization
     */
    $('ul.side-mnu').superfish({
        animation: {opacity:'show', top: 0},
        animationOut: {opacity:'hide', top: 30},
        delay:		 300,
        speed: 'fast'
    });


    function heightses() {

        if ($(window).width()>=480) {
            $('.popular-item-model').matchHeight({byRow: true});
            $('.popular-item-product').matchHeight({byRow: true});
            $('.product-item-model').matchHeight({byRow: true});
            $('.product-item-price').matchHeight({byRow: true});
        }

        if ($(window).width()>=992) {
            $('.stock-slide-model').matchHeight({byRow: true});
            $('.stock-slide-product').matchHeight({byRow: true});
        }
    }

    $(window).resize(function() {
        heightses();
    });

    heightses();







    $('.stock-slider').owlCarousel({
        loop:true,
        nav: true,
        items: 2,
        margin: 15,
        dots: false,
        autoHeight: false,
        navText: ["<i class=\"fa fa-chevron-left\"></i>","<i class=\"fa fa-chevron-right\"></i>"],
        responsive: {
            0: {
                items: 1
            },
            992: {
                items: 2
            }
        }
    });

    $('.side-slider').owlCarousel({
        loop:true,
        nav: true,
        items: 1,
        margin: 15,
        dots: false,
        autoHeight: true,
        navText: ["<i class=\"fa fa-chevron-left\"></i>","<i class=\"fa fa-chevron-right\"></i>"],
    });


    $('.prod-slider').owlCarousel({
        loop:true,
        nav:false,
        items: 1,
        thumbs: true,
        dots: false,
        thumbsPrerendered: true,
        thumbItemClass: 'nav-item',
        animateIn: "fadeIn",
        animateOut: "fadeOut",
        // responsive: {
        //     0: {
        //         dots: true,
        //         margin: 15,
        //         mouseDrag: true,
        //         nav: false
        //     },
        //     768: {
        //         dots: false,
        //         margin: 0,
        //         mouseDrag: false,
        //         nav: false
        //     }
        // }
    });

    $('.prod-slide').photoswipe();

    $('.product-rate').raty({
        path: "libs/raty/img/"
    });

    $('a[href="#order-form"]').on('click', function(){
       var  th = $(this),
            model = th.data('model'),
            price = th.data('price');

       $('#order-data').val(model + ' (цена: ' + price + ")")

    });

    $(function() {
        $("a[href='#callback'], a[href='#order-form']").magnificPopup({
            type: "inline",
            fixedContentPos: !1,
            fixedBgPos: !0,
            overflowY: "auto",
            closeBtnInside: !0,
            preloader: !1,
            midClick: !0,
            removalDelay: 300,
            mainClass: "my-mfp-zoom-in"
        })
    });

    $.validate({
        form : '.contact-form',
        scrollToTopOnError: false
    });

    //E-mail Ajax Send
    $("form").submit(function() { //Change
        var th = $(this);
        var t = th.find(".btn").text();
        th.find(".btn").prop("disabled", "disabled").addClass("disabled").text("Отправлено!");

        $.ajax({
            type: "POST",
            url: "mail.php", //Change
            data: th.serialize()
        }).done(function() {
            setTimeout(function() {
                th.find(".btn").removeAttr('disabled').removeClass("disabled").text(t);
                th.trigger("reset");
                $.magnificPopup.close();
            }, 2000);
        });
        return false;
    });
});
