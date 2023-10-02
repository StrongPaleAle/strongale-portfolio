<script setup lang="ts">

import TheOptions from "./TheOptions.vue";

</script>
<template>
    <nav class="main-nav">
        <div class="main-nav__logo">
            <a href="/" class="main-nav__logo-link">
                <span class="logo-wrapper">
                    <span class="masked-logo"></span>
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
                        <a href="/" class="main-nav__link">
                            <span aria-hidden="true"><svg class="icon-svg"><use href="#icon_home" /></svg></span>
                            Home
                        </a>
                    </li>
                    <li class="main-nav__item">
                        <a href="/#about" class="main-nav__link">
                            <span aria-hidden="true"><svg class="icon-svg"><use href="#icon_info" /></svg></span>
                            About
                        </a>
                    </li>
                    <li class="main-nav__item">
                        <a href="/#portfolio" class="main-nav__link">
                            <span aria-hidden="true"><svg class="icon-svg"><use href="#work_history" /></svg></span>
                            
                            Work
                        </a>
                    </li>
                    <li class="main-nav__item">
                        <a href="/#contact" class="main-nav__link">
                            <span aria-hidden="true"><svg class="icon-svg"><use href="#contact_support" /></svg></span>
                            Contact
                        </a>
                    </li>
                    <li class="main-nav__item">
                        <a href="https://cv.strongale.it/" target="_blank" class="main-nav__link">
                            <span aria-hidden="true"><svg class="icon-svg"><use href="#icon_cv" /></svg></span>
                            My CV
                        </a>
                    </li>
                </ul>
                <TheOptions />
            </div>
            
        
        
    </nav>
</template>