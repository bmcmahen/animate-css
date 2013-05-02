
# animate-css

	Apply css animations to an element, with a callback for when that animation finishes. If the browser doesn't support transitions, the callback is invoked immediately.

## Installation

    $ component install bmcmahen/animate-css

## API

		var animate = require('bmcmahen-animate');
		animate(el, 'fadeOutRight', function(element){
			$(element).remove();
		});


## License

  MIT
