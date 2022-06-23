<template>
	<div v-if="filteredHeroes && filteredHeroes.length && searchValue.length" class="q-mt-md">
		<q-btn v-for="(hero, i) in filteredHeroes" :key="i" class="q-mb-xs q-py-sm" align="left" no-caps>
			<template v-slot:default>
				<span class="text-weight-light" v-html="highlightFilter(hero.name, searchValue)" />
			</template>
		</q-btn>
	</div>
</template>

<script>
import axiosClient from '../../../utils/axiosClient'

export default {
	data() {
		return {
			filteredHeroes: null,
			searchValue: ''
		}
	},

	methods: {
		async searchFor(searchValue) {
			try {
				const { data: { results } } = await axiosClient.get(`people/?search=${searchValue}`)
				this.filteredHeroes = results
				this.searchValue = searchValue
				this.$emit('resultCountChange', !this.filteredHeroes.length)
			} catch (err) {
				console.error(err)
			}
		},
		highlightFilter(heroName, searchValue) {
			const reg = new RegExp(searchValue, 'gi')
			return heroName.replace(reg, `<b>${searchValue}</b>`)
		}
	}
}
</script>

<style lang="sass" scoped>
.q-btn
  width: 100%
  background-color: $ws-navy
  color: white
</style>
