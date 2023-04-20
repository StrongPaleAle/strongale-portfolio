<script setup lang="ts">


const props = defineProps<{
  icon?: string;
  label: string;
  value: string;
  link?: string;
}>();

</script>
<template>
    
      <div class="flex items-center gap-em-05">
        <span class="material-symbols-outlined text-accent-color" aria-hidden="true"
          v-if="icon">{{icon}}</span>
        <span class="font-bold text-accent-color">{{ label }}: </span>
        
        <a v-if="link" :href="link" target="_blank" rel="external">
            {{ value }}
        </a>
        <span v-else>
            {{ value }}
        </span>
      
      </div>
    
    
</template>