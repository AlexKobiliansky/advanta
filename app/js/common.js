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


    function heightses() {

        if ($(window).width()>=480) {
            $('.popular-item-model').matchHeight({byRow: true});
            $('.popular-item-product').matchHeight({byRow: true});

        }
    }

    $(window).resize(function() {
        heightses();
    });

    heightses();


    //E-mail Ajax Send
    $("form").submit(function() { //Change
        var th = $(this);

        $.ajax({
            type: "POST",
            url: "mail.php", //Change
            data: th.serialize()
        }).done(function() {

        });
        return false;
    });
});
