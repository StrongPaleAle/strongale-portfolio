<script setup lang="ts">
import { Slide } from '@/types';
import { Splide, SplideSlide } from '@splidejs/vue-splide';
import BlockPicture from './BlockPicture.vue';
import BlockVideo from './BlockVideo.vue';

const props = defineProps<{
    slides: Partial<Slide>[] | undefined; 
}>();
const myOptions = {
  focus    : 'center',
  autoWidth: true,
  rewind: true ,
  gap: '0.5rem',
  breakpoints: {
      640: { autoWidth: false, perPage: 1, gap: '0' },
  },
};
</script>
<template>
    <Splide :options="myOptions" aria-label="My Favorite Images">
    <SplideSlide v-for="slide in slides">
      <BlockPicture v-if="slide.tag == 'picture'" :picture="slide" />
      <BlockVideo v-if="slide.tag == 'video'" :video="slide" />
    </SplideSlide>
  </Splide>
</template>