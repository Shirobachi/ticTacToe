<script setup>
	const props = defineProps({
		disabled: Boolean
	})
</script>

<template>
	
	<button :disabled="props.disabled" class="
		bg-primary-color
		hover:opacity-75
		text-white
		px-5
		py-4
		text-sm
		md:text-lg
		rounded-md
		font-semibold
		w-full
		mx-1
		disabled:opacity-50
		">
		<slot>Button has not content!</slot>
	</button>

</template>