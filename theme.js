
function myFunction() {

// find elements
  var backgroundColorWrapper = $(".bg-color-wrapper");
  var backgroundColor = $(document.body);
  var whiteText = $("h2, .dark-mode-text, h1, .ov-number");
  var boxColor = $(".sn-container");


// Adds Class
  backgroundColorWrapper.toggleClass("dark-mode-wrapper");
  backgroundColor.toggleClass("dark-mode-bg");
  whiteText.toggleClass("white-text");
  boxColor.toggleClass("box-color-dark");



}
