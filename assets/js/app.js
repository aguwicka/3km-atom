document.addEventListener('DOMContentLoaded', function () {
  const phoneInput = document.getElementById('phone-input');

  const maskOptions = {
    mask: '+{7}(000)000-00-00'
  };
  const mask = IMask(phoneInput, maskOptions);
});

$(document).ready(function () {

    $('.menu_btn').click(function() {
      $('.header_menus_mob').toggleClass('active');
    });



  $('.owl-carousel').owlCarousel({
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
  })

});
