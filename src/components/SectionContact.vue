<script setup lang="ts">
import ButtonLink from './blocks/ButtonLink.vue';
import CircleLink from './blocks/CircleLink.vue';
import { ref, onMounted } from "vue";
import { options } from "../utils/options";
import {gsap} from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const canvasFt = ref<HTMLCanvasElement | null>(null);

onMounted(() =>{
    if (canvasFt.value) {
        const canvas = canvasFt.value;
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;

        const context = canvas.getContext("2d");
        const frameCount = 103;
       
        gsap.registerPlugin(ScrollTrigger);
        gsap.ticker.fps(30);    
        
        const currentFrame = (index) => `/assets/images/bg/foot/${(index + 1).toString()}.jpg`;

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
                trigger: '#contacts',
                start: '-=30%',
                end: 'bottom bottom',
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
})
</script>

<template>
<section id="contacts" class="section-wrapper">
        <canvas id="canvas-foot" class="canvas-cover" ref="canvasFt"></canvas>
        <div class="section-container">
            <div>
                <h2 class="section-title | heading uppercase text-center text-2xl" data-variant="accent-bg">
                    <span class="animate rotate-in-x">Need a web developer?</span>
                    <span class="text-box text-2up animate scale-in-x delay-1" data-variant="accent-bg gradient">
                        <span class="carved animate scale-in-y s-delay-3 animation-list">Don't </span>
                        <span class="carved animate scale-in-y s-delay-3 animation-list">Panic</span>
                    </span>   
                </h2>
                <p class="section-subtitle | text-center text-xlarge content-text lh-loose mb-em-2 | animate fade-in delay-2">
                    Feel free to get in touch! <br>A painless hey is also appreciated.
                </p>
                <nav aria-label="Contacts">
                    <ul class="contact-links |  flex justify-center items-center gap-em-15">
                        <li class="animate show-up s-delay-6 animation-list">
                            <CircleLink 
                                href="mailto:alessio@strongale.it" 
                                icon="#alternate_email" 
                                label="Email" 
                                target="_blank"
                            />
                        </li>
                        <li class="animate show-up s-delay-6 animation-list">
                            <CircleLink 
                                href="https://www.linkedin.com/in/alessio-falchi/" 
                                icon="#icon_linkedin" 
                                label="LinkedIn" 
                                target="_blank"
                            />
        
                        </li>
                        <li class="animate show-up s-delay-6 animation-list">
                            <CircleLink 
                                href="https://github.com/StrongPaleAle" 
                                icon="#icon_github" 
                                label="GitHub" 
                                target="_blank"
                            />
                            
                        </li>
                        <li class="animate show-up s-delay-6 animation-list">
                            <ButtonLink class="text-xlarge" href="https://cv.strongale.it" target="_blank">
                                Read my CV
                            </ButtonLink>
                        </li>
                    </ul>
                </nav>
                
            </div>
        </div>
</section>
</template>
