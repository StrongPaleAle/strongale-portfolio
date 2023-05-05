<script setup lang="ts">
import { onMounted } from 'vue';
import TheLogo from './TheLogo.vue';

onMounted(() => {
    /* 1. define variables */
    var me = "alessio";
    var place = "strongale.it";

    /* 2. find email link to replace */
    const elink = document.querySelectorAll("mlink") as NodeListOf<HTMLAnchorElement>;

    /* 3. replace link href with variables  */
    elink?.forEach((el) => {
        el.href = me + "@" + place;
    });
    
});

</script>

<template>
<section id="hero" class="section-wrapper  coming-soon">
        <div class="section-container">
            <div class="cover-content">
                <div class="cover-logo">
                
               
                    <TheLogo></TheLogo>
                    
                </div>
                <div class="heading | text-hero">
                    <h1 class="cover-title | m-block-0">
                        Coming Soon
                    </h1>
                    
                </div>
                
                
            </div>
            <div class="coming-soon-copy text-center m-t-em-2  lh-loose">
                <p>Brace yourself! This website is under construction and will be online soon. <br/><br/>In the meantime you can contact me by writing to <a href="#" class="mlink">a<!-- jbpsbjp@skgv -->le<span> ghakjr@akfka</span>ssio@stron<span> fqg.com</span>gale.it</a></p>
                
            </div>
        </div>
        
        <footer class="section-footer">
            
                <div class="text-center text-xsmall">
                    <p>©2023 Alessio "StrongAle" Falchi</p>
                </div>
            
        </footer>
    </section>
</template>