<script setup>
import { computed, ref } from "vue";
import axios from "axios";

// variables
const gameCode = ref();
const gameStatus = ref();

// set emitter(s)
const emit = defineEmits(["sendCode"]);

// functions
const isMakingNewGame = computed(() => {
  // check if gameCode empty
  return gameCode.value == undefined || gameCode.value.length == 0 ? true : false;
});

function join() {
  let url = "https://api.hryszko.dev/tictactoe/" + gameCode.value;

  axios(url)
    .then(function (response) {
			emit("sendCode", gameCode.value);
		})
    .catch(function (e) {
			gameStatus.value = e.response.status;
	});
}
</script>

<template v-if="gameCode.value == undefined">
  <main class="container">
    <input
      type="number"
      placeholder="Type game code to join to your friend!"
      min="0"
      max="9999"
      v-model="gameCode"
    />
    <div class="flex">
      <button class="mx-1" :disabled="!isMakingNewGame">Make new game</button>
      <button class="mx-1" @click="join" :disabled="isMakingNewGame">
        Join to the game
      </button>
    </div>
  </main>

	<dialog open v-if="gameStatus==404">
		<article>
			<h3>Game not exist!</h3>
			<p>
				We tried to locate the game, but it doesn't exist.
				<br />
				Ask your friend repeat code for you or create new game.
			</p>
			<footer>
				<button @click="gameStatus=-1">Try again!</button>
			</footer>
		</article>
	</dialog>

	<dialog open v-if="gameStatus==422">
		<article>
			<h3>Wrong code!</h3>
			<p>
				Code should has 4 digits, your hasn't 😥
			</p>
			<footer>
				<button @click="gameStatus=-1">Try again!</button>
			</footer>
		</article>
	</dialog>

</template>
