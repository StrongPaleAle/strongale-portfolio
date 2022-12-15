<script setup lang="ts">
import { Mask } from '@/types';
import { ref } from "vue";
import CoverLayer from './CoverLayer.vue';
import MasksData from '../data/masks.json';

const masks = ref<Partial<Mask>[]>(MasksData);


</script>
<template>
    <section id="cover">
        <div class="cover-layer-wrapper">
            
            <CoverLayer
             v-for="mask in masks"
            :key="mask.id"
            :mask="mask"
            ></CoverLayer>
        </div>
        
    </section>
    
    
</template>