<!-- https://tailwindui.com/components/application-ui/overlays/modals -->

<!-- This example requires Tailwind CSS v2.0+ -->
<template>
  <TransitionRoot as="template" :show="open">
    <Dialog as="div" class="fixed z-10 inset-0 overflow-y-auto" @close="open = false">
      <div class="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
        <TransitionChild as="template" enter="ease-out duration-300" enter-from="opacity-0" enter-to="opacity-100" leave="ease-in duration-200" leave-from="opacity-100" leave-to="opacity-0">
          <DialogOverlay class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
        </TransitionChild>

        <!-- This element is to trick the browser into centering the modal contents. -->
        <span class="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>
        <TransitionChild as="template" enter="ease-out duration-300" enter-from="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95" enter-to="opacity-100 translate-y-0 sm:scale-100" leave="ease-in duration-200" leave-from="opacity-100 translate-y-0 sm:scale-100" leave-to="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95">
          <div class="sm:align-middle mb-20 inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:max-w-lg sm:w-full">
            <div class="bg-zinc-900 px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
              <div class="sm:flex sm:items-start">
                <div class="mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full //bg-red-900 border-2 border-zinc-400 sm:mx-0 sm:h-10 sm:w-10">
                  <EmojiHappyIcon v-if="/won|draw/.test(props.data.title)" class="h-6 w-6 text-green-400" aria-hidden="true" />
                  <EmojiSadIcon v-if="/lost|draw/.test(props.data.title)" class="h-6 w-6 text-orange-400" aria-hidden="true" />
                </div>
                <div class="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                  <DialogTitle as="h3" class="text-lg leading-6 font-medium text-white">
										{{props.data.title}}
                  </DialogTitle>
                  <div class="mt-2">
                    <p class="text-sm text-slate-400">
											{{props.data.message}}
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div class="bg-zinc-900 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
              <button type="button" @click="open = false" class="bg-red-600 w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 text-base font-medium text-white hover:bg-red-700 focus:outline-none sm:ml-3 sm:w-auto sm:text-sm">
								{{props.data.button}}
              </button>
            </div>
          </div>
        </TransitionChild>
      </div>
    </Dialog>
  </TransitionRoot>
</template>

<script setup>
	import { computed, ref } from "vue";
	import { Dialog, DialogOverlay, DialogTitle, TransitionChild, TransitionRoot } from '@headlessui/vue'
	import { EmojiSadIcon, EmojiHappyIcon } from '@heroicons/vue/outline'

	const props = defineProps({
		data: Object,
		open: Boolean
	})
</script>