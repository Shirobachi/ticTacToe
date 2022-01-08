<script setup>
	import axios from "axios";
	import { ref } from "vue";
  import { useToast } from "vue-toastification";
	import Modal from "./simple/Modal.vue";

	// props
	const props = defineProps({
		code: Number,
		playerCode: Number,
	});

	// variables
		const game = ref({
			board: [
				[-1, -1, -1],
				[-1, -1, -1],
				[-1, -1, -1],
			]
		});

	// images
	const img = [
		new URL("../img/empty.png", import.meta.url).href,
		new URL("../img/0.png", import.meta.url).href,
		new URL("../img/1.png", import.meta.url).href,
	];

	const refresh = function () {
		let url = "https://api.hryszko.dev/tictactoe/" + props.code;
		console.log(url)
		axios(url)
			.then(function (response) {
				game.value = response.data;
				// setTimeout(function() { refresh(); }, 1000);
			})
			.catch(function (e) {
				console.log(e);
				// setTimeout(function() { refresh(); }, 1000);
			});
	};
	refresh()
	// add interval to var and close when finish game
	setInterval(refresh, 3000);

	// init toast and send toast about loading game
	const toast = useToast();

	const makeAMove = function(x){
		if(props.playerCode == game.value.player){
			// check if field empty
			let url = "https://api.hryszko.dev/tictactoe/" + props.code + "/" + x;

			axios.put(url).catch(function (e) {
				toast.warning("This field is already occupied!", {
					position: "bottom-right",
					timeout: 1500
				});
			});
		}
		else{
			// not they turn
			toast.warning("Now is not your turn!", {
					position: "bottom-right",
					timeout: 1500
			});
		}
	}

	if(props.playerCode == 1)
		toast.success("Tell your friend that game code is " + props.code, {
			position: "bottom-right",
			timeout: 5000
		});
	else
		toast.info("Loading game..", {
				position: "bottom-right",
				timeout: 1500
		});
</script>

<template>
  <main class="w-screen">

		{{game}}|
		{{props.playerCode}}

		<div v-if="game!=undefined">
			<div class="flex justify-center">
				Game code:
				<span class="ml-1 font-bold underline">
					{{props.code}}
				</span>
			</div>

			<div class="text-4xl flex justify-center">
				<div>
					<img width="200" height="200" class="p-4" @click="makeAMove(3*0+0)" :src="img[game.board[0][0]+1]" alt="" />
				</div>
				<div class="border-l-2 border-r-2">
					<img width="200" height="200" class="p-4" @click="makeAMove(3*0+1)" :src="img[game.board[0][1]+1]" alt="" />
				</div>
				<div>
					<img width="200" height="200" class="p-4" @click="makeAMove(3*0+2)" :src="img[game.board[0][2]+1]" alt="" />
				</div>
			</div>
			<div class="text-4xl flex justify-center">
				<div class="border-t-2 border-b-2">
					<img width="200" height="200" class="p-4" @click="makeAMove(3*1+0)" :src="img[game.board[1][0]+1]" alt="" />
				</div>
				<div class="border-t-2 border-b-2 border-l-2 border-r-2">
					<img width="200" height="200" class="p-4" @click="makeAMove(3*1+1)" :src="img[game.board[1][1]+1]" alt="" />
				</div>
				<div class="border-t-2 border-b-2">
					<img width="200" height="200" class="p-4" @click="makeAMove(3*1+2)" :src="img[game.board[1][2]+1]" alt="" />
				</div>
			</div>
			<div class="text-4xl flex justify-center">
				<div>
					<img width="200" height="200" class="p-4" @click="makeAMove(3*2+0)" :src="img[game.board[2][0]+1]" alt="" />
				</div>
				<div class="border-l-2 border-r-2">
					<img width="200" height="200" class="p-4" @click="makeAMove(3*2+1)" :src="img[game.board[2][1]+1]" alt="" />
				</div>
				<div>
					<img width="200" height="200" class="p-4" @click="makeAMove(3*2+2)" :src="img[game.board[2][2]+1]" alt="" />
				</div>
			</div>
		</div>
  </main>

</template>
