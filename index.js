var transition = require('transition-property')
	, classes = require('classes')
	, cssEvent = require('css-emitter')
	, once = require('once');

// API:
// animate(el, 'fadeOutRight', function(el){
// 	$(el).remove();
// });

// If transitions aren't supported, call back immediately,
// which allows us to immediately remove specific elements.

module.exports = animate;

function animate(el, className, fn){
	if (!transition) {
		if (fn) fn(el);
		return;
	}
	classes(el).add(className);
	cssEvent(el).bind(once(cleanup));
	function cleanup(){
		classes(el).remove(className);
		if (fn) fn(el);
	}
}