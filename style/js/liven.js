$(document).ready(function () {
    $('.sliderAtributos').slick({
        dots: false,
        infinite: true,
        adaptiveHeight: true,
        arrows: true,
        prevArrow: "<button class='slick-prev slick-arrow'><img class='img-fluid' src='https://forshcommerce.blob.core.windows.net/liven/novo-layout/1x/setas1.png'></button>",
        nextArrow: "<button class='slick-next slick-arrow'><img class='img-fluid' src='https://forshcommerce.blob.core.windows.net/liven/novo-layout/1x/setas2.png'></button>",
        speed: 300,
        slidesToShow: 4,
        slidesToScroll: 4,
        autoplay: true,
        autoplaySpeed: 5000,
        responsive: [{
            breakpoint: 992,
            settings: {
                slidesToScroll: 2,
                slidesToShow: 2,
            }
        }]
    });
});

$(document).ready(function () {
    $('.sliderMarca').slick({
        dots: false,
        infinite: true,
        adaptiveHeight: true,
        arrows: true,
        prevArrow: "<button class='slick-prev slick-arrow'><img class='img-fluid' src='https://forshcommerce.blob.core.windows.net/liven/novo-layout/1x/setas1.png'></button>",
        nextArrow: "<button class='slick-next slick-arrow'><img class='img-fluid' src='https://forshcommerce.blob.core.windows.net/liven/novo-layout/1x/setas2.png'></button>",
        speed: 300,
        slidesToShow: 8,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
        responsive: [{
            breakpoint: 1200,
            settings: {
                slidesToShow: 5,
                slidesToScroll: 5,
            }
        }, {
            breakpoint: 992,
            settings: {
                slidesToShow: 4,
                slidesToScroll: 4,
            }
        },{
            breakpoint: 650,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
            }
        },{
            breakpoint: 425,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
            }
        }]
    });
});

$(document).ready(function () {
    $('.sliderCatalogo').slick({
        dots: false,
        infinite: false,
        arrows: true,
        prevArrow: "<button class='slick-prev slick-arrow'><img class='img-fluid' src='https://forshcommerce.blob.core.windows.net/liven/novo-layout/1x/seta-catalogo-de-inspiracoes-1.png'></button>",
        nextArrow: "<button class='slick-next slick-arrow'><img class='img-fluid' src='https://forshcommerce.blob.core.windows.net/liven/novo-layout/1x/seta-catalogo-de-inspiracoes-2.png'></button>",
        speed: 300,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
    });
});

$(document).ready(function () {
    $('.slidePrincipal').slick({
        dots: true,
        infinite: false,
        autoplay: true,
        autoplaySpeed: 5000,
        arrows: false,
        speed: 300,
        slidesToShow: 1,
        slidesToScroll: 1,
    });
});

$(document).ready(function () {
    $('.sliderEscolhaLinha').slick({
        dots: false,
        infinite: true,
        adaptiveHeight: true,
        arrows: true,
        prevArrow: "<button class='slick-prev slick-arrow'><img class='img-fluid' src='https://forshcommerce.blob.core.windows.net/liven/novo-layout/1x/setas1.png'></button>",
        nextArrow: "<button class='slick-next slick-arrow'><img class='img-fluid' src='https://forshcommerce.blob.core.windows.net/liven/novo-layout/1x/setas2.png'></button>",
        speed: 300,
        slidesToShow: 6,
        slidesToScroll: 2,
        autoplay: true,
        autoplaySpeed: 5000,
        responsive: [{
            breakpoint: 992,
            settings: {
                slidesToScroll: 3,
                slidesToShow: 3,
            }
        }]
    });
});

$(document).ready(function () {
    $('.vocePrecisa').slick({
        dots: false,
        infinite: true,
        adaptiveHeight: true,
        arrows: true,
        prevArrow: "<button class='slick-prev slick-arrow'><img class='img-fluid' src='https://forshcommerce.blob.core.windows.net/liven/novo-layout/1x/setas1.png'></button>",
        nextArrow: "<button class='slick-next slick-arrow'><img class='img-fluid' src='https://forshcommerce.blob.core.windows.net/liven/novo-layout/1x/setas2.png'></button>",
        speed: 300,
        slidesToShow: 4,
        slidesToScroll: 4,
        autoplay: true,
        autoplaySpeed: 5000,
        responsive: [{
            breakpoint: 992,
            settings: {
                slidesToScroll: 2,
                slidesToShow: 2,
            }
        }]
    });
});

