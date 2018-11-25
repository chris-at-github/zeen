<template>
	<div class="tile" v-bind:style="styleObject">
		<div v-bind:class="terrainClass"></div>
		<div class="tile--object-container">
			<z-object
				v-for="(object, id) in objects"
				v-bind:properties="object"
				v-bind:key="id">
			</z-object>
		</div>
	</div>
</template>

<script>
	import Object from './object';

	export default {
		// @see: https://vuejs.org/v2/guide/components.html#Local-Registration
		components: {
			'z-object': Object
		},

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
			},

			objects: function() {
				return this.properties.objects;
			}
		}
	}
</script>