<script setup lang="ts">
import { onMounted } from 'vue';
import { options } from "../utils/options";

onMounted(() => {
    /* 1. define variables */
    const me = "alessio";
    const place = "strongale.it";


    /* 2. find email link to replace */
    const elink = document.querySelectorAll(".mlink") as NodeListOf<HTMLAnchorElement>;
        
    /* 3. replace link href with variables  */
    elink?.forEach((el) => {
        if(options.canHover){
            el.addEventListener('mouseenter', () => {
                el.href ='mailto:' + me + "@" + place;
            });
            
        } else {
            el.addEventListener('click', (evt) => {
                console.log('click on link');
                evt.preventDefault();

                window.open('mailto:' + me + "@" + place, '_blank');
                return false;
                
            })
            
        }
        
    });
    
});
</script>

<template>
<section id="contact" class="section-wrapper">
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
                            <a href="#" class="contact-link has-hover-label mlink" target="_blank">
                                <span class="contact-icon circle-icon" aria-hidden="true">
                                    <svg class="icon-svg"><use href="#alternate_email" /></svg>
                            
                                </span>
                                <span class="hover-label">Email</span>
                                <span class="contact-label visually-hidden">
                                    a<!-- jbpsbjp@skgv -->le<span> ghakjr@akfka</span>ssio@stron<span> fqg.com</span>gale.it
                                </span>
                            </a>
                        </li>
                        <li>
                            <a class="contact-link has-hover-label" href="https://www.linkedin.com/in/alessio-falchi/" target="_blank">
                                <span class="contact-icon circle-icon" aria-hidden="true">
                                    <svg class="icon-svg"><use href="#icon_linkedin" /></svg>
                            
                                </span>
                                <span class="hover-label">LinkedIn</span>
                                <span class="contact-label  visually-hidden">
                                    linkedin.com/in/alessio-falchi/
                                </span>
                            </a>
                        </li>
                        <li>
                            <a class="contact-link has-hover-label" href="https://github.com/StrongPaleAle" target="_blank">
                                <span class="contact-icon circle-icon" aria-hidden="true">
                                    <svg class="icon-svg"><use href="#icon_github" /></svg>
                                </span>
                                <span class="hover-label">GitHub</span>
                                <span class="contact-label  visually-hidden">
                                    github.com/StrongPaleAle
                                </span>
                            </a>
                        </li>
                        <li><a class="cv-link" href="https://cv.strongale.it" target="_blank">Read my CV</a></li>
                    </ul>
                </nav>
                
            </div>
        </div>
</section>
</template>
