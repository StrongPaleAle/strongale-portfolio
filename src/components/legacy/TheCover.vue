<script setup lang="ts">
import { Mask } from '@/types';
import { ref, onMounted } from "vue";
import CoverLayer from './CoverLayer.vue';
import MasksData from '../../data/masks.json';
import {gsap} from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const masks = ref<Mask[]>(MasksData);
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
    document.addEventListener('click', function() {
        document.documentElement.requestFullscreen();
    });
    
    let orientation = window.matchMedia("(orientation: portrait)").matches;
    let rotationConst = orientation ? 90 : 0;
    console.log(rotationConst);
    masks.value.forEach((mask) => {
        let index = mask.id;
        //console.log(index);
        const layerDuration = 1.125 - (0.75 - index * 0.125);
        const layerDelay = 1 - index * 0.2;
        
        const layerScale = 1 + (index * 0.2);
        const layerstartScale = layerScale + (masksLength - index)
        const layerRotation = 180 - ((180 * index) / masksLength) + rotationConst;
        const startingOpacity = 1 - (1 - index * 0.1);
        
        const trigger = `#mask-${mask.id}`;
        gsap.ticker.fps(60);
        const first = gsap.timeline({});
        first.fromTo(trigger, {
            scale: layerstartScale,
            
        },{
            duration: layerDuration,
            delay: layerDelay + 2,
            scale: layerScale, 
            ease: "sine",
        
        });
        first.fromTo(trigger, 
            {
                rotation: layerRotation,
                y: 0,
                scale: layerScale
            },
            {
                rotation: -180,
                y: -520 * ((index + 1) / 2.5) - (40 * (index + 1) * 2),
                scale: layerScale - (masksLength - index) * 0.025,
                duration: 10,
                delay: 2 + layerDelay / 2, 
                ease: "sine",
            });
        // gsap scrolltrigger for the mask
        
            
            // const layerScroll = gsap.timeline({
            //     immediateRender: false,
            //     overwrite: 'auto',
            //     scrollTrigger: {
            //     trigger: 'body',
            //     start: 'top',
            //     end: 'bottom',
            //     scrub: 2
            //     }
            // });
        
            // layerScroll.fromTo(trigger, 
            // {
            //     rotation: layerRotation,
            //     y: 0
            // },
            // {
            //     rotation: layerRotation - 90,
            //     y: -300 * index - (60 * index * 2),
            //     ease: "none",
            // });
        
        
        
    });

});


//

</script>
<template>
    <div id="cover">
        
        
                
                <CoverLayer
                v-for="mask in masks"
                
                :mask="mask"
                ></CoverLayer>
            
        
    
        
            
            
        
    </div>
    
    
    
    
</template>