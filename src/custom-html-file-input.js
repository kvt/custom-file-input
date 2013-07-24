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
      buttonDirection: 'right',
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
      var $self = $(this);
      var $input  = $('<input type="text" />').attr(defaults.textBoxAttrs).addClass(defaults.inputClass);
      var $button = $('<button />').attr(defaults.buttonAttrs).addClass(defaults.buttonClass).html(defaults.buttonText);

      $self.css(defaults.fileInputAttrs)
      .attr('size',1)
      .wrap('<span />');

      var $parent = $self.parent();

      if(defaults.buttonDirection === 'right') {
        $parent.append($input, $button);
      } else {
        $parent.append($button, $input);
      }

      $parent
      .css(defaults.parentElementAttrs)
      .mousemove(function(e) {
         var parentOffset = $(this).offset(); 
         var relX = e.pageX - parentOffset.left;

         $self.css("left", (relX - 40));
      });

      $self.change(function() {
        $input.val($self.val().replace(/.*fakepath(\/|\\)/, ''));
      });

    });
  };
}(jQuery));
