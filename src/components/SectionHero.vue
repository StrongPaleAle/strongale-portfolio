<script setup lang="ts">
import { ref, onMounted } from 'vue';
//import { navObserver } from '../utils/utils';
import TheLogo from './TheLogo.vue';
import { options } from "../utils/options";
import {gsap} from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const sectionWrapper = ref<HTMLElement | null>(null);
const canvasEl = ref<HTMLCanvasElement | null>(null);
const divider = ref<HTMLElement | null>(null);
onMounted(() => {
    
    if (canvasEl.value) {
        const canvas = canvasEl.value;
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;

        const context = canvas.getContext("2d");
        const frameCount = 125;
       
        gsap.registerPlugin(ScrollTrigger);
        gsap.ticker.fps(30);    
        
        const currentFrame = (index) => `/assets/images/bg/${(index + 1).toString()}.jpg`;

        const images:HTMLImageElement[] = [];
        let cave = { frame: 0 };
        console.log(options.webp);
        for (let i = 0; i < frameCount; i++) {
            const img = new Image();
            img.src = currentFrame(i);
            //console.log(currentFrame(i));
            images.push(img);
        }
        
        gsap.to(cave, {
            frame: 0,
            snap: "frame",
            ease: "none",
            onUpdate: render,
        });
        gsap.to(cave, {
            frame: frameCount - 1,
            snap: "frame",
            ease: "none",
            scrollTrigger: {
                trigger: '#hero',
                start: 'top top',
                end: 'bottom 30%',
                markers: true,
                scrub: 1.5,
                
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
    if(divider.value){
        const aboutDivider = divider.value;
        gsap.to(aboutDivider, {
            scrollTrigger: {
                trigger: '#hero',
                endTrigger: '#about',
                start: 'top top',
                end: 'bottom 30%',
                markers: true,
                scrub: 1.5,
                
            },
            x: '-20vw',
            y: '-20vw',
            rotate: 20,
            ease: "sine",
        });
    }
});

</script>

<template>
<section id="hero" class="section-wrapper" ref="sectionWrapper">
        <canvas id="canvas-cover" class="canvas-cover" ref="canvasEl"></canvas>
        <div class="section-container">
            <div class="cover-content">
                <div class="heading | text-hero">
                    <h1 class="cover-title | mblock-0 animate fade-in">
                        <span class="cover-title-first | block ws-nowrap lp-loose animate rotate-in-x">Hi there!</span>
                        <span class="cover-title-second | text-half block animate rotate-in-x">My name is</span>
                        <span class="cover-title-third | text-box animate scale-in-x" data-variant="accent-bg">
                            
                                <span class="carved animate scale-in-y">A</span>
                                <span class="carved animate scale-in-y">l</span>
                                <span class="carved animate scale-in-y">e</span>
                                <span class="carved animate scale-in-y">s</span>
                                <span class="carved animate scale-in-y">s</span>
                                <span class="carved animate scale-in-y">i</span>
                                <span class="carved animate scale-in-y">o</span>
                            </span>
                        
                        
                    </h1>
                    <p class="cover-subtitle | text-half text-center mblock-0 lh-double animate rotate-in-x">
                        <strong>Web Developer</strong> since 2014.
                    </p>
                </div>
                
                
            </div>
            <div class="cover-logo animate scale-in">
                
               
               <TheLogo></TheLogo>
                
            </div>
        </div>
        <span class="divider" ref="divider"></span>
    </section>
</template>