<script setup>
import { computed, ref } from "vue";
import PreGame from "./PreGame.vue";
import Game from "./Game.vue";

const gameCode = ref();
const playerCode = ref(0);

// code, yourTurn
const setInfo = (e) => {
  gameCode.value = e.code;
  playerCode.value = e.playerCode;
};
</script>

<template>
	<div class="w-full">
		<!-- <h1 class="text-center">Home (check code 1111)</h1> -->
		<PreGame v-if="gameCode == undefined" @sendInfo="setInfo"/>
		<Game :playerCode="playerCode" :code="gameCode" v-if="gameCode != undefined" />
	</div>
</template>
