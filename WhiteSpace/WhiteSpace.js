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
     * defaultValue is md
     *
     * @param {*} element
     */
    function WSHelper(element) {
        element = $(element);
        var size = element.attr('size');
        switch (size) {
            case 'xs':
                element.addClass('jf-whitespace-xs');
                break;
            case 'sm':
                element.addClass('jf-whitespace-sm');
                break;
            case 'lg':
                element.addClass('jf-whitespace-lg');
                break;
            case 'xl':
                element.addClass('jf-whitespace-xl');
                break;
            default:
                element.addClass('jf-whitespace-md');
                break;
        }
    }

    customTag('White-Space', WSHelper);
});