'use strict';

(function ($) {
  $.fn.MyForm = function (options) {
    this.settings = $.extend({
        'el': $(this) || [],
        form: []
    }, options);

    var el = this.settings.el;
    var private = {};

    Object.assign(this, {});

    Object.assign(private, {
      'generate': function (settings) {
        el.append('<form></form>');
        settings.form.forEach(function(input) {
          console.log($(this));
        });
      },
      'input': function (input) {
        $('<input/>', {
          value: input.value || '',
          placeholder: input.placeholder || ''
        });
      }
      'label': function (label) {
        $('<label/>', {
          value: input.value || '',
          placeholder: input.placeholder || ''
        });
      }
    });

    // Initialise the plugin
    private.generate(this.settings);

    return this;
  };
}(jQuery));
