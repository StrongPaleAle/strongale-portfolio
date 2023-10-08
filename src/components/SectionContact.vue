<script setup lang="ts">
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
                    <span>Need a web developer?</span>
                    <span class="text-box text-2up" data-variant="accent-bg gradient"><span class="carved">Don't Panic!</span></span>
                </h2>
                <p class="section-subtitle | text-center text-xlarge content-text lh-loose mb-em-2">
                    Feel free to get in touch! <br>A painless hey is also appreciated.
                </p>
                <nav aria-label="Contacts">
                    <ul class="contact-links |  flex justify-center items-center gap-em-15">
                        <li>
                            <a href="mailto:alessio@strongale.it" class="contact-link  mlink" target="_blank" data-tooltip="Email">
                                <span class="contact-icon circle-icon" aria-hidden="true">
                                    <svg class="icon-svg"><use href="#alternate_email" /></svg>
                            
                                </span>
                                <span class="visually-hidden">Email</span>
                                
                            </a>
                        </li>
                        <li>
                            <a class="contact-link" href="https://www.linkedin.com/in/alessio-falchi/" target="_blank" data-tooltip="LinkedIn">
                                <span class="contact-icon circle-icon" aria-hidden="true">
                                    <svg class="icon-svg"><use href="#icon_linkedin" /></svg>
                            
                                </span>
                                
                                <span class="contact-label  visually-hidden">
                                   LinkedIn
                                </span>
                            </a>
                        </li>
                        <li>
                            <a class="contact-link" href="https://github.com/StrongPaleAle" target="_blank" data-tooltip="GitHub">
                                <span class="contact-icon circle-icon" aria-hidden="true">
                                    <svg class="icon-svg"><use href="#icon_github" /></svg>
                                </span>
                                
                                <span class="contact-label  visually-hidden">
                                   GitHub
                                </span>
                            </a>
                        </li>
                        <li>
                            <a class="button text-xlarge" href="https://cv.strongale.it" target="_blank">
                                <span class="button__inner">
                                    <span>Read my CV</span>
                                </span>
                                    
                            </a>
                        </li>
                    </ul>
                </nav>
                
            </div>
        </div>
</section>
</template>
