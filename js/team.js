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
        linkLocation = "html/menu.html";
        $("body").fadeOut(470, redirectPage);
        function redirectPage() {
            window.location = linkLocation;
        }
    });

    //переход на страницу 404
    var $error_page = $('#work-line-3 button');
    $error_page.on('click', function () {
        //переход    
        $("body").fadeIn(470, "ease-in-out");
        linkLocation = "html/404_page.html";
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
});
