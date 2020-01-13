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
                        
                    // creation d'une barre de recherche
                        elInput = $('<input/>', {
                            type: value.type,
                            id: value.id,
                            placeholder: value.placeholder
                        });

                        form.append(elInput)

                    }

                    if (value.type == 'submit') {
                        
                    // creation du bouton de validation
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
                        
                        // On affiche le pokemon que l'utilisateur à saisie sur la barre de recherche si il existe
                        if (elInput.val() != "") {

                            if (elInput.val() == poke.name || elInput.val() == poke.id || elInput.val() == poke.type || elInput.val() == poke.poid|| elInput.val() == poke.att|| elInput.val() == poke.vit|| elInput.val() == poke.pv|| elInput.val() == poke.def) {

                                el.append('<div><h4>' + poke.name + '</h4><p>' + poke.type + '</p><p>' + poke.poid + '</p><p>' + poke.att + '</p><p>' + poke.vit + '</p><p>' + poke.pv + '</p><p>' + poke.def + '</p> <img src="' + poke.img + '" /></div>');
                            }

                        } else {

                            alert("Veuillez inserer un pokemon");
                        }
                    });
                    
                    // Autocomplete
                    listeInput = [
                    "bulbizarre",
                    "salamèche",
                    "dracaufeu",
                    "feu",
                    "plante",
                    "eau"
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
