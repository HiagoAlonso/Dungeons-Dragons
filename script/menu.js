$("document").ready(function() {

    //     M e n u

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
        if (defaultPage < 2) {
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