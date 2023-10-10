<script setup lang="ts">
import { Mask } from '../../types';


const props = defineProps<{
  mask: Mask;
}>();


  




</script>
<template>
    <div class="cover-layer" :id="`mask-${mask.id}`" :data-mask="mask.id">
        <div class="cover-layer-mask"></div>
    </div>
    <svg height="0" width="0" :view-box="`0 0 1 1`">
      <defs>
        <clipPath :id="`maskpath-${mask.id}`" clipPathUnits="objectBoundingBox">
          <path :d="mask.path"/>
        </clipPath>
      </defs>
    </svg>
</template>
