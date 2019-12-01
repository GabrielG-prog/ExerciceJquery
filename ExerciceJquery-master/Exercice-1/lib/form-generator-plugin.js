'use strict';

(function ($) {
    $.fn.MyForm = function (options) {
        this.settings = $.extend({
            'el': $(this) || [],
            form: [],
        }, options);

        var el = this.settings.el;
        var prive = {};

        Object.assign(this, {});

        Object.assign(prive, {

            'generate': function (settings) {
                var elButton = $('<button>Valider</button>');
                var form1 = el.append('<form></form>');
                settings.form.forEach(function (value) {
                    if (value.type == 'text') {
                        var elDiv = $('<div></div');
                        var elInput = $('<input/>', {
                            text: value.text || '',
                            required: value.required || '',
                            options: {
                                id: value.options.id || '',
                                placeholder: value.options.placeholder || '',
                                regex: value.options.regex || '',
                                error: value.options.error || ''
                            }
                        });

                        var elRegex = new RegExp(value.options.regex);
                        var valueInput = $(elInput).val();

                        $(elButton).click(function () {

                            if (elRegex.test(valueInput) && valueInput != '') {

                                $(elInput).css('background-color', 'green');

                            } else {

                                $(elInput).css('background-color', 'red');
                            }
                        });
                        $(elDiv).append(elInput);
                        $(form1).append(elDiv);
                    }

                });
                $(form1).append(elButton);
            }

        });

        // Initialise the plugin
        prive.generate(this.settings);

        return this;
    };
}(jQuery));
