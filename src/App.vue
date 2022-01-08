<script setup>
	import {ref} from "vue";

	const mobileOpen = ref(false)

	// random set color
	document.documentElement.style.setProperty('--primary-color', "#" + Math.floor(Math.random() * 16777215).toString(16))
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

</style>