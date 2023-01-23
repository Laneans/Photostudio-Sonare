window.onload = (function () {

    //ЗАГРУЗКА СТРАНИЦЫ
    var $body = $("body");
    $(document).ready(function () {
        $body.fadeIn(1000, "swing");
        $body.addClass('body_visible');
    });


    //ПЕРЕХОДЫ
    //переход на страницу с меню
    var $menu = $('#nav-open');
    $menu.on('click', function () {
        //переход    
        $("body").fadeIn(470, "ease-in-out");
        linkLocation = "..//html/menu.html";
        $("body").fadeOut(470, redirectPage);
        function redirectPage() {
            window.location = linkLocation;
        }
    });
    
    //переход вверх по стрелке из футера
    var $to_up = $('#arr-up-link');
    $to_up.click(function (event) {
        $('body,html').animate({ scrollTop: 0 }, 2000, "swing");
    });

    //Слайдер-галерея залов 
    var $to_next_gallery = $('#arr-nav-2');
    var $to_back_gallery = $('#arr-nav-1');
    var $gallery_halls = $('#halls');

    $to_next_gallery.on('click', function () {
        moveGalleryToLeft();
        function moveGalleryToLeft() {
            $gallery_halls.animate({ marginLeft: "-1870px" },
                20000,
                function () {
                    $gallery_halls.css('margin-left', '-1870px');
                    moveGalleryToLeft();
                }
            );
        };
    });

    $to_back_gallery.on('click', function () {
        moveGalleryToRight();
        function moveGalleryToRight() {
            $gallery_halls.animate({ marginLeft: "0px" },
                20000,
                function () {
                    $gallery_halls.css('margin-left', '0px');
                    moveGalleryToRight();
                }
            );
        };
    });
});
