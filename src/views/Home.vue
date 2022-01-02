<script setup>
import { computed, ref } from "vue";
import PreGame from "./PreGame.vue";
import Game from "./Game.vue";

const gameCode = ref();

const setCode = (e) => {
  gameCode.value = e;
};
</script>

<template>
  <div>
    <center>
      <h1>Home</h1>
      <PreGame v-if="gameCode == undefined" @sendCode="setCode"/>
			<Game v-if="gameCode != undefined" />

    </center>
  </div>
</template>
