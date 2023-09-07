<script setup lang="ts">
import { ref, onMounted } from "vue";
import { options } from "../utils/options";
import {gsap} from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const canvasEl = ref<HTMLCanvasElement | null>(null);

onMounted(() =>{
    
})
</script>

<template>
    <canvas id="canvas-cover" class="canvas-cover" ref="canvasEl"></canvas>
</template>