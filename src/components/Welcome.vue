<script setup>
	console.clear();

	defineProps({
		msg: String,
	});
</script>

<template>
  <center>
		<h1 class="mt-4">
			{{ msg }}

			<button class="secondary mt-4">Play the game!</button>
		</h1>
	</center>
</template>

<style scoped>

</style>
