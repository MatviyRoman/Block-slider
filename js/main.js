$(function() {
  const slider = $("#slider");
  slider.slick({
    dots: true,
    infinite: false,
    autoplay: false,
    arrows: true,
    vertical: true,
    verticalSwiping: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: true,
    dotsClass: "myDotsPage",
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: true,
          slidesToShow: 1,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 480,
        slidesToShow: 1,
        slidesToScroll: 1,
        settings: {
          arrows: true
        }
      }
    ]
  });

  slider.on("wheel", function(e) {
    e.preventDefault();

    if (e.originalEvent.deltaY < 0) {
      $(this).slick("slickPrev");
    } else {
      $(this).slick("slickNext");
    }
  });

  $("#btnOpen").on("click", function() {
    $("#menu").slideToggle();
  });
});

// if (location.host !== "rogue-chefs.matviy.pp.ua") {
//   document.body.innerHTML = "";
// }
