<script setup>
	import axios from "axios";
	import { computed, ref } from "vue";
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
		// if game finish stop refreshing
		if(game.value.winner != null)
			clearInterval(refresher);

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
	var refresher = setInterval(refresh, 3000);

	// init toast and send toast about loading game
	const toast = useToast();

	const makeAMove = function(x){
		if(game.value.winner != null)
			toast.warning("Game is finished " + modalData.value.title.toLowerCase(), {
				position: "bottom-right",
			});
		else if(props.playerCode == game.value.player){
			// check if field empty

			//show made turn
			game.value.board[~~(x/3)][x%3] = props.playerCode;

			axios("https://api.hryszko.dev/tictactoe/" + props.code)
				.then(function (response) {
					// check player
					if(response.data.player == 1 - props.playerCode){
						toast.warning("Now is not your turn!", {
								position: "bottom-right",
								timeout: 1500
						});
						refresh()
					}
					else{
						let url = "https://api.hryszko.dev/tictactoe/" + props.code + "/" + x;
						axios.put(url).catch(function (e) {
							toast.warning("This field is already occupied!", {
								position: "bottom-right",
								timeout: 1500
							});
						});
					}
				})

		}
		else{
			// not they turn
			toast.warning("Now is not your turn!", {
					position: "bottom-right",
					timeout: 1500
			});
		}
	}

	// show starting toast
	if(props.playerCode == 1)
		toast.success("Tell your friend that game code is " + props.code + ', your turn!', {
			position: "bottom-right",
			timeout: 5000
		});
	else
		toast.info("Loading game..", {
				position: "bottom-right",
				timeout: 1500
		});

	const modalData = computed(function(){
		if(game.value.winner == -1) 
			return {
				"title": "Game finished with draw",
				"message": "It's a draw!",
				"button": "Close"
			}
		else if(game.value.winner == props.playerCode)
			return {
				"title": "You won!",
				"message": "Congratulations!",
				"button": "Close"
			}
		else
			return {
				"title": "You lost!",
				"message": "You lost :(",
				"button": "Close"
			}
	});

	// function copyCode
	const copyCode = function(){
		navigator.clipboard.writeText(props.code);
		toast.success("Code copied to clipboard", {
			position: "bottom-right",
			timeout: 2000
		});
	}

	// run func in 5 secs
	setTimeout(function(){
		// if not on board are this player mark and now is they turn 
		if(! [].concat(...game.value.board).includes(props.playerCode) && props.playerCode == game.value.player)
			toast.info("Your friend is waiting for you, make a move!", {
				position: "bottom-right",
				timeout: 3000
			});
	}, (1-props.playerCode+1)*10*100); //10000 for player 1 and 20000 for player 2
</script>

<template>



  <main class="w-screen">
		<div v-if="game!=undefined">
			<div class="flex justify-center text-xl">
				Game code:
				<!-- click to copy element -->
				<!-- select text on hover -->
				<span @click="copyCode" class="cursor-pointer ml-1 font-bold underline mb-2">
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

	<Modal :data="modalData" :open="game.winner != null"/>

  </main>

</template>
