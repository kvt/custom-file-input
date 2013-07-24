(function($) {
  /*
    ======== A Handy Little QUnit Reference ========
    http://api.qunitjs.com/

    Test methods:
      module(name, {[setup][ ,teardown]})
      test(name, callback)
      expect(numberOfAssertions)
      stop(increment)
      start(decrement)
    Test assertions:
      ok(value, [message])
      equal(actual, expected, [message])
      notEqual(actual, expected, [message])
      deepEqual(actual, expected, [message])
      notDeepEqual(actual, expected, [message])
      strictEqual(actual, expected, [message])
      notStrictEqual(actual, expected, [message])
      throws(block, [expected], [message])
  */

  module('Custome HTML File Input', {
    // This will run before each test in this module.
    setup: function() {
      this.elems = $('#qunit-fixture').children();
      this.elem  = this.elems.last();
    }
  });

  test('is chainable', function() {
    expect(1);
    // Not a bad test to run on collection methods.
    strictEqual(this.elems.customHtmlFileInput(), this.elems, 'should be chainable');
  });

  test('button left', function() {
    expect(1);
    var button = this.elem.customHtmlFileInput({
      buttonDirection: 'left'
    });
    strictEqual(button.next().prop('tagName').toLowerCase(), 'button', 'button is left side');
  });

  test('input left', function() {
    expect(1);
    var elem = this.elem.customHtmlFileInput({
      buttonDirection: 'right'
    });
    strictEqual(elem.next().prop('tagName').toLowerCase(), 'input', 'input is left side');
  });

  test('default tests', function() {
    //expect(7);
    var elem    = this.elem.customHtmlFileInput();
    var input   = elem.parent().find('input').not(elem);
    var button  = elem.parent().find('button').not(elem);


/*buttonAttrs, textBoxAttrs, buttonText, inputClass, buttonClass, buttonDirection, fileInputAttrs, parentElementAttrs */
    strictEqual(elem.next().prop('tagName').toLowerCase(), 'input', 'input is left side');
    strictEqual(elem.parent().prop('tagName').toLowerCase(), 'span', 'parent tag is not span');
    strictEqual(elem.next().next().prop('tagName').toLowerCase(), 'button', 'button is right side');
    strictEqual(input.prop('class'), 'customFileInput-textbox', 'input class is not customFileInput-textbox');
    strictEqual(button.prop('class'), 'customFileInput-button', 'button class is not customFileInput-button');
    strictEqual(button.text(), 'Browse', 'Button label is not Browse');

  });

  test('custom class', function() {
    //expect(7);
    var elem    = this.elem.customHtmlFileInput({
      inputClass: 'input1 input2',
      buttonClass: 'button1 button2'
    });
    var input   = elem.parent().find('input').not(elem);
    var button  = elem.parent().find('button').not(elem);


/*buttonAttrs, textBoxAttrs, buttonText, inputClass, buttonClass, buttonDirection, fileInputAttrs, parentElementAttrs */
    strictEqual(elem.next().prop('tagName').toLowerCase(), 'input', 'input is left side');
    strictEqual(elem.parent().prop('tagName').toLowerCase(), 'span', 'parent tag is not span');
    strictEqual(elem.next().next().prop('tagName').toLowerCase(), 'button', 'button is right side');
    strictEqual(input.prop('class'), 'input1 input2', 'input class is not customFileInput-textbox');
    strictEqual(button.prop('class'), 'button1 button2', 'button class is not customFileInput-button');
    strictEqual(button.text(), 'Browse', 'Button label is not Browse');

  });
 
  test('Button Text', function() {
    //expect(7);
    var elem    = this.elem.customHtmlFileInput({
      inputClass: 'input1 input2',
      buttonClass: 'button1 button2',
      buttonText: 'Upload'
    });
    var input   = elem.parent().find('input').not(elem);
    var button  = elem.parent().find('button').not(elem);


/*buttonAttrs, textBoxAttrs, buttonText, inputClass, buttonClass, buttonDirection, fileInputAttrs, parentElementAttrs */
    strictEqual(elem.next().prop('tagName').toLowerCase(), 'input', 'input is left side');
    strictEqual(elem.parent().prop('tagName').toLowerCase(), 'span', 'parent tag is not span');
    strictEqual(elem.next().next().prop('tagName').toLowerCase(), 'button', 'button is right side');
    strictEqual(input.prop('class'), 'input1 input2', 'input class is not customFileInput-textbox');
    strictEqual(button.prop('class'), 'button1 button2', 'button class is not customFileInput-button');
    strictEqual(button.text(), 'Upload', 'Button label is not Upload');

  });

  test('Button Attributes', function() {
    //expect(7);
    var elem    = this.elem.customHtmlFileInput({
      inputClass: 'input1 input2',
      buttonClass: 'button1 button2',
      buttonText: 'Upload',
      buttonAttrs: {
        name: 'button',
        id: 'dummyButton'
      }
    });
    var input   = elem.parent().find('input').not(elem);
    var button  = elem.parent().find('button').not(elem);


/*buttonAttrs, textBoxAttrs, buttonText, inputClass, buttonClass, buttonDirection, fileInputAttrs, parentElementAttrs */
    strictEqual(elem.next().prop('tagName').toLowerCase(), 'input', 'input is left side');
    strictEqual(elem.parent().prop('tagName').toLowerCase(), 'span', 'parent tag is not span');
    strictEqual(elem.next().next().prop('tagName').toLowerCase(), 'button', 'button is right side');
    strictEqual(input.prop('class'), 'input1 input2', 'input class is not customFileInput-textbox');
    strictEqual(button.prop('class'), 'button1 button2', 'button class is not customFileInput-button');
    strictEqual(button.text(), 'Upload', 'Button label is not Upload');
    strictEqual(button.attr('name'), 'button', 'Button name is not button');
    strictEqual(button.attr('id'), 'dummyButton', 'Button id is not dummyButton');

  });
 
  test('Input Attributes', function() {
    //expect(7);
    var elem    = this.elem.customHtmlFileInput({
      inputClass: 'input1 input2',
      buttonClass: 'button1 button2',
      buttonText: 'Upload',
      buttonAttrs: {
        name: 'button',
        id: 'dynamicButton'
      },
      textBoxAttrs: {
        name: 'input',
        id: 'dynamicInput'
      }
    });
    var input   = elem.parent().find('input').not(elem);
    var button  = elem.parent().find('button').not(elem);


/*buttonAttrs, textBoxAttrs, buttonText, inputClass, buttonClass, buttonDirection, fileInputAttrs, parentElementAttrs */
    strictEqual(elem.next().prop('tagName').toLowerCase(), 'input', 'input is left side');
    strictEqual(elem.parent().prop('tagName').toLowerCase(), 'span', 'parent tag is not span');
    strictEqual(elem.next().next().prop('tagName').toLowerCase(), 'button', 'button is right side');
    strictEqual(input.prop('class'), 'input1 input2', 'input class is not customFileInput-textbox');
    strictEqual(button.prop('class'), 'button1 button2', 'button class is not customFileInput-button');
    strictEqual(button.text(), 'Upload', 'Button label is not Upload');
    strictEqual(button.attr('name'), 'button', 'Button name is not button');
    strictEqual(button.attr('id'), 'dynamicButton', 'Button id is not dynamicButton');
    strictEqual(input.attr('name'), 'input', 'Input name is not input');
    strictEqual(input.attr('id'), 'dynamicInput', 'Input id is not dynamicInput');

  });

  test('set file input value to text box', function() {
    //expect(7);
    var elem    = this.elem.customHtmlFileInput();
    var input   = elem.parent().find('input').not(elem);
    //var button  = elem.parent().find('button').not(elem);
    elem.val('/var');
    elem.trigger('change');
    strictEqual('/var', input.val(), 'file input value is not assigned to dynamic input');

  });
 
}(jQuery));
