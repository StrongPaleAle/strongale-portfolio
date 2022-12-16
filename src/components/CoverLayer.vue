<script setup lang="ts">
import { Mask } from '@/types';
defineProps<{
  mask: Mask;
}>();

</script>
<template>
    <div class="cover-layer" :id="`mask-${mask.id}`">
        <div class="cover-layer-shadow"></div>
        <div class="cover-layer-mask"></div>
    </div>
    <svg height="0" width="0" view-box="0 0 2 2">
      <defs>
        <clipPath :id="`maskpath-${mask.id}`" clipPathUnits="objectBoundingBox">
          <path :d="mask.svgcode"/>
        </clipPath>
      </defs>
    </svg>
</template>
