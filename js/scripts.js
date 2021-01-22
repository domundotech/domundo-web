/*!
    * Start Bootstrap - Grayscale v6.0.2 (https://startbootstrap.com/themes/grayscale)
    * Copyright 2013-2020 Start Bootstrap
    * Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-grayscale/blob/master/LICENSE)
    */
(function ($) {
    "use strict"; // Start of use strict

    // Smooth scrolling using jQuery easing
    $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function () {
        if (
            location.pathname.replace(/^\//, "") ==
            this.pathname.replace(/^\//, "") &&
            location.hostname == this.hostname
        ) {
            var target = $(this.hash);
            target = target.length
                ? target
                : $("[name=" + this.hash.slice(1) + "]");
            if (target.length) {
                $("html, body").animate(
                    {
                        scrollTop: target.offset().top - 70,
                    },
                    1000,
                    "easeInOutExpo"
                );
                return false;
            }
        }
    });

    // Closes responsive menu when a scroll trigger link is clicked
    $(".js-scroll-trigger").click(function () {
        $(".navbar-collapse").collapse("hide");
    });

    // Activate scrollspy to add active class to navbar items on scroll
    $("body").scrollspy({
        target: "#mainNav",
        offset: 100,
    });

    // Collapse Navbar
    var navbarCollapse = function () {
        if ($("#mainNav").offset().top > 100) {
            $("#mainNav").addClass("navbar-shrink");
        } else {
            $("#mainNav").removeClass("navbar-shrink");
        }
    };
    // Collapse now if page is not at top
    navbarCollapse();
    // Collapse the navbar when page is scrolled
    $(window).scroll(navbarCollapse);

    // njajal

    var data = [
        {type: "img", src: "assets/img/review/1.jpg", href: "#somelink", title: "Pidgins", text: "by me"},
        {type: "img", src: "assets/img/review/2.jpg", href: "#somelink", title: "Pidgins", text: "by me"},
        {type: "img", src: "assets/img/review/3.jpg", href: "#somelink", title: "Pidgins", text: "by me"},
        {type: "img", src: "assets/img/review/4.jpg", href: "#somelink", title: "Pidgins", text: "by me"},
        {type: "img", src: "assets/img/review/3.jpg", href: "#somelink", title: "Pidgins", text: "by me"},
        {type: "img", src: "assets/img/review/2.jpg", href: "#somelink", title: "Pidgins", text: "by me"},
        {type: "img", src: "assets/img/review/1.jpg", href: "#somelink", title: "Pidgins", text: "by me"},
        {type: "img", src: "assets/img/review/4.jpg", href: "#somelink", title: "Pidgins", text: "by me"},
        {type: "img", src: "assets/img/review/1.jpg", href: "#somelink", title: "Pidgins", text: "by me"},
        {type: "img", src: "assets/img/review/2.jpg", href: "#somelink", title: "Pidgins", text: "by me"},
        {type: "img", src: "assets/img/review/3.jpg", href: "#somelink", title: "Pidgins", text: "by me"},
        {type: "img", src: "assets/img/review/4.jpg", href: "#somelink", title: "Pidgins", text: "by me"},
        {type: "img", src: "assets/img/review/1.jpg", href: "#somelink", title: "Pidgins", text: "by me"},
        {type: "img", src: "assets/img/review/2.jpg", href: "#somelink", title: "Pidgins", text: "by me"},
        {type: "img", src: "assets/img/review/3.jpg", href: "#somelink", title: "Pidgins", text: "by me"},
        {type: "img", src: "assets/img/review/4.jpg", href: "#somelink", title: "Pidgins", text: "by me"},
    ];

    // html templates
    var tplimg = '<a href="%href%" class="thumb thumb-img" style="background-image: url(%src%)">'
        + '<img src="%src%" alt="%title%"/>'
        + '<div><span>%title%</span><span>%text%</span></div>'
        + '</a>';
    var tpltxt = '<a href="%href%" class="thumb thumb-txt">'
        + '<div><span>%title%</span><span>%text%</span></div>'
        + '</a>';

    var cnt = document.getElementById("thumbs");
    var cs = "";
    for (var i = 0; i < data.length; i++) {
        // choose a template to use
        var tpl = data[i].type == "img" ? tplimg : tpltxt;
        // replace strings
        for (var k in data[i])
            tpl = tpl.replace(eval("/%" + k + "%/g"), data[i][k]);
        // save the result
        cs += tpl;
    }
    cnt.innerHTML = cs;
})(jQuery); // End of use strict
