$(document).ready(function() {
    var typed = new Typed('.type', {
        strings: [
            "Breaking News",
        ],
        typeSpeed: 100,
        backSpeed: 100,
        backDelay: 3000,
        cursorChar: ',',
        loop: true,

    });
    var typed = new Typed('.populer', {
        strings: [
            "Populer",
        ],
        cursorChar: '_',
        typeSpeed: 100,
        backSpeed: 100,
        loop: true,

    });

    $("#animation").hover(function() {
        $("#animated").addClass("animate__animated animate__fadeInUp")
    })
    $("#business_animation").hover(function() {
        $("#business_animated").addClass("animate__animated animate__backInLeft")
    })
    $("#inno_animation").hover(function() {
        $("#inno_animated").addClass("animate__animated animate__backInRight")
    })
    $("#f_animation").hover(function() {
        $("#p_animated").addClass("animate__animated animate__backInUp")
    })
    $("#f_animation").hover(function() {
        $("#s_animated").addClass("animate__animated animate__backInRight animate__delay-2s")
    })
})