'use strict';

(function ($) {
    $.fn.SearchEngine = function (options) {
        this.settings = $.extend({
            'el': $(this) || [],
            firefox: [],
        }, options);

        var el = this.settings.el;
        var prive = {};

        Object.assign(this, {});

        Object.assign(prive, {
            'generate': function (settings) {
                settings.firefox.forEach(function (value) {
                    if (value.type == 'text') {
                        var input = $('<input></input>');
                        $(input).attr('type', value.type);
                        $(input).attr('name', value.name);
                        $(input).attr('class', value.class);
                        $(input).attr('id', value.id);
                        var elButon = $('<button>Valider</button>');
                        $(el).append(input);
                        $(el).append(elButon);

                        $(elButon).click(function () {
                            //var valeurRecherche = $(input).val();
                            this.rechercher(value);
                        });
                    }
                });
            },

            'rechercher': function (chaine) {
                var trouved = 0;

                chaine = chaine.toUpperCase();
                var data = new Array();
                prive.store(data);

                var elHtml = $("<html><head><title>Résultats de la recherche</title></head>");
                var elBody = $("<body class='article'><div class='alone'>");
                var elH1 = $("<h1>Résultats de la recherche</h1>");

                for (var i = 0; i < data.length; i++) {
                    if ((data[i].titre.toUpperCase().indexOf(chaine) != -1) ||
                        (data[i].keyword.toUpperCase().indexOf(chaine) != -1) ||
                        (data[i].url.toUpperCase().indexOf(chaine) != -1)) {
                        data[i].afficher();
                        trouved++;
                    }
                }

                if (!trouved) {
                    var elPAucune = $("<p style='color: red; font-weight: bold;'>Aucune réponse n'a été trouvée pour ce mot clé dans les pages informatiques de ce site.</p>");
                }

                var elPreponseTrouve = $("<p style='color: blue; font-weight: bold;'>" + trouved + " réponse(s) trouvée(s) pour le mot-clé " + chaine);
                var elPForm = $("</p><hr><form><input type='button' value='Nouvelle recherche ?' OnClick='window.location=\"recherche.html\"'></form></div>");
                $("</body></html>");
                document.close();
            },

            'store': function (data) {
                data[0] = prive.Stock("chat",
                    "chat",
                    "https://www.google.com/search?q=chat&oq=chat&aqs=chrome..69i57j69i59l3.718j0j7&sourceid=chrome&ie=UTF-8");
                data[1] = prive.Stock("chien",
                    "chien",
                    "https://www.google.com/search?ei=-w_kXdXnCdPrxgOQ0KCYCA&q=chien&oq=chien&gs_l=psy-ab.3..0i67l9j0.13087.14187..14561...0.2..0.70.306.5......0....1..gws-wiz.......0i71j0i131i67j0i131.uRmDGLNVx3M&ved=0ahUKEwiV0eimk5XmAhXTtXEKHRAoCIMQ4dUDCAs&uact=5");
                data[2] = prive.Stock("souris",
                    "souris",
                    "https://www.google.com/search?ei=CxDkXZWIH9LbgweswojgDQ&q=souris&oq=souris&gs_l=psy-ab.3..0i67j0i131l3j0l2j0i131j0l3.15802.16523..16771...0.3..0.66.360.6......0....1..gws-wiz.......0i71j0i131i67.elMB-lf4_Ko&ved=0ahUKEwjVuc6uk5XmAhXS7eAKHSwhAtwQ4dUDCAs&uact=5");
                data[3] = prive.Stock("oiseau",
                    "oiseau",
                    "https://www.google.com/search?q=oiseau&oq=oiseau&aqs=chrome..69i57.1016j0j9&sourceid=chrome&ie=UTF-8");
                data[4] = prive.Stock("poisson",
                    "poisson",
                    "https://www.google.com/search?q=poisson&oq=poisson&aqs=chrome..69i57.3160j0j9&sourceid=chrome&ie=UTF-8");
            },

            'Stock': function (titre_in, keyword_in, url_in) {
                this.titre = titre_in;
                this.keyword = keyword_in;
                this.url = url_in;
                this.afficher = afficher;
            },

            'afficher': function () {
                var afficherH3 = $('<h3><a href=' + this.url + '>' + this.titre +
                    '</a></h3><p class=noindent>' + this.keyword + '<br><a href=' + this.url + '>' + this.url + '</a></p>\n');
            }

        });

        // Initialise the plugin
        this.generate(this.settings);

        return this;
    };

}(jQuery));
