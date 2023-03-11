<script setup lang="ts">
import { Mask } from '@/types';
import { ref, onMounted } from "vue";
import CoverLayer from './CoverLayer.vue';
import MasksData from '../data/masks.json';
import {gsap} from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const masks = ref<Partial<Mask>[]>(MasksData);
//let shadows = ref<number>(masks.value.length * 3);
const masksObj = JSON.parse(JSON.stringify(masks.value));

const masksLength = masksObj.length;

//console.log(masksObj);

gsap.registerPlugin(ScrollTrigger);

onMounted(() => {
    const scrollDistance = window.pageYOffset || (document.documentElement || document.body.parentNode || document.body).scrollTop;
    //console.log(scrollDistance);
    gsap.to('.cover-overlay', {
        duration: 1,
        delay: 0.5,
        scale: 1.5,
        ease: "none",
    });
    masksObj.forEach((mask) => {
        let index = mask.id;
        //console.log(index);
        const layerDuration = 1.125 - (0.75 - index * 0.125);
        const layerDelay = 1 - index * 0.1;
        const layerScale = index - 0.75;
        const layerRotation = 180 - ((180 * index) / masksLength);
        const startingOpacity = 1 - index * 0.5;
        
        const trigger = `#mask-${mask.id}`;
        const first = gsap.timeline({});
        first.from(trigger, {
            duration: layerDuration,
            delay: layerDelay,
            scale: 0,
            rotation: 180,
            ease: "none",
        });
        // gsap scrolltrigger for the mask
        const layerScroll = gsap.timeline({
            immediateRender: false,
            overwrite: 'auto',
            scrollTrigger: {
            id: 'trigger',
            trigger: 'body',
            start: 'top',
            end: 'bottom',
            scrub: 2
            }
        });
        setTimeout(() => {
            layerScroll.to(trigger, {
                duration: 1,
                scale: layerScale * 2,
                rotation: layerRotation - 90,
                ease: "none",
            });
        }, 500);
        
        
    });

});


//

</script>
<template>
    <div id="cover" class="cover-wrapper">
        <div class="cover-overlay"></div>
    
        
            <div id="cover-layer-wrapper" class="cover-layer-wrapper">
                
                <CoverLayer
                v-for="mask in masks"
                :key="mask.id"
                :mask="mask"
                ></CoverLayer>
                
                
                
                
            </div>
            
        
    </div>
    
    
    
    
</template>