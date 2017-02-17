(function ($) {

    $.fn.carousel = function() {

        var $leftArrow = $('.carousel-arrow-left');
        var $rightArrow = $('.carousel-arrow-right');
        var $elementsList = $('.carousel-list');

        var $pixelsOffset = 375;
        var $currentLeftValue = 0;
        var $elementsCount = $elementsList.find('li').length;
        var $minimumOffset = -(($elementsCount - 3) * $pixelsOffset);
        var $maximumOffset = 0;

        $leftArrow.click(function() {
            if ($currentLeftValue != $maximumOffset) {
                $currentLeftValue += 375;
                $elementsList.animate({
                    left: $currentLeftValue + "px"
                }, 400);
            }
        });

        $rightArrow.click(function() {
            if ($currentLeftValue != $minimumOffset) {
                $currentLeftValue -= 375;
                $elementsList.animate({
                    left: $currentLeftValue + "px"
                }, 400);
            }
        });
        return this;
    };

})(jQuery);
