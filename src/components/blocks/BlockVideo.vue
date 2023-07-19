<script setup lang="ts">
import { Video } from '@/types';

const props = defineProps<{
    video: Partial<Video>; 
}>();
</script>
<template>
  <div class="block-picture">
    <video no-controls loop muted :aria-describedby="`#${ video.id }`">
        <source v-for="source in video.sources" :src="source.src" :type="source.type"/>
        <p>
            Your browser doesn't support HTML video.
        </p>
    </video>
    <p :id="video.id" v-html="video.caption" :class="{'visually-hidden' : !video.showCaption}"></p>
  </div>
</template>