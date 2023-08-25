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

</script>
<template>
    <div class="site-options">
        <button class="toggle" :data-active="isDark" @click="toggleDark()">
            <span class="material-symbols-outlined toggle__icon" aria-hidden="true">light_mode</span>
            <span class="material-symbols-outlined toggle__icon" aria-hidden="true">dark_mode</span>
        </button>
        <!-- <button class="toggle" :data-active="options.prefersReducedMotion" @click="options.toggleReducedMotion()">
            <span class="material-symbols-outlined toggle__icon" aria-hidden="true">motion_blur</span>
            <span class="material-symbols-outlined toggle__icon" aria-hidden="true">blur_short</span>
        </button> -->
    </div>
</template>