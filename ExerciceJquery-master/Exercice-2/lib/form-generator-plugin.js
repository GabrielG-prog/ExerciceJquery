'use strict';

(function ($) {
    $.fn.MySearch = function (options) {

        this.settings = $.extend({

            'el': $(this) || [],
            search: [],
        }, options);

        var el = this.settings.el,
            prive = {};

        Object.assign(this, {});

        Object.assign(prive, {

            'generate': function (settings) {

                var elInput,
                    elSubmit,
                    listeInput,
                    form = $('<form></form>');

                el.append(form);

                settings.search.forEach(function (value) {

                    if (value.type == 'text') {

                        elInput = $('<input/>', {
                            type: value.type,
                            id: value.id,
                            placeholder: value.placeholder
                        });

                        form.append(elInput)

                    }

                    if (value.type == 'submit') {

                        elSubmit = $('<input/>', {
                            type: value.type,
                            id: value.id,
                            value: value.value

                        });

                        form.append(elSubmit);
                    }

                });

                settings.pokemon.forEach(function (poke) {

                    elSubmit.click(function (e) {

                        e.preventDefault();

                        if (elInput.val() != "") {

                            if (elInput.val() == poke.name || elInput.val() == poke.id || elInput.val() == poke.type) {

                                el.append('<div><h4>' + poke.name + '</h4><p>' + poke.type + '</p> <img src="' + poke.img + '" /></div>');
                            }

                        } else {

                            alert("Veuillez inserer un pokemon");
                        }
                    });

                    listeInput = [
                    "bulbizarre",
                    "salamèche",
                    "dracaufeu"
                    ];

                });

                elInput.autocomplete({
                    source: listeInput
                });

            }

        });

        // Initialise the plugin
        prive.generate(this.settings);

        return this;
    };

}(jQuery));
