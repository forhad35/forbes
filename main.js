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
    $("#f_animation").hover(function() {
        $("#p_animated").addClass("animate__animated animate__backInUp")
    })
    $("#f_animation").hover(function() {
        $("#s_animated").addClass("animate__animated animate__backInRight animate__delay-1s")
    })
    $("#animation").hover(function() {
        $("#animated").addClass("animate__animated animate__fadeInUp")
    })
    $("#business_animation").hover(function() {
        $("#business_animated").addClass("animate__animated animate__backInLeft")
    })
    $("#inno_animation").hover(function() {
        $("#inno_animated").addClass("animate__animated animate__backInRight")
    })
    $("#real_animation").hover(function() {
        $("#real_animated").addClass("animate__animated animate__backInLeft")
    })
    $("#mony_animation").hover(function() {
        $("#mony-animated").addClass(" animate__animated animate__backInRight")
    })
    $("#life-animation").hover(function() {
        $("#life-animated").addClass(" animate__animated animate__backInLeft")
    })
})