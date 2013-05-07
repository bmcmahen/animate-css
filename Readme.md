
# animate-css

A small helper for applying CSS animations to an element, with a callback for when that animation finishes. If the browser doesn't support animations, the callback is invoked immediately. It works well with [animate.css](https://github.com/daneden/animate.css) animations.

## Installation

    $ component install bmcmahen/animate-css

## API

    var animate = require('bmcmahen-animate-css');
    var el = document.getElementById('animate-me');
    animate(el, 'fadeOutRight', function(element){
      // Element has finished animating
    });


## License

  MIT
