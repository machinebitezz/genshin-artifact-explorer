<template>
  <div>
    <h1 class="text-2xl font-semibold mb-3">
      {{ t('name') }}
    </h1>

    <textarea
      v-model="itemsJSON"
      class="w-96 h-32 border border-gray-500 text-neutral-900"
    />

    <ArtifactList :data="items" />
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { ArtifactList } from '../components/ArtifactList'
import { type GOOD } from '../types/GOOD'
import { useI18n } from 'vue-i18n';

const { t } = useI18n()

const itemsJSON = ref('')

const items = computed<GOOD>(() => {
  if (itemsJSON.value) {
    return JSON.parse(itemsJSON.value)
  }

  return {}
})
</script>
