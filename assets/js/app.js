document.addEventListener('DOMContentLoaded', function () {
  const phoneInput = document.getElementById('phone-input');

  const maskOptions = {
    mask: '+{7}(000)000-00-00'
  };
  const mask = IMask(phoneInput, maskOptions);
});

$(document).ready(function () {

  $('.menu_btn').click(function () {
    $('.header_menus_mob').toggleClass('active');
  });



  $('.main_slider').owlCarousel({
    loop: true,
    dots: false,
    nav: true,
    navText: [
      "<div class='custom-prev'><svg xmlns='http://www.w3.org/2000/svg' width='29' height='52' viewBox='0 0 29 52' fill='none'><path d='M27 2L4 26.4211L27 50' stroke='#E62900' stroke-width='5'/></svg></div>",
      "<div class='custom-next'><svg xmlns='http://www.w3.org/2000/svg' width='29' height='52' viewBox='0 0 29 52' fill='none'><path d='M27 2L4 26.4211L27 50' stroke='#E62900' stroke-width='5'/></svg></div>"
    ],
    responsive: {
      0: {
        items: 1,
        margin: 40,
      },
      420: {
        items: 2,
        margin: 40,
      },
      720: {
        items: 2,
        margin: 40,
      },
      1024: {
        items: 3,
        margin: 40,
      },

    }
  });

  $('.cards-owl').owlCarousel({
    loop: true,
    dots: false,
    nav: true,
    items: 1,
    margin: 40,
    navText: [
      "<div class='custom-prev'><svg width=\"13\" height=\"12\" viewBox=\"0 0 13 12\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M1 5.25C0.585786 5.25 0.25 5.58579 0.25 6C0.25 6.41421 0.585786 6.75 1 6.75V5.25ZM12.5303 6.53033C12.8232 6.23744 12.8232 5.76256 12.5303 5.46967L7.75736 0.696699C7.46447 0.403806 6.98959 0.403806 6.6967 0.696699C6.40381 0.989593 6.40381 1.46447 6.6967 1.75736L10.9393 6L6.6967 10.2426C6.40381 10.5355 6.40381 11.0104 6.6967 11.3033C6.98959 11.5962 7.46447 11.5962 7.75736 11.3033L12.5303 6.53033ZM1 6.75H12V5.25H1V6.75Z\" fill=\"#E62900\"/></svg></div>",
      "<div class='custom-prev'><svg width=\"13\" height=\"12\" viewBox=\"0 0 13 12\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M1 5.25C0.585786 5.25 0.25 5.58579 0.25 6C0.25 6.41421 0.585786 6.75 1 6.75V5.25ZM12.5303 6.53033C12.8232 6.23744 12.8232 5.76256 12.5303 5.46967L7.75736 0.696699C7.46447 0.403806 6.98959 0.403806 6.6967 0.696699C6.40381 0.989593 6.40381 1.46447 6.6967 1.75736L10.9393 6L6.6967 10.2426C6.40381 10.5355 6.40381 11.0104 6.6967 11.3033C6.98959 11.5962 7.46447 11.5962 7.75736 11.3033L12.5303 6.53033ZM1 6.75H12V5.25H1V6.75Z\" fill=\"#E62900\"/></svg></div>"
    ]
  });

});
