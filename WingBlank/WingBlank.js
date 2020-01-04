/*
 * @Author: your name
 * @Date: 2020-01-04 19:48:34
 * @LastEditTime : 2020-01-04 20:51:50
 * @LastEditors  : Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \Layout\WingBlank\WingBlank.js
 */
$(function () {
    /**
     * find the customized tag,
     * add customized class to change style
     *
     * @param {customized tag} tagName
     * @param {function} fn
     */
    function customTag(tagName, fn) {
        Array
            .from($(tagName))
            .forEach(fn);
    }
    /**
     * change whiteSpace height according to attr('size')
     * defaultValue is lg
     *
     * @param {*} element
     */
    function WBHelper(element) {
        element = $(element);
        var size = element.attr('size');
        switch (size) {
            case 'sm':
                element.addClass('jf-wingblank-sm');
                break;
            case 'md':
                element.addClass('jf-wingblank-md');
                break;
            default:
                element.addClass('jf-wingblank-lg');
                break;
        }
    }

    customTag('Wing-Blank', WBHelper);
});