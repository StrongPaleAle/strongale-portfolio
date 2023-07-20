<script setup lang="ts">
import { Slide } from '@/types';
import { Splide, SplideSlide } from '@splidejs/vue-splide';
import BlockPicture from './BlockPicture.vue';
import BlockVideo from './BlockVideo.vue';

const props = defineProps<{
    slides: Partial<Slide>[] | undefined; 
    label: string | undefined;
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
const onMoved = (splide: any, newIndex: number, prevIndex: number, destIndex: number) => {
  console.log('moved', destIndex, newIndex, prevIndex);
  const oldSlide = splide.Components.Slides.getAt(prevIndex);
  const oldVideo = oldSlide.slide.querySelector('video');
  if (oldVideo) {
    oldVideo.pause();
  }
  const newSlide = splide.Components.Slides.getAt(newIndex);
  const newVideo = newSlide.slide.querySelector('video');
  if (newVideo) {
    newVideo.play();
  }
  console.log('oldSlide', oldSlide);
};
</script>
<template>
    <Splide :options="myOptions" :aria-label="label" @splide:moved="onMoved">
    <SplideSlide v-for="slide in slides">
      <BlockPicture v-if="slide.tag == 'picture'" :picture="slide" />
      <BlockVideo v-if="slide.tag == 'video'" :video="slide" />
    </SplideSlide>
  </Splide>
</template>