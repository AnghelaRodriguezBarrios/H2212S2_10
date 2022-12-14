$(function(){
    $('.center').slick({
        infinite:true,
        slidesToShow: 4, /*diapositivas para mostrar: 4*/
    slidesToScroll: 1, /*  diapositivas para desplazarse: 1*/
        arrows:false, /*  flechas:falso*/
        autoplay: true, /*reproducción automática: cierto*/
        autoplaySpeed: 3900, /*velocidad de reproducción automática: 3900,*/
        dots: false, /* reproducción automática: 3900*/
        centerModel:true, /*puntos: falso*/
        centerPadding:'60px', /*modelo central: verdadero*/
        responsive: [
            {
              breakpoint: 1024,  /*relleno central: '60px',receptivo:*/
              settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                infinite: true,
                dots: true
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
          ]
    });
});