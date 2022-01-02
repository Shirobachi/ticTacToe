<script setup>
import axios from "axios";
import { ref } from "vue";

// props
const props = defineProps({
  code: String,
});

// const code = ref()

// images

// code = "#@$"

const img = [
  new URL("../img/0.png", import.meta.url).href,
  new URL("../img/1.png", import.meta.url).href,
];

// const url = "https://api.hryszko.dev/tictactoe" + code.value;

// axios(let).then(function (response) {
// 	emit("sendCode", gameCode.value);
// });

const refresh = function () {
  let url = "https://api.hryszko.dev/tictactoe/" + props.code;
  alert(url);
};

// refresh()
</script>

<template>
  <main class="container">

    <div class="flex justify-around">
			<mark title="Here gonna be timer, one day...">00:05</mark>
			<kbd title="Believe or not, but this is game code xD">
				Game code: {{ code }}
			</kbd>

		</div>

    <div class="text-4xl flex justify-center">
      <div>
        <img class="p-4" :src="img[Math.floor(Math.random() * 2)]" alt="" />
      </div>
      <div class="border-l-2 border-r-2">
        <img class="p-4" :src="img[Math.floor(Math.random() * 2)]" alt="" />
      </div>
      <div>
        <img class="p-4" :src="img[Math.floor(Math.random() * 2)]" alt="" />
      </div>
    </div>
    <div class="text-4xl flex justify-center">
      <div class="border-t-2 border-b-2">
        <img class="p-4" :src="img[Math.floor(Math.random() * 2)]" alt="" />
      </div>
      <div class="border-t-2 border-b-2 border-l-2 border-r-2">
        <img class="p-4" :src="img[Math.floor(Math.random() * 2)]" alt="" />
      </div>
      <div class="border-t-2 border-b-2">
        <img class="p-4" :src="img[Math.floor(Math.random() * 2)]" alt="" />
      </div>
    </div>
    <div class="text-4xl flex justify-center">
      <div>
        <img class="p-4" :src="img[Math.floor(Math.random() * 2)]" alt="" />
      </div>
      <div class="border-l-2 border-r-2">
        <img class="p-4" :src="img[Math.floor(Math.random() * 2)]" alt="" />
      </div>
      <div>
        <img class="p-4" :src="img[Math.floor(Math.random() * 2)]" alt="" />
      </div>
    </div>
  </main>
</template>
