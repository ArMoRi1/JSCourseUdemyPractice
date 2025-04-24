window.addEventListener('DOMContentLoaded', () => {
const tabs = require('./modules/tabs'),
	modals = require('./modules/modals'),
	timer = require('./modules/timer'),
	cards = require('./modules/cards'),
	calculator = require('./modules/calculator'),
	forms = require('./modules/forms'),
	slider = require('./modules/slider');

tabs();
modals('[data-modal]', '.modal');
timer();
cards();
calculator();
forms();
slider();
});