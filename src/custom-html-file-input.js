/*
 * custom-html-file-input
 * 
 *
 * Copyright (c) 2013 Ketan Tada
 * Licensed under the MIT license.
 */

(function ($) {

  // Collection method.
  $.fn.awesome = function (options) {
    
    var defaults = $.extend({
      buttonAttrs: {},
      textBoxAttrs: {},
      buttonText: 'Browse',
      inputClass: 'customFileInput-textbox',
      buttonClass: 'customFileInput-button',
      fileInputAttrs: {
        opacity: 0,
        height: "100px",
        width: "50px",
        top: 0,
        left: 0,
        position: 'absolute'
      },
      parentElementAttrs: {
        overflow: 'hidden',
        border: '1px solid red',
        display: 'inline-block',
        position: 'relative'
      }
    }, options);


    return this.each(function () {
      var that = this;
      $(this).css(defaults.fileInputAttrs)
      .attr('size',1)
      
      .wrap('<span id="parent"/>')
      
      .parent()

      
      .mousemove(function(e) {
       //console.log(e.currentTarget);
       // if(e.currentTarget == this) {
        $(that).css({
          left: e.pageX - 50,
          top : e.pageY - 25
        });
      //}
      })
      
      .append($('<input />').css(defaults.textBoxAttrs).addClass(defaults.inputClass))
      
      .append($('<button />').css(defaults.buttonAttrs).addClass(defaults.buttonClass).html(defaults.buttonText))
      
      .css(defaults.parentElementAttrs);


      
      /*var buttonLeft  = $(this).siblings('button').position().left;
      var buttonWidth = parseInt($(this).siblings('button').css('width')) 
      var inputLeft        = $(this).siblings('input').position().left;
      console.log(inputLeft, buttonLeft, buttonWidth);

     // $('#parent').css('width', (buttonLeft + buttonWidth ) - inputLeft + 25);
*/
    });
  };
}(jQuery));
