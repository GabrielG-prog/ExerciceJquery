'use strict';

(function ($) {
    $.fn.GenerateSlide = function (options) {
        this.settings = $.extend({
            'el': $(this) || [],
            slideRun: [],
        }, options);

        var el = this.settings.el;
        var prive = {};

        Object.assign(this, {});

        Object.assign(prive, {

            'generate': function (settings) {
                var elButtonPre = $('<button class="prev">Precedent</button>');
                el.append(elButtonPre);
                var elButtonSui = $('<button class="next">Suivant</button>');
                el.append(elButtonSui);

                settings.slideRun.forEach(function (value) {
                    if (value.type == 'image') {
                        var elImage = $('<img>');
                        $(elImage).attr('src', value.src);
                        $(elImage).attr('class', value.class);
                        el.append(elImage);

                    }

                });

                $('.next').on('click', function () {
                    var currentImg = $('.active');
                    var nextImg = currentImg.next();

                    if (nextImg.length) {
                        currentImg.removeClass('active').css('z-index', -10);
                        nextImg.addClass('active').css('z-index', 10);
                    }
                });

                $('.prev').on('click', function () {
                    var currentImg = $('.active');
                    var prevImg = currentImg.prev();

                    if (prevImg.length) {
                        currentImg.removeClass('active').css('z-index', -10);
                        prevImg.addClass('active').css('z-index', 10);
                    }
                });

            }

        });

        prive.generate(this.settings);
        return this;
    };
}(jQuery));
