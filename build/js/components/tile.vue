<template>
	<div class="tile" v-bind:style="styleObject">
		<div v-bind:class="terrainClass"></div>
	</div>
</template>

<script>
	// import MapHelper from '../helpers/map';
	// use xlink:href binding
	// @see: https://github.com/vuejs/vue/issues/648#issuecomment-304664977
	export default {
		props: ['x', 'y', 'properties'],
		data: function() {
			return {
				settings: {}
			}
		},
		computed: {
			position: function() {
				return {
					'x': (this.x - 1) * Zeen.configuration.tile.size,
					'y': (this.y - 1) * Zeen.configuration.tile.size
				};
			},

			styleObject: function() {
				return {
					'width': Zeen.configuration.tile.size + 'px',
					'height': Zeen.configuration.tile.size + 'px',
					'left': this.position.x + 'px',
					'top': this.position.y + 'px'
				}
			},

			terrainClass: function() {
				return 'tile--terrain tile--terrain-' + this.properties.terrain;
			}
		}
	}
</script>