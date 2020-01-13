'use strict';

(function ($) {

    $.fn.MySlide = function (options) {

        this.settings = $.extend({

            'el': $(this) || [],
            slide: [],
        }, options);

        var el = this.settings.el,
            prive = {};

        Object.assign(this, {});

        Object.assign(prive, {

            'generate': function (settings) {

                el.before('<div class="controls"> <button class="prev">Precedent</button> <button class="next">Suivant</button> </div>');

                var elUl = $('<ul></ul>');

                el.append(elUl);

                settings.slide.forEach(function (img) {
                // Creation d'une liste d'image
                    if (img.src) {

                        var elLi = $('<li></li>'),
                            elImage = $('<img>', {
                                src: img.src
                            });

                        elUl.append(elLi);
                        elLi.append(elImage);
                        
                        
                        // creation des boutons et du mouvement du slide
                        var carrouselImg = $('#carrousel img'),
                            indexImg = carrouselImg.length - 1, // on définit l'index du dernier élément
                            i = 0,
                            currentImg = carrouselImg.eq(i); // on cible l'image courante, qui possède l'index i

                        carrouselImg.css('display', 'none');  // on cache les images
                        currentImg.css('display', 'block'); // on affiche seulement l'image courante

                        // image suivante
                        $('.next').click(function () {

                            i++;

                            if (i <= indexImg) {

                                carrouselImg.css('display', 'none');

                                currentImg = carrouselImg.eq(i);

                                currentImg.css('display', 'block');

                            } else {

                                i = indexImg;

                            }

                        });

                        // image précédente
                        $('.prev').click(function () {

                            i--;

                            if (i >= 0) {

                                carrouselImg.css('display', 'none');

                                currentImg = carrouselImg.eq(i);

                                currentImg.css('display', 'block');

                            } else {

                                i = 0;

                            }

                        });

                    }

                });
                
                // style du slide
                el.css({
                    position: 'relative',
                    height: '200px',
                    width: '700px',
                    margin: 'auto'

                });

                $('li').css({
                    position: 'absolute',
                    top: '0',
                    left: '0'
                });

            }

        });

        prive.generate(this.settings);
        return this;
    };
}(jQuery));
