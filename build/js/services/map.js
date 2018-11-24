'use strict';

let MapService = function() {
};

/**
 * @param {object} tiles
 * @return {int}
 */
MapService.prototype.getMaxX = function(tiles) {
	return _.maxBy(Object.values(tiles), function(tile) {
		return tile.x;
	}).x;
};

/**
 * @param {object} tiles
 * @return {int}
 */
MapService.prototype.getMaxY = function(tiles) {
	return _.maxBy(Object.values(tiles), function(tile) {
		return tile.y;
	}).y;
};

/**
 * @param {object} tiles
 * @return {int}
 */
MapService.prototype.getWidth = function(tiles) {
	return Zeen.configuration.tile.size * this.getMaxX(tiles);
};

/**
 * @param {object} tiles
 * @return {int}
 */
MapService.prototype.getHeight = function(tiles) {
	return Zeen.configuration.tile.size * this.getMaxY(tiles);
};

export default MapService;