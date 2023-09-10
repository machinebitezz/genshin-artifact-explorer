<template>
  <button
    :class="{
      ['rounded-full bg-orange-100 text-black font-semibold cursor-pointer']: true,
      ['px-2 py-0.5 text-xs']: size === 'xs',
      ['px-2 py-1 text-sm']: size === 'sm',
      ['px-3 py-2 text-md']: size === 'md',
      ['px-4 py-3 text-lg']: size === 'lg',
      ['px-5 py-4 text-xl']: size === 'xl'
    }"
    @click="$emit('click')"
  >
    <slot />
  </button>
</template>

<script setup lang="ts">
interface Props {
  type?: 'button' | 'reset' | 'submit'
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl'
}

defineEmits(['click'])

withDefaults(defineProps<Props>(), {
  type: 'button',
  size: 'md'
})
</script>