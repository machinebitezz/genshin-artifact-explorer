<template>
  <div>
    <h1 class="text-2xl font-semibold mb-3">
      {{ t('name') }}
    </h1>

    <div class="flex justify-center items-center gap-2">
      <SimpleButton @click="openImportDialog">
        {{ t('ui.import') }}
      </SimpleButton>
    </div>

    <ArtifactList :data="items" />
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { ArtifactList } from '@/components/ArtifactList'
import { type GOOD } from '@/types/GOOD'
import { useI18n } from 'vue-i18n'
import SimpleButton from '@/components/SimpleButton.vue'
import ImportDialog from '@/components/dialogs/ImportDialog.vue'
import { useModal } from 'vue-final-modal'

const { t } = useI18n()

const itemsJSON = ref('')

const items = computed<GOOD>(() => {
  if (itemsJSON.value) {
    return JSON.parse(itemsJSON.value)
  }

  return {}
})

const { open, close } = useModal({
  component: ImportDialog,
  attrs: {
    onConfirm: () => close()
  }
})

function openImportDialog() {
  open()
}
</script>