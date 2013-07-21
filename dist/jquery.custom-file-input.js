/*! custom-file-input - v0.9 - 2013-07-21
* https://github.com/kvt/custom-file-input
* Copyright (c) 2013 Ketan Tada; Licensed MIT */
/*! custom-html-file-input - v0.9 - 2013-07-21
* https://github.com/kvt/custom-html-file-input
* Copyright (c) 2013 Ketan Tada; Licensed MIT */
(function ($) {

  // Collection method.
  $.fn.customHtmlFileInput = function (options) {
    
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
        display: 'inline-block',
        position: 'relative'
      }
    }, options);


    return this.each(function () {
      var that = this;
      $(this).css(defaults.fileInputAttrs)
      .attr('size',1)
      .wrap('<span />')
      .parent()
      .append($('<input />').css(defaults.textBoxAttrs).addClass(defaults.inputClass))
      .append($('<button />').css(defaults.buttonAttrs).addClass(defaults.buttonClass).html(defaults.buttonText))
      .css(defaults.parentElementAttrs)
      .mousemove(function(e) {

       var parentOffset = $(this).offset(); 
       var relX = e.pageX - parentOffset.left;

       $(that).css("left", (relX - 40));
     });

      $(that).change(function() {
        $(that).next().val($(this).val());
      });

    });
  };
}(jQuery));
