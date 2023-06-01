$(document).ready(function () {
    $('.sub').hide(); ''

    $('#nav>ul>li').hover(
        function () {
            $(this)
                .find('.sub')
                .show()
                .css({ opacity: '0', height: '0px' })
                .animate({ opacity: '1', height: '220px' })
        },
        function () {
            $(this).find('.sub').hide();
        }
    );

    $('#nav .sub li').hover(
        function () {
            $(this).addClass('act');
        },
        function () {
            $(this).removeClass('act');
        }
    )

});

$(document).ready(function () {
    var slideCount = $('#main .main_img ul li').length;
    var currentIndex = 0;

    function slideAnimation() {
        $('#main .main_img ul li').eq(currentIndex).css('opacity', 1).siblings().css('opacity', 0);
    }

    function slideNext() {
        currentIndex++;
        if (currentIndex >= slideCount) {
            currentIndex = 0;
        }
        slideAnimation();
    }

    setInterval(function () {
        slideNext();
    }, 5000);
});


$(document).ready(function () {
    var slideCount = $('#company .company_img ul li').length;
    var currentIndex = 0;

    function slideAnimation() {
        $('#company .company_img ul li').eq(currentIndex).css('opacity', 1).siblings().css('opacity', 0);
    }

    function slideNext() {
        currentIndex++;
        if (currentIndex >= slideCount) {
            currentIndex = 0;
        }
        slideAnimation();
    }

    setInterval(function () {
        slideNext();
    }, 5000);
});