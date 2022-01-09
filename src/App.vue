<script setup>
	import {ref} from "vue";

	const mobileOpen = ref(false)
	const color = ref("#ff0000")

	// random color
	const colors = ['55d423', 'fe8260', 'b078f7', '47cf53', 'd480fc', 'f39f4b', '62ca5b', 'd28677', 'cfb976', 'd684a5', 'fac62d', '66b783', 'e890e9', '45c0cf', 'd9bc0e', 'bb88ea', 'db9343', 'f869cd', '53dc71', 'e1ba1d', '9ec02d', 'edb531', 'f08a2c', '829be0', '5fc869', '53ced1', '55d423', 'fe8260', 'b078f7' ]
	color.value = colors[Math.floor(Math.random() * colors.length)]

	document.documentElement.style.setProperty('--primary-color', '#' + color.value)
</script>

<template>
  <main class="flex flex-col justify-between h-screen">
		<!-- https://tailwindui.com/components/application-ui/overlays/modals -->
		<div class="flex flex-col">
			<div class="flex justify-around my-4">
				<!-- logo -->
				<div>
					<router-link class="text-primary-color mt-3 flex justify-center text-2xl" to="/">TicTacToe!</router-link>
				</div>
				<!-- menu: https://www.section.io/engineering-education/creating-a-responsive-navigation-bar-using-tailwind-css-and-javascript/ -->
				<div>
					<!-- Desktop menu -->
				<div class="hidden md:flex items-center space-x-1">
					<div v-for="route in $router.options.routes" :key="route.path">
						<router-link :to="route.path" active-class="text-green-500 underline-primary-color" 
						class="hover:text-primary-color py-4 px-2 text-gray-500 font-semibold transition duration-300" >
							{{ route.name }}
						</router-link >
					</div>
				</div>

					<!-- Mobile icon -->
					<div @click="mobileOpen=!mobileOpen" class="md:hidden flex items-center mt-3">
						<button class="outline-none mobile-menu-button">
							<svg
			
								class="w-6 h-6 text-gray-500"
								x-show="!showMenu"
								fill="none"
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								viewBox="0 0 24 24"
								stroke="currentColor"
							>
							<path d="M4 6h16M4 12h16M4 18h16"></path>
							</svg>
						</button>
					</div>
				</div>
			</div>
			<!-- Mobile menu -->
			<div v-if="mobileOpen">
				<ul v-for="route in $router.options.routes" :key="route.path" class="block md:hidden">
					<router-link active-class="text-white bg-primary-color font-semibold" :to="route.path" class="hover:bg-primary-color mx-5 mt-2 rounded-lg block text-sm px-2 py-3 transition duration-300">
						{{ route.name }}
					</router-link>
				</ul>
			</div>
		</div>

		<!-- content -->
		<router-view></router-view>

		<!-- footer -->
		<div>
			<hr class="mt-5 mb-1">
			<div class="flex justify-center w-100 mb-5">
				Project made
				<div class="hidden md:block ml-1">in 
					<a href="https://github.com/shirobachi/timeisticking">
						<img class="md:inline" src="https://wakatime.com/badge/user/b74ba3c5-2883-43ca-9833-799f8a50840a/project/ded41332-e8a2-4fe8-9c63-cfa6d642643f.svg" alt="wakatime">
					</a>
				</div>
				<p class="ml-1">
					with 🫀 by <a href="https://github.com/shirobachi">Shirobachi</a>
				</p>
			</div>
		</div>
	</main>

	<!-- github corner -->
	<a href="https://github.com/Shirobachi/ticTacToe" target="_blank" class="github-corner" aria-label="View source on GitHub">
		<svg width="80" height="80" viewBox="0 0 250 250" style="fill:#70B7FD; color:#fff; position: absolute; top: 0; border: 0; right: 0;" aria-hidden="true">
			<path d="M0,0 L115,115 L130,115 L142,142 L250,250 L250,0 Z"></path>
			<path d="M128.3,109.0 C113.8,99.7 119.0,89.6 119.0,89.6 C122.0,82.7 120.5,78.6 120.5,78.6 C119.2,72.0 123.4,76.3 123.4,76.3 C127.3,80.9 125.5,87.3 125.5,87.3 C122.9,97.6 130.6,101.9 134.4,103.2" fill="currentColor" style="transform-origin: 130px 106px;" class="octo-arm"></path>
			<path d="M115.0,115.0 C114.9,115.1 118.7,116.5 119.8,115.4 L133.7,101.6 C136.9,99.2 139.9,98.4 142.2,98.6 C133.8,88.0 127.5,74.4 143.8,58.0 C148.5,53.4 154.0,51.2 159.7,51.0 C160.3,49.4 163.2,43.6 171.4,40.1 C171.4,40.1 176.1,42.5 178.8,56.2 C183.1,58.6 187.2,61.8 190.9,65.4 C194.5,69.0 197.7,73.2 200.1,77.6 C213.8,80.2 216.3,84.9 216.3,84.9 C212.7,93.1 206.9,96.0 205.4,96.6 C205.1,102.4 203.0,107.8 198.3,112.5 C181.9,128.9 168.3,122.5 157.7,114.1 C157.9,116.9 156.7,120.9 152.7,124.9 L141.0,136.5 C139.8,137.7 141.6,141.9 141.8,141.8 Z" fill="currentColor" class="octo-body"></path>
		</svg>
	</a>

</template>

<style>
	:root{
		--primary-color: #ffffff;
	}
	body{
		background-color: #11191f;
		color: #bbc6ce;
	}

	.bg-primary-color{
		background: var(--primary-color);
	}
	.hover\:bg-primary-color:hover{
		background: var(--primary-color);
	}
	.underline-primary-color{
		border-bottom: 2px solid var(--primary-color);
	}
	.hover\:text-primary-color:hover{
		color: var(--primary-color);
	}
	.text-primary-color{
		color: var(--primary-color);
	}

	.github-corner:hover .octo-arm{
		animation:octocat-wave 560ms ease-in-out
	}
	
	@keyframes octocat-wave{
		0%,100%{
			transform:rotate(0)
		}
		20%,60%{
			transform:rotate(-25deg)
		}
		40%,80%{
			transform:rotate(10deg)
		}
	}
		
	@media (max-width:500px){
		.github-corner:hover .octo-arm{
			animation:none
		}
		.github-corner .octo-arm{
			animation:octocat-wave 560ms ease-in-out
		}
	}
</style>