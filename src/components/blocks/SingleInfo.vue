<script setup lang="ts">
import { Info } from '@/types';

const props = defineProps<{
  info: Partial<Info>;
}>();


</script>
<template>
    
      <div class="single-info | flex items-center gap-em-05">
        <span class="single-info__label | flex items-center gap-em-025 ">
          <span class="material-symbols-outlined text-accent-color" aria-hidden="true"
          v-if="info.icon">{{ info.icon }}</span>

          <span class="font-bold text-accent-color"
            :class="{'visually-hidden' : info.hiddenLabel}">
            {{ info.label }}: 
          </span>
        </span>
        <a v-if="info.link" 
          :href="info.link"
          class="single-info__value" 
          target="_blank" 
          rel="external">
            {{ info.value }}
        </a>
        <span v-else class="single-info__value">
            {{ info.value }}
        </span>
      
      </div>
    
</template>