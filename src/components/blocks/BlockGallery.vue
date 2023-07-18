<script setup lang="ts">
import { Slide } from '@/types';
import { Splide, SplideSlide } from '@splidejs/vue-splide';

const props = defineProps<{
    slides: Partial<Slide>[] | undefined; 
}>();

</script>
<template>
    <Splide :options="{ rewind: true }" aria-label="My Favorite Images">
    <SplideSlide v-for="slide in slides">
      <div>{{ slide }}</div>
    </SplideSlide>
  </Splide>
</template>