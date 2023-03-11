<script setup lang="ts">
import { InfoBlock } from '@/types';

const props = defineProps<{
  block: Partial<InfoBlock>;
}>();

</script>
<template>
    <div class="flex justify-center lh-tight text-large">
      <div class="flex items-center gap-em-05" v-for="item in block.content">
        <span class="material-symbols-outlined text-accent-color" aria-hidden="true"
          v-if="item.icon">{{item.icon}}</span>
        <span class="font-bold text-accent-color"
        :class="{'visually-hidden' : item.hiddenLabel}">{{ item.label }}: </span>
        <span>{{ item.value }}</span>
      
      </div>
    </div>
    
</template>