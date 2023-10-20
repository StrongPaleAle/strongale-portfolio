<script setup lang="ts">
import { onMounted, ref } from "vue";
import { options } from "../utils/options";
import TheOptions from "./TheOptions.vue";
import ButtonLink from "./blocks/ButtonLink.vue";
//import TheLoader from "./TheLoader.vue";


   
const navSwitch = function(entries: any, observer: any) {
    entries.forEach((entry: any) => {
        if (entry.isIntersecting) {
            const section = entry.target;
            const id = section.id;
            const current = document.querySelector(`.main-nav__link.active`);
            const target = document.querySelector(`.main-nav__link[href="#${id}"]`);
            
            if (options.isLoaded){
                section.classList.add('on-screen');

                current?.classList.remove('active');
                target?.classList.add('active');
            } else {
                console.log('not loaded');
                const loader = document.querySelector('.loader-wrapper');
                
                loader?.addEventListener('transitionend', () => {
                    section.classList.add('on-screen');

                    current?.classList.remove('active');
                    target?.classList.add('active');
                }, {once: true});
            }
            
        }
    });
  
};
const navObserver = new IntersectionObserver(navSwitch, {rootMargin: "-25% 0px -25% 0px"});
onMounted(() => {
    
    const sections = document.querySelectorAll('section[id]');
    sections.forEach((section) => {
        navObserver.observe(section);
    });
    
});



function goTop(evt: Event) {
    evt.preventDefault();
    history.pushState("", document.title, window.location.pathname);
    window.scrollTo({
        top: 0,
        behavior: "smooth",
    });
}
</script>
<template>
    <nav class="main-nav">
        <div class="main-nav__logo">
            <a href="/" class="main-nav__logo-link" @click="goTop">
                <span class="logo-wrapper">
                    <svg class="masked-logo">
                        <use href="#icon-logo" />
                    </svg>
                </span>
                <span class="main-nav__logo-text">
                    <span class="main-nav__text-wrapper">
                        <span>Strong</span>
                        <strong class="text-accent-color">Ale</strong>
                    </span>
                </span>
            </a>
        </div>
        
        <div class="main-nav__list">
            <ul class="flex">
                <li class="main-nav__item">
                    <a href="#hero" class="main-nav__link"  @click="goTop">
                        <span class="nav-icon" aria-hidden="true"><svg class="icon-svg"><use href="#icon_home" /></svg></span>
                        Home
                    </a>
                </li>
                <li class="main-nav__item">
                    <a href="#about" class="main-nav__link">
                        <span class="nav-icon"  aria-hidden="true"><svg class="icon-svg"><use href="#icon_info" /></svg></span>
                        About
                    </a>
                </li>
                <li class="main-nav__item">
                    <a href="#portfolio" class="main-nav__link">
                        <span class="nav-icon"  aria-hidden="true"><svg class="icon-svg"><use href="#work_history" /></svg></span>
                        
                        Work
                    </a>
                </li>
                <li class="main-nav__item">
                    <a href="#contacts" class="main-nav__link">
                        <span class="nav-icon" aria-hidden="true"><svg class="icon-svg"><use href="#contact_support" /></svg></span>
                        Contact
                    </a>
                </li>
                <li class="main-nav__item"> 
                    <ButtonLink class="button-link" href="https://cv.strongale.it" target="_blank">
                        <span class="nav-icon"  aria-hidden="true"><svg class="icon-svg"><use href="#icon_cv" /></svg></span>
                        <span class="show-desktop">Curriculum</span>
                        <span class="show-mobile">CV</span>
                    </ButtonLink>
                </li>
            </ul>
            <TheOptions />
        </div>
            
        
        
    </nav>
</template>