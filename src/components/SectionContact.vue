<script setup lang="ts">
import ButtonLink from './blocks/ButtonLink.vue';
import CircleLink from './blocks/CircleLink.vue';
import { ref, onMounted } from "vue";
import { options } from "../utils/options";
import {gsap} from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const canvasFt = ref<HTMLCanvasElement | null>(null);
const dividerFt = ref<HTMLElement | null>(null);
let folderPath = ref(`/assets/images/foot/${ options.orientation}/${options.setResolution()}/`);
let frameCount = ref(options.orientation === 'landscape' ? 103 : 70);
onMounted(() =>{
    window.addEventListener('resize', () => {
        folderPath.value = `/assets/images/foot/${ options.orientation}/${options.setResolution()}/`;
        frameCount.value = options.orientation === 'landscape' ? 103 : 70;
    });
    if (canvasFt.value) {
        
        const canvas = canvasFt.value;
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;

        const context = canvas.getContext("2d");
        
       
        gsap.registerPlugin(ScrollTrigger);
        gsap.ticker.fps(30);    
        
        const currentFrame = (index) => `${folderPath.value + (index + 1).toString()}.jpg`;

        const images:HTMLImageElement[] = [];
        let cave = { frame: 0 };
        //console.log(options.webp);
        for (let i = 0; i < frameCount.value; i++) {
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
            frame: frameCount.value - 1,
            snap: "frame",
            ease: "none",
            scrollTrigger: {
                trigger: '#contacts',
                start: '-=30%',
                end: 'bottom bottom',
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
    if(dividerFt.value && !options.prefersReducedMotion){
        const footDivider = dividerFt.value;
        gsap.to(footDivider, {
            scrollTrigger: {
                trigger: '#contacts',
                start: 'top-=50% bottom',
                end: 'bottom bottom',
                scrub: 1.5,
                
            },
            x: '15vmax',
            y: '-15vmax',
            rotate: 10,
            ease: "sine",
        });
    }
})
</script>

<template>
<section id="contacts" class="section-wrapper" :style="`background-image: url('${folderPath + frameCount.toString()}.jpg');`">
    <span class="divider divider-foot" ref="dividerFt">
        <span></span>
    </span>
        <canvas id="canvas-foot" class="canvas-cover" ref="canvasFt" v-if="!options.prefersReducedMotion"></canvas>
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
