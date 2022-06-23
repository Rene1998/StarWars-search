<template>
	<div class="flex justify-center">
    <div class="column width-8">
			<h1 class="q-mb-xl text-h3 text-center text-weight-light text-navy">StarWars search</h1>
			<star-wars-search />
    </div>
	</div>
</template>

<script>
export default {
	components: {
		'star-wars-search': () => import('../components/StarWarsSearch/StarWarsSearch.vue')
	}
}
</script>

<style lang="sass" scoped>
.width-8
	max-width: 22rem
	margin: 0 1rem
</style>
