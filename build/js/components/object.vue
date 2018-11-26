<template>
	<div class="object" v-bind:style="style">
		<svg class="object--skeleton">
			<use v-bind="{'xlink:href':'#object-' + id}" />
		</svg>
	</div>
</template>

<script>
	export default {
		props: ['id', 'properties'],
		data: function() {
			return {}
		},
		computed: {
			style: function() {
				return {
					'width': this.properties.width + 'px',
					'height': this.properties.height + 'px',
					'left': this.properties.position.x + 'px',
					'top': this.properties.position.y + 'px'
				}
			}
		}
	}
</script>