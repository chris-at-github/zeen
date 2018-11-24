'use strict';

import ZeenFactory from './zeen';

let ServiceFactory = function() {
	ZeenFactory.call(this);
};

/**
 * Vererbung der Application Eigenschaften und Methoden
 *
 * @type {Application}
 */
ServiceFactory.prototype = Object.create(ZeenFactory.prototype);

/**
 * Erzeugt eine neue Instanz zur eines Services anhand des Namespaces
 *
 * @param {string} namespace
 * @return {object}
 */
ServiceFactory.prototype.create = function(namespace) {
	return this.createByNamespace(namespace, Zeen);
};

export default ServiceFactory;