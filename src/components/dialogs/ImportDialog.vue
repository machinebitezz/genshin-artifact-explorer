<template>
  <VueFinalModal
    class="flex justify-center items-center w-full"
    content-class="bg-zinc-800 shadow-lg p-6 rounded-xl w-4/6 max-w-[48rem] min-w-[20rem] h-[40rem] flex flex-col items-center justify-between text-center"
    overlay-transition="vfm-fade"
    content-transition="vfm-fade"
  >
    <h2 class="text-3xl font-semibold row-span-1">
      {{ t('ui.importDialog.title') }}
    </h2>

    <div class="flex flex-col justify-center items-center w-full">
      <div class="mb-3">
        {{ t('ui.importDialog.via1') }}
      </div>

      <div class="w-full">
        <label
          tabindex="0"
          for="file"
          class="inline-flex justify-center items-center w-11/12 max-w-[24rem] h-32 bg-zinc-700 rounded-xl border-4 border-dashed"
          @keydown.enter.space="handleLabelKeyboardEvent"
        >
          <input
            id="file"
            type="file"
            hidden
          >
          <span>{{ t('ui.importDialog.filePrompt') }}</span>
        </label>
      </div>

      <div class="my-3">
        {{ t('ui.importDialog.via2') }}
      </div>

      <textarea class="w-11/12 max-w-[24rem] h-32 p-2 bg-zinc-600 border border-zinc-700 rounded-xl" />
    </div>

    <p class="text-xs">
      {{ t('ui.importDialog.tool') }} 
      <a
        target="_blank"
        rel="noreferrer"
        href="https://github.com/Andrewthe13th/Inventory_Kamera"
        class="text-cyan-400 hover:text-cyan-300 underline"
      >
        Inventory Kamera
      </a>
    </p>

    <SimpleButton @click="$emit('confirm')">
      Save and Close
    </SimpleButton>
  </VueFinalModal>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import SimpleButton from '@/components/SimpleButton.vue'
import { VueFinalModal } from 'vue-final-modal'

defineEmits(['confirm'])

const { t } = useI18n()

function handleLabelKeyboardEvent() {
  (document.querySelector('#file') as HTMLInputElement)?.click()
}
</script>