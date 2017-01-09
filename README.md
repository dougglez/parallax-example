Parallax example with Star Wars

Fork or Clone the master branch of this repo.

All the images are provided in the img folder


1: int he index.html, create a div with a class of parallax and logo-photo
'<div class="parallax logo-photo"></div>'

1. In the index.html, create a div with a class of parallax and logo-photo
'<div class="parallax logo-photo"></div>'
2. Create another div below it with the class of words, and add words inside to be able to see the effect.
'<div class="words">Some words here</div>'
3. In the main.css, give your parallax class and set height, as well as the following styling:
    .parallax {
        /* Set a specific height */
        height: calc(100vh - 50px); 

        /* Create the parallax scrolling effect */
        background-attachment: fixed;
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
    }
4. give your words class a height, background-color, and change the font size if you want. (this part isn't required if you don't want it. It is only here to help you see the effect of the parallax scrolling)
5. repeat steps 1 & 2, with the exception of changing logo-photo to photo<em>n</em>