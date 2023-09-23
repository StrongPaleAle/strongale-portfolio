<script setup lang="ts">
import { Picture } from '@/types';

const props = defineProps<{
    picture: Partial<Picture>; 
}>();
</script>
<template>
  
    <figure  class="block-picture">
        <picture>
        <source v-for="source in picture.sources" :srcset="source.src" :media="source.media" :type="source.type"/>
        <img :src="picture.img?.src" :alt="picture.img?.alt" />
        </picture>
        
    </figure>
  
</template>