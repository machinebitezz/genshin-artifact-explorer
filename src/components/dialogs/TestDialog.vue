<template>
  <div>
    Test dialog

    <button @click="$emit('ok')">
      ok
    </button>

    <button @click="$emit('close')">
      close
    </button>
  </div>
</template>

<script setup lang="ts">
defineEmits(['ok', 'close'])
</script>