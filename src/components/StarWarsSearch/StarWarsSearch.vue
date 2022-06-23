<template>
	<div>
		<search-bar @searchFor="handleSearch" />
		<information-label ref="information-label" />
		<result-list ref="result-list"
			@resultCountChange="$refs['information-label'].handleNoResult($event)" />
	</div>
</template>

<script>
export default {
	components: {
		'search-bar': () => import('./_components/SearchBar.vue'),
		'information-label': () => import('./_components/InformationLabel.vue'),
		'result-list': () => import('./_components/ResultList.vue')
	},

	methods: {
		handleSearch(searchValue) {
			this.$refs['information-label'].handleSearchEmptiness(!searchValue.length)
			this.$refs['result-list'].searchFor(searchValue)
		}
	}
}
</script>
