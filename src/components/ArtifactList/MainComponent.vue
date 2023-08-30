<template>
  <ul class="grid grid-cols-12">
    <ArtifactItem
      v-for="(artifact, index) in data.artifacts"
      :key="index"
      :artifact="artifact"
    />
  </ul>
</template>

<script setup lang="ts">
import { GOOD } from '../../types/GOOD';
import ArtifactItem from './subcomponents/ArtifactItem.vue'

interface Props {
  data: GOOD
}

defineProps<Props>()
</script>
