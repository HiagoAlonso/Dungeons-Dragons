$("document").ready(function() {



    //     M e n u  S l i d e r

    $(".flip").click(function () {
        $('#menu').slideToggle('slow')
    })

    $(".menu-mobile-ico").click(function () {
        $(".menu-mobile-offset").animate({left: '0'});
        $(".menubar").animate({left: '0'});
    })

    $(".menu-mobile-offset-close").click(function () {
        $(".menu-mobile-offset").animate({left: '-65vw'});
        $(".menubar").animate({left: '-65vw'});
    })

    //     D r o p d o w n

    $(".dropdown-books").click(function () {
        $('.dropdown-books-menu').slideToggle('slow')
    })
    $("header").mouseleave(function () {
        $('.dropdown-books-menu').slideUp('slow')
    })

    //     M e n u  S c r o l l

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
    
    //     P a g i n a t i o n

    let defaultPage = 0
    $("#actual-page").html(defaultPage)
    
    function attpage() {
        $("#actual-page").html(defaultPage)
        let servicePlace = $(`.${defaultPage}`).offset().top
        $("html, body").animate({
        scrollTop: servicePlace
        })
    }

    $("#next-page").click(function() {
        if (defaultPage < 5) {
            $(`.${defaultPage}`).hide()
            defaultPage += 1
            $(`.${defaultPage}`).show()
            attpage()
        }
    })

    $("#previous-page").click(function() {
        if (defaultPage > 0) {
            $(`.${defaultPage}`).hide()
            defaultPage -= 1
            $(`.${defaultPage}`).show()
            attpage()
        }
    })
})