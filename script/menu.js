$("document").ready(function() {

    $(".flip").click(function () {
        $('#menu').slideToggle('slow')
    })

    $(".scroll-attributes").click(function(){
        let servicePlace = $(".attributes").offset().top
        $("html, body").animate({
            scrollTop: servicePlace
        })
    })

    $(".scroll-talents").click(function(){
        let servicePlace = $(".talents").offset().top
        $("html, body").animate({
            scrollTop: servicePlace
        })
    })

    $(".scroll-inventory").click(function(){
        let servicePlace = $(".inventory").offset().top
        $("html, body").animate({
            scrollTop: servicePlace
        })
    })

    $(".scroll-biography").click(function(){
        let servicePlace = $(".biography").offset().top
        $("html, body").animate({
            scrollTop: servicePlace
        })
    })

    $(".scroll-spells").click(function(){
        let servicePlace = $(".spells").offset().top
        $("html, body").animate({
            scrollTop: servicePlace
        })
    })
})