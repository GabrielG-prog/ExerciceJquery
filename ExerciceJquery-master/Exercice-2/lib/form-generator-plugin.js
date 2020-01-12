'use strict';

(function ($) {
    $.fn.MySearch = function (options) {

        this.settings = $.extend({

            'el': $(this) || [],
            search: [],
        }, options);

        var el = this.settings.el;
        var prive = {};

        Object.assign(this, {});

        Object.assign(prive, {

            'generate': function (settings) {

                var form = $('<form></form>');

                el.append(form);

                settings.search.forEach(function (value) {

                    if (value.type == 'text') {

                        var elInput = $('<input></input>');

                        $(elInput).attr('type', value.type);
                        $(elInput).attr('id', value.id);
                        $(elInput).attr('placeholder', value.placeholder);

                        form.append(elInput)

                    }

                    if (value.type == 'submit') {

                        var elSubmit = $('<input/>', {
                            type: value.type,
                            id: value.id,
                            value: value.value

                        });

                        form.append(elSubmit);
                    }

                });

                function pokeSubmit() {
                    var param = document.getElementById("pokeInput").value;
                    var pokeURL = "http://pokeapi.co/api/v1/pokemon/" + param;

                    $.getJSON(pokeURL, function (data) {
                        console.log(data);
                        console.log(JSON.stringify(data, null, "  "));

                        var pokeID = data.national_id;
                        var pokeName = data.name;
                        var pokeType1 = data.types[0].name;
                        if (data.types.length == 2) {
                            var pokeType2 = data.types[1].name;
                        } else var pokeType2 = null;

                        console.log("Number: ", pokeID);
                        console.log("Name: ", pokeName);
                        console.log("Type 1: ", pokeType1);
                        console.log("Type 2: ", pokeType2);

                    });
                }

                /*el.autocomplete({
                    source: function (requete, reponse) { 
                        
                        $.ajax({
                            url: 'http://pokeapi.co/api/v1/pokemon/', 
                            dataType: 'json', 
                            data: {
                                name_startsWith: $('engine').val(),  
                                maxRows: 15
                            },

                            success: function (donnee) {
                                reponse($.map(donnee.geonames, function (objet) {
                                    return objet.name + ', ' + objet.countryName; // on retourne cette forme de suggestion
                                }));
                            }
                        });
                    }
                });*/
            }

        });

        // Initialise the plugin
        prive.generate(this.settings);

        return this;
    };

}(jQuery));
