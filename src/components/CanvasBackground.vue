<script setup lang="ts">
import { ref, onMounted } from "vue";
import { options } from "../utils/options";
import {gsap} from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const canvasEl = ref<HTMLCanvasElement | null>(null);

onMounted(() =>{
    if (canvasEl.value) {
        const canvas = canvasEl.value;
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;

        const context = canvas.getContext("2d");
        const frameCount = 564;
       
        gsap.registerPlugin(ScrollTrigger);
        gsap.ticker.fps(60);    
        
        const currentFrame = (index) => `/assets/images/bg/retina/webp60/${(index + 1).toString()}.webp`;

        const images:HTMLImageElement[] = [];
        let cave = { frame: 0 };

        for (let i = 0; i < frameCount; i++) {
            const img = new Image();
            img.src = currentFrame(i);
            console.log(currentFrame(i));
            images.push(img);
        }
        gsap.to(cave, {
            frame: frameCount - 1,
            snap: "frame",
            ease: "none",
            scrollTrigger: {
                scrub: 2,
                
            },
            onUpdate: render,
        });

        function render() {
            if (context !== null) {
            context.canvas.width = images[0].width;
            context.canvas.height = images[0].height;

            context.clearRect(0, 0, canvas.width, canvas.height);
            context.drawImage(images[cave.frame], 0, 0);
            }
        }
    }
})

</script>

<template>
    <canvas id="canvas-cover" class="canvas-cover" ref="canvasEl"></canvas>
</template>