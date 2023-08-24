<script setup lang="ts">
import { useDark, useToggle } from '@vueuse/core';

const isDark = useDark({
  selector: 'html',
  attribute: 'data-theme',
  valueDark: 'dark',
  valueLight: 'light',
  disableTransition: false
});
const toggleDark = useToggle(isDark);

</script>
<template>
    <div class="site-options">
        <button class="toggle" :data-active="isDark" @click="toggleDark()">
            <span class="material-symbols-outlined toggle__icon" aria-hidden="true">light_mode</span>
            <span class="material-symbols-outlined toggle__icon" aria-hidden="true">dark_mode</span>
        </button>
    </div>
</template>