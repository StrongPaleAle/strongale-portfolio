<script setup lang="ts">
import ButtonLink from './blocks/ButtonLink.vue';
import CircleLink from './blocks/CircleLink.vue';
// import { onMounted } from 'vue';
// import { options } from "../utils/options";

// onMounted(() => {
//     /* 1. define variables */
//     const me = "alessio";
//     const place = "strongale.it";


//     /* 2. find email link to replace */
//     const elink = document.querySelectorAll(".mlink") as NodeListOf<HTMLAnchorElement>;
        
//     /* 3. replace link href with variables  */
//     elink?.forEach((el) => {
//         if(options.canHover){
//             el.addEventListener('mouseenter', () => {
//                 el.href ='mailto:' + me + "@" + place;
//             });
            
//         } else {
//             el.addEventListener('click', (evt) => {
//                 console.log('click on link');
//                 evt.preventDefault();

//                 window.open('mailto:' + me + "@" + place, '_blank');
//                 return false;
                
//             })
            
//         }
        
//     });
    
// });
</script>

<template>
<section id="contacts" class="section-wrapper">
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
