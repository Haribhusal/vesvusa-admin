$(document).ready(function () {
  // Heroslider Slider Starts
  var heroSlider = $(".hero .owl-carousel");
  heroSlider.owlCarousel({
    loop: true,
    margin: 0,
    nav: false,
    items: 1,
    dots: false,
    smartSpeed: 2000,
    autoplayHoverPause: true,
    smooth: false,
    autoplay: true,
    autoplaySpeed: 2000,
  });
  $(".nextHero").click(function () {
    heroSlider.trigger("next.owl.carousel");
  });
  $(".prevHero").click(function () {
    heroSlider.trigger("prev.owl.carousel", [300]);
  });

  // Heroslider Slider ends

  // newsslider Slider Starts

  var newsSlider = $(".news .owl-carousel");
  newsSlider.owlCarousel({
    loop: true,
    margin: 30,
    autoplaySpeed: 6000,

    nav: false,
    responsiveClass: true,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 1,
      },
      1000: {
        items: 2,
      },
    },
  });
  $(".customNextBtn").click(function () {
    newsSlider.trigger("next.owl.carousel");
  });
  $(".customPrevBtn").click(function () {
    newsSlider.trigger("prev.owl.carousel", [300]);
  });

  // newsslider Slider ends

  // looksAndThemeSlider Slider Starts

  var looksAndThemeSlider = $(".looksAndTheme .owl-carousel");

  looksAndThemeSlider.owlCarousel({
    loop: true,
    margin: 30,
    dots: false,
    autoplaySpeed: 6000,

    nav: false,
    navText: [
      "<i class='las la-angle-left'></i>",
      "<i class='las la-angle-right'></i>",
    ],

    responsiveClass: true,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 2,
      },
      1000: {
        items: 4,
      },
    },
  });

  $(".customNextBtn").click(function () {
    looksAndThemeSlider.trigger("next.owl.carousel");
  });
  $(".customPrevBtn").click(function () {
    looksAndThemeSlider.trigger("prev.owl.carousel", [300]);
  });

  // looksAndThemeSlider Slider ends

  // shinyCollection Slider Starts

  var shinyCollectionSlider = $(".shinyCollection .owl-carousel");

  shinyCollectionSlider.owlCarousel({
    loop: true,
    margin: 30,
    dots: false,
    nav: false,
    autoplaySpeed: 6000,

    navText: [
      "<i class='las la-angle-left'></i>",
      "<i class='las la-angle-right'></i>",
    ],

    responsiveClass: true,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 2,
      },
      1000: {
        items: 4,
      },
    },
  });

  $(".gotoright").click(function () {
    shinyCollectionSlider.trigger("next.owl.carousel");
  });
  $(".gotoleft").click(function () {
    shinyCollectionSlider.trigger("prev.owl.carousel", [300]);
  });

  // looksAndThemeSlider Slider ends

  // comfort slider Starts

  var comfortSlider = $(".comfort .owl-carousel");

  comfortSlider.owlCarousel({
    loop: true,
    margin: 30,
    dots: false,
    autoPlay: false,
    nav: false,
    autoplaySpeed: 6000,

    navText: [
      "<i class='las la-angle-left'></i>",
      "<i class='las la-angle-right'></i>",
    ],

    responsiveClass: true,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 2,
      },
      1000: {
        items: 4,
      },
    },
  });

  $(".customNextBtn").click(function () {
    comfortSlider.trigger("next.owl.carousel");
  });
  $(".customPrevBtn").click(function () {
    comfortSlider.trigger("prev.owl.carousel", [300]);
  });

  // comfortSlider Slider ends

  $(document).ready(function () {
    var sliders = document.querySelectorAll(" .sliderItem");
    sliders.forEach((slider) => {
      const colorThief = new ColorThief();
      const img = slider.querySelector(".heroImg");
      console.log("image", img);
      var themeColor = colorThief.getColor(img);
      var red = themeColor[0];
      var green = themeColor[1];
      var blue = themeColor[2];

      slider.style.backgroundColor = `rgb(${red},${green},${blue})`;
    });
  });

  $(document).ready(function () {
    var lookspage = document.querySelector(" .lookspage");
    const colorThief = new ColorThief();
    const img = lookspage.querySelector(".pickColor");
    console.log("img", img);
    var themeColor = colorThief.getColor(img);
    var red = themeColor[0];
    var green = themeColor[1];
    var blue = themeColor[2];
    lookspage.findClass(
      ".cardwrapper"
    ).style.backgroundColor = `rgb(${red},${green},${blue})`;
  });

  // pickColor;

  $(document).ready(function () {
    var thumbnails = document.querySelectorAll(".xzoom-thumbs .xzoom-gallery");

    thumbnails.forEach((thumbnail) => {
      thumbnail.find(".xzoom-gallery").click(function () {
        alert("hello");
        $(".mid .bgColor").style.backgroundColor = `red`;
      });

      const colorThief = new ColorThief();
      const img = slider.querySelector(".xzoom-gallery");
      console.log("image", img);
      var themeColor = colorThief.getColor(img);
      var red = themeColor[0];
      var green = themeColor[1];
      var blue = themeColor[2];

      $(".mid .bgColor").style.backgroundColor = `rgb(${red},${green},${blue})`;
    });
  });

  $(document).ready(function () {
    $(".featuredslider .owl-carousel").owlCarousel({
      loop: true,
      items: 1,
      slideSpeed: 2000,
      autoplay: false,
      thumbs: true,
      thumbImage: true,
      thumbContainerClass: "owl-thumbs",
      thumbItemClass: "owl-thumb-item",
    });
  });
});
