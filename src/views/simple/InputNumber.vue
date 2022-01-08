<script setup>

	import { computed, ref } from "vue";

	const props = defineProps({
		min: Number,
		max: Number,
		placeholder: String,
		value: Number
	})
	
	const emit = defineEmits(["update:value"]);
	const value = computed({
		get(){
			return props.value;
		},
		set(newValue){
			emit("update:value", newValue);
		},
	});
</script>

<template>
	<input 
		v-model="val"
		type="number" 
		:placeholder="props.placeholder"
		:min="props.min"
		:max="props.max"
		class="
		w-10/12 focus:w-11/12 h-12
		px-4
		text-sm
		border
		rounded-lg
		transition-all
		duration-300
		bg-gray-900
		text-gray-300
		border-gray-600
		focus:border-green-500
		focus:outline-none
		focus:ring
		focus:ring-primary
		placeholder-gray-400
		focus:ring-opacity-40"/>
</template>

<style>
	/* Chrome, Safari, Edge, Opera */
	input::-webkit-outer-spin-button,
	input::-webkit-inner-spin-button {
		-webkit-appearance: none;
		margin: 0;
	}

	/* Firefox */
	input[type=number] {
		-moz-appearance: textfield;
	}
</style>