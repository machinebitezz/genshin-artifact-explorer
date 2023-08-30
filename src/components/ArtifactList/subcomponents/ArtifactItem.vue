<template>
  <div
    :class="{
      ['m-2 grid grid-cols-12 col-span-4 items-center rounded-lg py-2']: true,
      ['bg-gradient-to-tr from-amber-600 to-yellow-600']: artifact.rarity === 5,
      ['bg-gradient-to-tr from-purple-700 to-violet-500']: artifact.rarity === 4,
      ['bg-gradient-to-tr from-green-700 to-green-500']: artifact.rarity === 3,
      ['bg-gradient-to-tr from-blue-700 to-blue-500']: artifact.rarity === 2,
      ['bg-gradient-to-tr from-slate-600 to-slate-400']: artifact.rarity === 1,
    }"
  >
    <div class="col-span-3 flex items-center justify-center">
      <img :src="imgURI">
    </div>

    <div class="col-span-9">
      <div>
        {{ t(`artifactKey.${artifact.setKey}`) }} - {{ t(`slot.${artifact.slotKey}`) }}
      </div>

      <div>
        {{ t('ui.mainStat') }}: {{ t(`statKey.${artifact.mainStatKey}`) }} - {{ t('ui.level') }} {{ artifact.level }}
      </div>

      <div v-if="artifact.substats.length !== 0">
        {{ t('ui.substats') }}: <br>
        <div class="grid grid-cols-2 grid-rows-2">
          <div
            v-for="substat, index in artifact.substats"
            :key="index"
          >
            {{ index + 1 }}: {{ t(`statKey.${substat.key}`) }}: {{ substat.value }}{{ substat.key.endsWith('_') ? '%' : '' }}
          </div>
        </div>
      </div>

      <div v-if="hasCrit">
        {{ t('ui.critValue') }}: {{ critValue }}
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { type Artifact } from '../../../types/Artifact'
import { useI18n } from 'vue-i18n'

interface Props {
  artifact: Artifact
}

const crValues = [4.7, 6.0,	7.3, 8.6,	9.9, 11.3, 12.6, 13.9, 15.2, 16.6, 17.9, 19.2, 20.5, 21.8, 23.2, 24.5, 25.8, 27.1, 28.4, 29.8, 31.1]
const cdValues = [9.3, 12.0, 14.6, 17.3, 19.9, 22.5, 25.2, 27.8, 30.5, 33.1, 35.7, 38.4, 41.0, 43.7, 46.3, 49.0, 51.6, 54.2, 56.9, 59.5, 62.2]

const props = defineProps<Props>()
const { t } = useI18n()

const imgURI = computed(() => {
  const keyToArg = {
    flower: 'flower-of-life',
    plume: 'plume-of-death',
    sands: 'sands-of-eon',
    goblet: 'goblet-of-eonothem',
    circlet: 'circlet-of-logos'
  }

  const setName = props.artifact.setKey.split(/(?=[A-Z'])/).map(item => item.toLowerCase()).join('-')
  const slot = keyToArg[props.artifact.slotKey as keyof typeof keyToArg]

  return `https://api.genshin.dev/artifacts/${setName}/${slot}.png`
})

const hasCrit = computed(() => {
  return props.artifact.substats.reduce((acc, substat) => {
    console.log(t(`statKey.${substat.key}`))
    return acc || substat.key.startsWith('crit')
    
  }, false) || props.artifact.mainStatKey.startsWith('crit')
})

function getCv(statKey: string, stat: number) {
  if (statKey === 'critDMG_') {
    return stat 
  } else if (statKey === 'critRate_') {
    return stat * 2
  } else {
    return 0
  }
}

const critValue = computed(() => {
  let cv = 0
  let stat = 0

  if (props.artifact.mainStatKey === 'critRate_') {
    stat = crValues[props.artifact.level]
  } else if (props.artifact.mainStatKey === 'critDMG_') {
    stat = cdValues[props.artifact.level]
  }

  cv += getCv(props.artifact.mainStatKey, stat)

  props.artifact.substats.forEach(substat => {
    cv += getCv(substat.key, substat.value)
  })

  return cv
})
</script>