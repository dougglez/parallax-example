#Parallax example with Star Wars

Fork or Clone the master branch of this repo.

All the images are provided in the img folder

view the demo here:
https://dougglez.github.io/parallax-example/

1. In the index.html, create a div with a class of parallax and logo-photo<br/>
`<div class="parallax logo-photo"></div>`
2. Create another div below it with the class of words, and add words inside to be able to see the effect.<br/>
`<div class="words">Some words here</div>`
3. In the main.css, give your parallax class and set height, as well as the following styling:
    <br/>
    .parallax {<br/>
        /* Set a specific height */<br/>
        height: calc(100vh - 50px); 

        /* Create the parallax scrolling effect */
        background-attachment: fixed;
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
    }
4. Give your logo-photo class a height of 100vh and add the starwarslogo background image
5. Give your words class a height, background-color, and change the font size if you want. (this part isn't required if you don't want it. It is only here to help you see the effect of the parallax scrolling)
6. Repeat steps 1 & 2, with the exception of changing logo-photo to photo"_*n*_" ex. photo1
<hr/>

## More Advanced Parallax with jQuery
If you want to give a layered effect, with closer layers scrolling faster than back layers, you'll need to bring in jQuery.

1. Add the files in your index.html and main.css
2. create an app.js file and link it in your index.html
3. $(document).ready(etc.)
4. We'll need a function that will gather information about how fast we're scrolling, and then translate that into scrolling speeds for the images. It should also be able to have varible speeds, so you can choose which elements scroll faster and/or slower.


`
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
`

<hr> 
### Make Darth Vader Fly out of the window on scroll
(More jQuery)

There are probably a lot of ways to do this, and this is by no means the best way. But it is the way I did it, so it is the way I will talk about it.

If Darth Vader has absolute positioning inside of the first div, then it stands to reason that if we change the sizing and/or positioning of that div, darth vader will move around the screen as well.

1.  We'll need a function that can, once again, track the scrolling of the website.
2. as we scroll down, we'll increase the width, and move the div up.
3. if we scroll up, we'll deecrease the width, and move the div down.

`
 $(window).scroll(function () {
        var scroll = $(window).scrollTop();
        $(".zoom-me").css({
            width: (100 + scroll / 5) + "%",
            top: -(scroll / 10) + "%",
        });
    });
`

<hr>

### Make Darth Vader Spin
(Yet another jQuery Function)

(Because these functions are all on scroll, you may find it suits you better too include them all in one, instead of making different functions for each item. I have created it this way to make it more aof a step by step process for a tutorial.)

1. To make Vader spin while he flies out of the view, we'll need to track scrolling on the window again. You should have this part down by now!
2. Lets create a few variables first to limit how much we need to type.
3. Now create the function that will give Vader vertigo.
4. We'll use transform: rotate to do what we want, and if we compare scrollTop() to the height of $body, we can get a good clean spin every time.



`
    var $cog = $('.cog');
    var $body = $(document.body);
    var bodyHeight = $body.height();

    $(window).scroll(function () {
        $cog.css({
            // bodyHeight * 3600, the higher the number, the faster the spin
            'transform': 'rotate(' + ($body.scrollTop() / bodyHeight * 3600) + 'deg)'
        });
    });
`

