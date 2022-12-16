<script setup lang="ts">
import TheLogo from './TheLogo.vue';
</script>

<template>
<section id="hero">
        <div class="cover-container">
            <div class="cover-content">
                <h1 class="cover-title | heading | text-huge">
                    <span class="cover-title-first | block ws-nowrap lp-loose">Hi there!</span>
                    <span class="cover-title-second | block">My name is</span>
                    <span class="cover-title-third | text-box " data-variant="accent">Alessio</span> 
                </h1>
                <div class="cover-title-underline | card">
                    <p class="cover-subtitle | text-large | lh-loose">
                Inventive and passionate <strong>Web Developer</strong> since 2014. <br>
                Storytelling, interactions, a11y and UX oriented.
                <br>Born in Lucca(IT), London based.
                    
                <br>
                Addicted to music, visual arts, DIY and games.
                <br>
                Nice to meet you. You can call me <strong>Ale</strong>.
                </p>
                </div>
                
            </div>
            <div class="cover-logo">
                
               
               <TheLogo></TheLogo>
                
            </div>
        </div>
    </section>
</template>