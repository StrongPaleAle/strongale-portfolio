<script setup lang="ts">
import { ref, onMounted } from 'vue';
//import { navObserver } from '../utils/utils';
import TheLogo from './TheLogo.vue';

const sectionWrapper = ref<HTMLElement | null>(null);

onMounted(() => {
    //navObserver.observe(sectionWrapper.value as HTMLElement);
});

</script>

<template>
<section id="hero" class="section-wrapper" ref="sectionWrapper">
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
    </section>
</template>