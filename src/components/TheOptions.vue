<script setup lang="ts">
import { options } from '../utils/options';
import { useDark, useToggle } from '@vueuse/core';

const isDark = useDark({
    selector: 'html',
    attribute: 'data-theme',
    valueDark: 'dark',
    valueLight: 'light',
    disableTransition: false
})
const toggleDark = useToggle(isDark);
const changeTheme = useDark({
    onChanged(dark: boolean) {
        // update the dom, call the API or something
        if (options.theme ) {
            options.theme = document.documentElement.getAttribute('data-theme') || 'dark';
            //console.log(options.theme);
            
        }
    },
})
</script>
<template>
    <div class="site-options">
        <button class="toggle" :data-active="isDark" @click="toggleDark()" :data-tooltip="`Switch to ${ isDark ? 'Light theme' : 'Dark theme' }`">
            <span class="toggle__icon" aria-hidden="true">
                <svg width="1em" height="1em"><use href="#light_mode" /></svg>
            </span>
            <span class="toggle__icon" aria-hidden="true">
                <svg width="1em" height="1em"><use href="#dark_mode" /></svg>
            </span>
            <span class="visually-hidden">Switch to {{ isDark ? 'Light theme' : 'Dark theme' }}</span>
        </button>
        <!-- <button class="toggle" :data-active="options.prefersReducedMotion" @click="options.toggleReducedMotion()">
            <span class="material-symbols-outlined toggle__icon" aria-hidden="true">motion_blur</span>
            <span class="material-symbols-outlined toggle__icon" aria-hidden="true">blur_short</span>
        </button> -->
    </div>
</template>