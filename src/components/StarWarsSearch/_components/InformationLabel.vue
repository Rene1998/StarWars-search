<template>
	<div>
		<p v-if="isSearchEmpty && !noResult" class="information-label">
			Enter search phrase
		</p>
		<p v-if="noResult && !isSearchEmpty" class="information-label">
			Nothing found
		</p>
	</div>
</template>

<script>
export default {
	data() {
		return {
			isSearchEmpty: true,
			noResult: false
		}
	},

	methods: {
		handleSearchEmptiness(e) {
			this.isSearchEmpty = e
		},
		handleNoResult(e) {
			this.noResult = e
		}
	}
}
</script>

<style lang="sass" scoped>
.information-label
	text-align: center
	margin-top: 1rem
	font-size: 0.75rem
	font-weight: 500
</style>
