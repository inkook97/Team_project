$(document).ready(function () {
    var current = 0; // 초기에 보이는 메인이미지 인덱스값
    var setIntervalid;
    $('#btns li').eq(current).addClass('on');

    $('.playList > div').on({
        click: function () {
            var tg = $(this);
            var i = tg.index();

            movie(i);
            console.log(i);
            $('.playList > div').removeClass('on');
            $(this).addClass('on');
        }
    });

    $('.btns > .left').click(function () {
        var i = current - 1;
        if (i < 0) {
            i = 3;
        }

        movie(i);
        $('.playList > div').removeClass('on');
        $('.playList > div').eq(i).addClass('on');
    });

    $('.btns > .right').click(function () {
        var i = current + 1;
        if (i > 3) {
            i = 0;
        }

        movie(i);
        $('.playList > div').removeClass('on');
        $('.playList > div').eq(i).addClass('on');
    });

    // 자동 실행에 대한 제어
    $('#main_img').on({
        mouseover: function () {
            clearInterval(setIntervalid);
        },
        mouseout: function () {
            timer();
        }
    });

    timer();

    function timer() {
        setIntervalid = setInterval(function () {
            var n = current + 1;
            if (n > 3) {
                n = 0;
            }
            movie(n);

            $('.playList > div').removeClass('on');
            $('.playList > div').eq(n).addClass('on');
        }, 5000);
    }

    function movie(i) {
        if (current == i) return;

        var currentEl = $('#main_img > img').eq(current);
        var nextEl = $('#main_img > img').eq(i);

        if (i > current) {
            currentEl.css({ left: 0 }).stop().animate({ left: '-1903px' });
            nextEl.css({ left: '1903px' }).stop().animate({ left: 0 });
        } else {
            currentEl.css({ left: 0 }).stop().animate({ left: '1903px' });
            nextEl.css({ left: '-1903px' }).stop().animate({ left: 0 });
        }

        current = i;
    }
});
