<script setup>

const img = [
  new URL("../img/0.png", import.meta.url).href,
  new URL("../img/1.png", import.meta.url).href,
];


//code to copy
	// timer like chess


</script>


<template>
	<main class="container">


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
