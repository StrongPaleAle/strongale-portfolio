<script setup lang="ts">
    const props = defineProps<{
        
        icon: string;
    }>();
</script>
<template>
    <button class="icon-link">
        <i class="material-symbols-outlined" aria-hidden="true">{{ icon }}</i>
        <span class="visually-hidden">
            <slot></slot>
        </span>
    </button>
</template>