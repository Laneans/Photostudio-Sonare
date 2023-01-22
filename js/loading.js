window.onload = (function () {
    //ЗАГРУЗКА СТРАНИЦЫ О НАС
    var $body = $("body");
    linkLocation2 = "Main.html";
    setTimeout(function () {
        $body.fadeIn(2000, "linear");
        $body.fadeIn(2000, redirectPage2);
        function redirectPage2() {
            window.location = linkLocation2;
        }
    }, 2800);
});
