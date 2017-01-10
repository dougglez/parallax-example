$(document).ready(function () {
    $(window).scroll(function () {
        var scroll = $(window).scrollTop();
        $(".zoom-me").css({
            width: (100 + scroll / 5) + "%",
            top: -(scroll / 10) + "%",
            // "-webkit-filter": "blur("+(scroll/200)+"px)",
            // filter: "blur(" + (scroll/200)+
            // "px)"
        });
    });

    //Darth Vader flips as he flies out of the screen
    var $cog = $('#cog'),
        $body = $(document.body),
        bodyHeight = $body.height();

    $(window).scroll(function () {
        $cog.css({
            // bodyHeight * 3600, the higher the number, the faster the spin
            'transform': 'rotate(' + ($body.scrollTop() / bodyHeight * 3600) + 'deg)'
        });
    });

// scrolling stars at different speeds
    $.fn.moveIt = function () {
        var $window = $(window);
        var instances = [];

        $(this).each(function () {
            instances.push(new moveItItem($(this)));
        });

        window.onscroll = function () {
            var scrollTop = $window.scrollTop();
            instances.forEach(function (inst) {
                inst.update(scrollTop);
            });
        }
    }

    var moveItItem = function (el) {
        this.el = $(el);
        this.speed = parseInt(this.el.attr('data-scroll-speed'));
    };

    moveItItem.prototype.update = function (scrollTop) {
        var pos = scrollTop / this.speed;
        this.el.css('transform', 'translateY(' + -pos + 'px)');
    };

    // Initialization
    $(function () {
        $('[data-scroll-speed]').moveIt();
    });

});