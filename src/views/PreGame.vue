<script setup>
import { computed, ref } from "vue";
import axios from "axios";

import InputNumber from "./simple/InputNumber.vue";
import Button from "./simple/Button.vue";
import { useToast } from "vue-toastification";

// variables
const toast = useToast();
const gameCode = ref();
const gameStatus = ref(-1);

const modalShow = computed(() => {
  return gameStatus.value != -1;
});

const modalInfo = computed(() => {
  if (gameStatus.value == 404) return "Game not found!";
  else if (gameStatus.value == 422) return "Game code is invalid!";
  else return "";
});

// set emitter(s)
const emit = defineEmits(["sendInfo"]);

// functions
const isMakingNewGame = computed(() => {
  // check if gameCode empty
  return gameCode.value == undefined || gameCode.value.length == 0 ? true : false;
});

function join() {
  let url = "https://api.hryszko.dev/tictactoe/" + gameCode.value;
  axios(url)
    .then(function (response) {
      emit("sendInfo", {
        code: gameCode.value,
        playerCode: 0,
      });
    })
    .catch(function (e) {
      gameStatus.value = e.response.status;

      toast.error(modalInfo.value, {
        position: "bottom-right",
      });
    });
}

function makeGame(){
	let url = "https://api.hryszko.dev/tictactoe/";
	axios.post(url).then(function (response) {
		emit("sendInfo", {
			code: response.data.code,
			playerCode: 1,
		});
	}).catch(function (e) {
		// if status is 400
		if(e.response.status == 400)
			toast.error("No more game codes, game cannot be made!", {
				position: "bottom-right",
			});
		else
			toast.error("Something went wrong!", {
				position: "bottom-right",
			});

	});
}
</script>

<template>
  <div class="flex w-full items-center justify-center">
    <div class="flex w-1/2 flex-col items-center justify-center m-2">
      <InputNumber
        v-model="gameCode"
        :min="1000"
        :max="9999"
        placeholder="Type game code to join to your friend!"
      />
      <div class="flex w-full justify-evenly mt-2">
        <Button @click="makeGame" :disabled="!isMakingNewGame">Make new game</Button>
        <Button @click="join" :disabled="isMakingNewGame">Join to the game</Button>
      </div>
    </div>
  </div>
</template>
