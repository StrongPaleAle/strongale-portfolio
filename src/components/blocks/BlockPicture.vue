<script setup lang="ts">
import { SourcePicture } from '../../types';

const props = defineProps<{
    picture: Partial<SourcePicture>; 
}>();
</script>
<template>
  
    <figure  class="block-picture">
        <picture>
            <source v-for="source in picture.sources" :srcset="source.src" :media="source.media" :type="source.type"/>
            <img :src="picture.img?.src" :alt="picture.img?.alt" loading="lazy"/>
        </picture>
        
    </figure>
  
</template>