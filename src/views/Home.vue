<script setup>
	import { ref } from 'vue'
	import Game from "./Game.vue"

	const time = ref(5)
	const players = ref(2)
	const isPlaying = ref(false)
</script>

<template>
  <div>
    <center>
      <h1>Home</h1>
			<template v-if="!isPlaying">
				<p>Welcome in <i>time is ticking</i> game!</p>

				<!-- start button, time for card, quantities of players -->
				<fieldset>
					<center>
						<legend>How many players?</legend>
					</center>

					<label>
						<input type="radio" name="players" value="2" checked v-model="players"/>
						2 players
					</label>
					<label>
						<input type="radio" name="players" value="3" v-model="players"/>
						3 players
					</label>
					<label>
						<input type="radio" name="players" value="4" v-model="players"/>
						4 players
					</label>

				</fieldset>

				<!-- Range slider -->
				<label for="range">Time for card ({{ time }} seconds)</label>
				<input type="range" min="3" max="10" v-model="time"/>

				<!-- button to game.vue router -->
				<button v-on:click="isPlaying = true">Start game!</button>
			</template>
				<Game v-if="isPlaying">
				<!-- asdasd -->xzzxc

				</Game>

			{{ isPlaying }}

    </center>
  </div>
</template>