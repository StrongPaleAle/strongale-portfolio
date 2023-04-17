<script setup lang="ts">
import { Mask } from '@/types';
import Masks from '../data/masks.json';

const masks = Masks as Mask[];

</script>
<template>
    <svg height="0" width="0" view-box="0 0 2 2" id="cover-mask">
      <defs>
        <clipPath v-for="mask in Masks" :id="`maskpath-${mask.id}`" clipPathUnits="objectBoundingBox">
          <path :d="mask.svgcode"/>
        </clipPath>
      </defs>
    </svg>
</template>