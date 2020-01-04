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

    function FlexHelper(element) {
        element = $(element);
        var direction = element.attr('direction')?element.attr('direction'):'row';
        var wrap = element.attr('wrap')?element.attr('wrap'):'nowrap';
        var justify = element.attr('justify')?element.attr('justify'):'start';
        var align = element.attr('align')?element.attr('align'):'center';
        // display flex
        element.addClass('jf-flex');
        // attr
        element.addClass('jf-flex-direction-' + direction);
        element.addClass('jf-flex-wrap-' + wrap);
        element.addClass('jf-flex-justify-' + justify);
        element.addClass('jf-flex-align-' + align);

    }

    function FlexItemHelper(element) {
        element = $(element);
        element.addClass('jf-flex-item');
    }

    customTag('Flex', FlexHelper);
    customTag('Flex-Item', FlexItemHelper);
});