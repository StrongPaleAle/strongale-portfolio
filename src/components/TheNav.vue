<script setup lang="ts">
import { onMounted } from "vue";
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
                    <span>Strong</span>
                    <strong class="text-accent-color">Ale</strong>
                </span>
            </a>
        </div>
        <div class="main-nav__list">
            <ul class="flex">
                <li class="main-nav__item">
                    <a href="/" class="main-nav__link">Home</a>
                </li>
                <li class="main-nav__item">
                    <a href="/#about" class="main-nav__link">About</a>
                </li>
                <li class="main-nav__item">
                    <a href="/#portfolio" class="main-nav__link">Work</a>
                </li>
                <li class="main-nav__item">
                    <a href="/#contact" class="main-nav__link">Contact</a>
                </li>
            </ul>
            <TheOptions />
        </div>
    </nav>
</template>