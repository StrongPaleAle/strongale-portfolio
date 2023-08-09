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
    //const scrollDistance = window.scrollY || (document.documentElement || document.body.parentNode || document.body).scrollTop;
    //console.log(scrollDistance);
    // gsap.to('.cover-overlay', {
    //     duration: 1,
    //     delay: 0.5,
    //     scale: 1.5,
    //     ease: "none",
    // });
    let orientation = window.matchMedia("(orientation: portrait)").matches;
    let rotationConst = orientation ? 90 : 0;
    console.log(rotationConst);
    masksObj.forEach((mask) => {
        let index = mask.id;
        //console.log(index);
        const layerDuration = 1.125 - (0.75 - index * 0.125);
        const layerDelay = 1 - index * 0.2;
        
        const layerScale = index - 1.25;
        const layerstartScale = layerScale + (masksLength - index)
        const layerRotation = 180 - ((180 * index) / masksLength) + rotationConst;
        const startingOpacity = 1 - (1 - index * 0.1);
        
        const trigger = `#mask-${mask.id}`;
        const first = gsap.timeline({});
        first.fromTo(trigger, {
            scale: layerstartScale,
            opacity: startingOpacity,
        },{
            duration: layerDuration,
            delay: layerDelay,
            scale: layerScale,
            opacity: 1,
            ease: "none",
        });
        // gsap scrolltrigger for the mask
        
            
            const layerScroll = gsap.timeline({
                immediateRender: false,
                overwrite: 'auto',
                scrollTrigger: {
                id: 'trigger',
                trigger: '#cover',
                start: 'top',
                end: 'bottom',
                scrub: 2
                }
            });
        
            layerScroll.fromTo(trigger, 
            {
                scale: layerScale,
                rotation: layerRotation,
            },
            {
                duration: 1,
                scale: layerScale * 3,
                rotation: layerRotation - 90,
                ease: "none",
            });
        
        
        
    });

});


//

</script>
<template>
    <div id="cover">
        
        <div class="cover-wrapper">
            <div id="cover-layer-wrapper" class="cover-layer-wrapper">
                
                <CoverLayer
                v-for="mask in masks"
                :key="mask.id"
                :mask="mask"
                ></CoverLayer>
            </div>
        </div>
        
    
        
            
            
        
    </div>
    
    
    
    
</template>