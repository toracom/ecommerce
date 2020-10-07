$('.owl-banner').owlCarousel({
    loop: true,
    nav: true,
    navText: [
        "<i class='fas fa-chevron-left owl_nav'></i>",
        "<i class='fas fa-chevron-right owl_nav'></i>"
    ],
    items: 1,
})

$('.owl-product').owlCarousel({
    margin: 10,
    nav: true,
    dots: false,
    navText: [
        "<i class='fas fa-chevron-left owl_pd_nav'></i>",
        "<i class='fas fa-chevron-right owl_pd_nav'></i>"
    ],
    responsiveClass:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        1000:{
            items:3
        }
    }
})