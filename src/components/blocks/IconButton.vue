<script setup lang="ts">
    const props = defineProps<{
        
        icon: string;
    }>();
</script>
<template>
    <button class="icon-link">
        <span aria-hidden="true"><svg class="icon-svg"><use :href="`#${icon}`" /></svg></span>
        <span class="visually-hidden">
            <slot></slot>
        </span>
    </button>
</template>