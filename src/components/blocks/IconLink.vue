<script setup lang="ts">
    const props = defineProps<{
        href: string;
        icon: string;
    }>();
</script>
<template>
    <a :href="href" class="icon-link">
        <span aria-hidden="true"><svg class="icon-svg"><use :href="`#${icon}`" /></svg></span>
        <span class="visually-hidden">
            <slot></slot>
        </span>
    </a>
</template>