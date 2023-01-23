window.onload = (function () {

    //уход со страницы меню по клику на крестик
    var $exit = $("#exit");
    $exit.on('click', function () {
        $("body").fadeIn(470, "ease-in-out");
        linkLocation = "..//html/menu.html";
        $("body").fadeOut(470, redirectPage);
        function redirectPage() {
            window.location = linkLocation;
        }
    });

    //переход на другие страницы
    $("div").click(function () {
        switch ($(this).attr("id")) {
            case "about":
                $("body").fadeIn(470, "ease-in-out");
                linkLocation = "..//html/menu.html";
                $("body").fadeOut(470, redirectPage);
                function redirectPage() {
                    window.location = linkLocation;
                }
                break;
            case "services":
                $("body").fadeIn(470, "ease-in-out");
                linkLocation = "..//html/services.html";
                $("body").fadeOut(470, redirectPage);
                function redirectPage() {
                    window.location = linkLocation;
                }
                break;
            case "halls":
                $("body").fadeIn(470, "ease-in-out");
                linkLocation = "..//html/halls.html";
                $("body").fadeOut(470, redirectPage);
                function redirectPage() {
                    window.location = linkLocation;
                }
                break;
            case "team":
                $("body").fadeIn(470, "ease-in-out");
                linkLocation = "..//html/team.html";
                $("body").fadeOut(470, redirectPage);
                function redirectPage() {
                    window.location = linkLocation;
                }
                break;
            case "portfolio":
                $("body").fadeIn(470, "ease-in-out");
                linkLocation = "..//html/portfolio.html";
                $("body").fadeOut(470, redirectPage);
                function redirectPage() {
                    window.location = linkLocation;
                }
                break;
            case "contacts":
                $("body").fadeIn(470, "ease-in-out");
                linkLocation = "..//html/contacts.html";
                $("body").fadeOut(470, redirectPage);
                function redirectPage() {
                    window.location = linkLocation;
                }
                break;
        }
    });
});
