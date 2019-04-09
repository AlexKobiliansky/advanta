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


    $(function() {
        $("a[href='#callback']").magnificPopup({
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
