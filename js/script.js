$(document).ready( function () {
  //Handeling the "area"s black border default behavior. if you wish to have a
  //better understanding on the areas distributions and shapes, i recommend you
  //to comment this
  $('area').focus(function () {
    $(this).blur();
  });
  //remove the default "outline" on seconds clicks (the blue line that btn
  //buttons retain. It stills mantaining the clicks on first click when the
  //image is collapse thought
  var clickCount = 0;
  $('.btn').click(function() {
    if ($('head').children('style').length < 1 && clickCount % 2 != 0) {
      var rule = '.btn:focus {outline: none; box-shadow: none;}';
      var style = document.createElement('style');
      style.type = 'text/css';
      style.innerHTML = rule;
      setTimeout(function() {
        $('head').append(style);
        clickCount ++;
      }, 90);
    }
    else {
      $('head').children('style').remove();
      clickCount++;
    }
  });
  //on hover apply the new image->and then restore the default one
  var position = 0;
  function onHoverChangeImage(elementId, assnImg) {
    //unimplemented css code. It supposed to add this piece of code so that the
    //popup fade. but it doesn't occure at the right time

    // var rule = '@-webkit-keyframes fadeIn {from{opacity: 1;}to{opacity: 0;}}'+
    // '@keyframes fadeIn {from{opacity: 1;}to{opacity: 0;}}';
    // var style = document.createElement('style');
    // style.type = 'text/css';
    // style.innerHTML = rule;
    // style.setAttribute('id', 'fade');
    $(elementId).hover(function () {
      $('#fade').remove();
      document.getElementById('pcImg').src=assnImg;
      //each time you hover an element, the text the popup displays chenge in
      //relation to the current element (this is achive by getting the 'alt'
      //attribute)
      var pop = document.getElementById('topopup');
      pop.innerHTML = $(this).attr('alt');
      $('#topopup').toggleClass('show');
    }, function () {
      document.getElementById('pcImg').src='images/base.png';
      //i implement the $('head').append(style); in here with a "setTimeout" but
      //it ommit it
      $('#topopup').removeClass('show');
    });
  }
  //the main reason to build the function in first place lol. Would probably be
  //one hundred times more lines
  onHoverChangeImage('#processor', 'images/FocusProcessor.png');
  onHoverChangeImage('#case', 'images/FocusCase.png');
  onHoverChangeImage('#ssd', 'images/FocusSSD.png');
  onHoverChangeImage('#mobo', 'images/moboFocus.png');
  onHoverChangeImage('#ram', 'images/FocusRam.png');
  onHoverChangeImage('#fan1', 'images/FocusFan.png');
  onHoverChangeImage('#fan2', 'images/FocusFan.png');
  onHoverChangeImage('#fan3', 'images/FocusFan.png');
  onHoverChangeImage('#fan4', 'images/FocusFan.png');
  onHoverChangeImage('#radiator', 'images/FocusCooler.png');
  onHoverChangeImage('#radiator2', 'images/FocusCooler.png');
  onHoverChangeImage('#cooler', 'images/FocusCooler.png');
  onHoverChangeImage('#gpu', 'images/FocusGpu.png');
  onHoverChangeImage('#psu', 'images/FocusPsu.png');
});
