<script setup lang="ts">
    
    const props = defineProps<{
        icon: string;
        label: string;
    }>();
</script>
<template>
    <a class="circle-link"  :data-tooltip="label">
        <span class="circle-link__inner" aria-hidden="true">
            <svg class="icon-svg"><use :href="icon" /></svg>
    
        </span>
        
        <span class="contact-label  visually-hidden">
            {{ label }}
        </span>
    </a>
</template>