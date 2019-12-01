'use strict';

(function ($) {
    $.fn.MyForm = function (options) {
        this.settings = $.extend({
            'el': $(this) || [],
            form: []
        }, options);
        
        var el = this.settings.el;
        var prive = {};

        Object.assign(this, {});

        Object.assign(prive, {
            'generate': function (settings) {
                //create form
                var form1 = $('<form></form>');
                el.append(form1);
                settings.form.forEach(function (value) {

                    if (value.type == 'text') {

                        var elInput = $('<input/>', {
                            text: value.text || '',
                            required: value.required || '',
                            options: {
                                id: value.options.id || '',
                                placeholder: value.options.id || '',
                                regex: value.options.regex|| '',
                                error: value.options.error|| ''
                            }
                        });

                    }
                    var elButton = $('<button>Valider</button>');
                    var elRegex = value.options.regex;
                    
                    elButton.on("click", function () {

                        if (elRegex.test(elInput.val())) {

                            $(elInput).css('color', 'green');

                        } else {
            
                            $(elInput).css('color', 'red');
                        }
                    })
                    $(form1).append(elInput);
                    $(form1).append(elButton);

                })
            },

            'init': function () {
               
                prive.generate();

                return this;
                
            }.bind(this)
        });
        
        // Initialise the plugin
        
        prive.init();
        
        return this;
    };
    
}(jQuery));
