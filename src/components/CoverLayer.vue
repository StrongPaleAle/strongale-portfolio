<script setup lang="ts">
import { Mask } from '@/types';


const props = defineProps<{
  mask: Mask;
}>();


  




</script>
<template>
    
    <div class="cover-layer" :id="`mask-${mask.id}`" :data-mask="mask.id">
        <div class="cover-layer-shadow"></div>
        <div class="cover-layer-mask"></div>
    </div>
</template>
