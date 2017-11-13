/**
 *  @ Plugin Name: jquery-elementBubble
 *  @ Version: 1.0.0
 *  @ Author: Erce Erozbek
 *  @ Author URL: https://github.com/kaerer
 *  @ License: Licensed under MIT
 *  @ inspired by jquery plugin URL: https://github.com/Fuxy526/clickBubble
 *  jquery.elementBubble.js
 */

(function ($) {
    'use strict';

    $.fn.elementBubble = function (opt) {

        var options = $.extend({
            color: '#000',
            size: 20,
            time: 500,
            borderWidth: 2,
            origin: 'origin'
        }, opt);

        var id = 0;
        var el = $(this)[0].getBoundingClientRect();

        var x = el.left + window.scrollX;
        var y = el.top + window.scrollY;

        switch (options.origin) {
            case 'topleft':
                break;
            case 'origin':
            default:
                x = x + (el.width * 0.5);
                y = y + (el.height * 0.5);
                break;
        }

        $('<div>')
            .attr('id', 'clickBubble_' + ++id)
            .css({
                'width': 0,
                'height': 0,
                'border': options.borderWidth + 'px solid ' + options.color,
                'position': 'absolute',
                'left': x,
                'top': y,
                'border-radius': '50%'
            })
            .animate({
                'width': options.size + 'px',
                'height': options.size + 'px',
                'left': x - (0.5 * options.size),
                'top': y - (0.5 * options.size),
                opacity: 0
            }, options.time, function () {
                $(this).remove();
            })
            .appendTo('body');
        return this;

    }

}(jQuery));
