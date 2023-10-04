<script setup lang="ts">
import TheLogo from './TheLogo.vue';
</script>

<template>
<section id="hero" class="section-wrapper">
        <div class="section-container">
            <div class="cover-content">
                <div class="heading | text-hero">
                    <h1 class="cover-title | mblock-0">
                        <span class="cover-title-first | block ws-nowrap lp-loose">Hi there!</span>
                        <span class="cover-title-second | text-half block">My name is</span>
                        <span class="cover-title-third | text-box " data-variant="accent-bg"><span class="carved">Alessio</span></span> 
                        
                    </h1>
                    <p class="cover-subtitle | text-half text-center mblock-0 lh-double">
                        <strong>Web Developer</strong> since 2014.
                    </p>
                </div>
                
                
            </div>
            <div class="cover-logo">
                
               
               <TheLogo></TheLogo>
                
            </div>
        </div>
    </section>
</template>