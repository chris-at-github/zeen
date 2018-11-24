'use strict';

let ZeenFactory = function() {
};

/**
 * Ueberprueft ob es in dem uebergebenen Namespache (service.map) eine passende Funktion / Klasse gibt (Zeen[service][map]
 *
 * @see: https://stackoverflow.com/questions/359788/how-to-execute-a-javascript-function-when-i-have-its-name-as-a-string
 *
 * @param {string} namespace
 * @param {object} context
 * @return {object}
 */
ZeenFactory.prototype.createByNamespace = function(namespace, context) {
	let sections = namespace.split('.');
	let name = sections.pop();

	for(let i = 0; i < sections.length; i ++) {
		context = context[sections[i]];
	}

	return new context[name]();
};

export default ZeenFactory;