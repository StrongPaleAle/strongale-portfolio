<script setup lang="ts">
    const props = defineProps<{
        href: string;
        icon: string;
    }>();
</script>
<template>
    <a :href="href" class="icon-link button">
        <i class="material-symbols-outlined" aria-hidden="true">{{ icon }}</i>
        <span class="visually-hidden">
            <slot></slot>
        </span>
    </a>
</template>