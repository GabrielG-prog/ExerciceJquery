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

                    if (img.src) {

                        var elLi = $('<li></li>'),
                            elImage = $('<img>', {
                                src: img.src
                            });

                        elUl.append(elLi);
                        elLi.append(elImage);

                        var carrouselImg = $('#carrousel img'),
                            indexImg = carrouselImg.length - 1,
                            i = 0,
                            currentImg = carrouselImg.eq(i);

                        carrouselImg.css('display', 'none');
                        currentImg.css('display', 'block');

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
