{
  /* <script>
//   const scroller = new LocomotiveScroll({
//   el: document.querySelector('main'),
//   smooth: true,
//   smoothMobile: false
// });
// scroll.destroy();
// document.addEventListener("DOMContentLoaded", function(event) { 
//     scroller.init();
// });
</script>
    <script>

$(".hero .sliderItem").each(function () {
  const colorThief = new ColorThief();
  const img = document.querySelector(".heroImg");

  var themeColor = colorThief.getColor(img);
  var red = themeColor[0];
  var green = themeColor[1];
  var blue = themeColor[2];

  // console.log("color", themeColor);



  // Make sure image is finished loading
  if (img.complete) {
    // console.log(colorThief.getColor(img));
  $(".sliderItem").style.backgroundColor = "rgb(" + red + "," + green + "," + blue + ")";


  } else {
    image.addEventListener("load", function () {
      colorThief.getColor(img);
      $(".bgColor").css("background-color", colorThief.getColor(img));
      console.log(colorThief.getColor(img));
    });
  }
});

    </script>
 */
}
