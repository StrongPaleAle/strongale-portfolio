<script setup lang="ts">
import {ref, onMounted} from 'vue';
import { options } from "../utils/options";
import {gsap} from 'gsap';

const tooltip = ref<HTMLElement | null>(null);
const tooltipText = ref<string>('');

onMounted(() => {

    gsap.set(tooltip.value, {xPercent: -40, yPercent: 60});

    let xTo = gsap.quickTo(tooltip.value, "x", {duration: 0.6, ease: "power3"}),
        yTo = gsap.quickTo(tooltip.value, "y", {duration: 0.6, ease: "power3"});

    window.addEventListener("mousemove", e => {
    // xTo(e.pageX);
    // yTo(e.pageY);
    xTo(e.clientX);
    yTo(e.clientY);
    });
   const tooltips = document.querySelectorAll('[data-tooltip]');
    tooltips.forEach((item) => {
         item.addEventListener('mouseenter', (evt) => {
              tooltipText.value = item.getAttribute('data-tooltip') || '';
              if (!options.canHover) {
                  setTimeout(() => {
                      tooltipText.value = '';
                  }, 1000);
              }
              
         });
         item.addEventListener('mouseleave', () => {
            
                tooltipText.value = '';
            
         });
    });
});

</script>
<template>
    <span aria-hidden="true" class="tooltip" ref="tooltip" :class="{'active': tooltipText.length > 0}">
        {{ tooltipText }}
    </span>
</template>