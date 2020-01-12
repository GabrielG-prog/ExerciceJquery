'use strict';

(function ($) {

    $.fn.MySlide = function (options) {

        this.settings = $.extend({

            'el': $(this) || [],
            slide: [],
        }, options);

        var el = this.settings.el;
        var prive = {};

        Object.assign(this, {});

        Object.assign(prive, {

            'generate': function (settings) {

                el.append('<div class="controls"> <span class="prev">Precedent</span> <span class="next">Suivant</span> </div>');

                var elUl = $('<ul></ul>');

                el.append(elUl);

                settings.slide.forEach(function (img) {

                    if (img.src) {

                        var elLi = $('<li></li>');
                        var elImage = $('<img>');

                        $(elImage).attr('src', img.src);

                        elUl.append(elLi);
                        elLi.append(elImage);

                        var carrouselImg = $('#carrousel img');
                        var indexImg = carrouselImg.length - 1;
                        var i = 0;
                        var currentImg = carrouselImg.eq(i);

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

                        function slideImg() {

                            setTimeout(function () {

                                if (i < indexImg) {

                                    i++;

                                } else {

                                    i = 0;

                                }

                                carrouselImg.css('display', 'none');

                                currentImg = carrouselImg.eq(i);

                                currentImg.css('display', 'block');

                                slideImg();

                            }, 1000);

                        }

                        slideImg(); // enfin, on lance la fonction une première fois

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
