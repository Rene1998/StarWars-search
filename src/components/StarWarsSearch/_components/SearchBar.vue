<template>
	<q-input label="Name" outlined color="gem" v-model="searchValue">
		<template v-slot:append>
			<q-icon name="search" color="gem" />
		</template>
	</q-input>
</template>

<script>
export default {
	data() {
		return {
			searchValue: ''
		}
	},

	watch: {
		searchValue(nVal, oVal) {
			if (nVal !== oVal) this.$emit('searchFor', nVal)
		}
	}
}
</script>
