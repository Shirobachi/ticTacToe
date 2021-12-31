<template>
	<nav class="mr-8 ml-8">

  <ul>
    <li><strong><router-link to="/">⏱️ <u>T</u>ime <u>i</u>s <u>t</u>icking!</router-link></strong></li>
  </ul>
		<ul>
			<li v-for="route in $router.options.routes" :key="route.path" >
				<router-link :to="route.path">
					{{ route.name }}
				</router-link>
			</li>
		</ul>
	</nav>

  <main class="container">
		<router-view></router-view>

		<!-- footer -->
		<div class="flex justify-center w-100">
			<p class="text-center">Project made
				<div class="hidden md:block ml-1">in 
					<a href="https://github.com/shirobachi/timeisticking">
						<img class="md:inline" src="https://wakatime.com/badge/user/b74ba3c5-2883-43ca-9833-799f8a50840a/project/ded41332-e8a2-4fe8-9c63-cfa6d642643f.svg" alt="wakatime">
					</a>
				</div>
				<p class="ml-1">
					with 🫀 by <a href="https://github.com/shirobachi">Shirobachi</a>
				</p>
			</p>
		</div>
	</main>
</template>

<style>
	@import url(https://unpkg.com/tailwindcss@^1.0/dist/tailwind.min.css);
	@import url(https://unpkg.com/@picocss/pico@latest/css/pico.min.css);
</style>
