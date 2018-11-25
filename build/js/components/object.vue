<template>
	<div class="object" v-bind:style="style">
	</div>
</template>

<script>
	export default {
		props: ['properties'],
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