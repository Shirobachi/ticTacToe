<script setup>
	import { computed, ref } from 'vue';
	import axios from 'axios'

	// variables
	const gameCode = ref();
	const newCode = ref();

	// functions
	const isMakingNewGame = computed(() => {
		// check if gameCode empty
		return gameCode.value == undefined || gameCode.value.length == 0  ? true : false;
	});

	function join() {
		let missingOws = 4  - gameCode.value.toString().length
		let newCode = "0".repeat(missingOws) + gameCode.value
		let url = "https://api.hryszko.dev/tictactoe/" + newCode;

		axios.post(url)
		.then(function (response) {
			alert (response.data);
		})
		.catch(function (error) {
			alert(error);
		});
	}
</script>


<template v-if="newCode == undefined">
	<main class="container">
		<input type="number" placeholder="Type game code to join to your friend!" min="0" max="9999" v-model="gameCode">
		<div class="flex">
			<button class="mx-1" :disabled="!isMakingNewGame">Make new game</button>
			<button class="mx-1" @click="join" :disabled="isMakingNewGame">Join to the game</button>
		</div>
	</main>
</template>