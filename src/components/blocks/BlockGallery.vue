<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { Slide } from '@/types';
import { Splide, SplideSlide } from '@splidejs/vue-splide';
import BlockPicture from './BlockPicture.vue';
import BlockVideo from './BlockVideo.vue';

const props = defineProps<{
    slides: Partial<Slide>[] | undefined; 
    label: string | undefined;
    parentD: string | 'undefined';
}>();
const moreSlides = Boolean(props.slides?.length && props.slides?.length > 1);
const myOptions : any | undefined = {
  focus    : 'center',
  autoWidth: true,
  autoHeight: true,
  rewind: true ,
  arrows: moreSlides,
  gap: '0.5rem',
  breakpoints: {
      640: { autoWidth: false, perPage: 1, gap: '0' },
  },
}; 

const gallery = ref<InstanceType<typeof Splide>>();

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
  //console.log('oldSlide', oldSlide);
};
// create observer callback

const isOpening = (mutationList, observer) => {
  for (const mutation of mutationList) {
   if (mutation.type === 'attributes' && mutation.attributeName === 'class') {
    //console.log('mutation', mutation);
     if (mutation.target.classList.contains('active')) {
       //console.log('mutation is-open');
       setTimeout(() => {
         gallery.value?.splide?.refresh();
       }, 100);
     }
    }
  }
};
onMounted(() => {
  // Select the node that will be observed for mutations
  const pDialog = document.getElementById(props.parentD);

  if (pDialog) {
    // Options for the observer (which mutations to observe)
    const config = { attributes: true };
    // Create an observer instance linked to the callback function
    const observer = new MutationObserver(isOpening);
    // Start observing the target node for configured mutations
    observer.observe(pDialog, config);
  }
  
});

</script>
<template>
    <Splide ref="gallery" :options="myOptions" :aria-label="label" @splide:moved="onMoved">
    <SplideSlide v-for="slide in slides">
      <BlockPicture v-if="slide.tag == 'picture'" :picture="slide" />
      <BlockVideo v-if="slide.tag == 'video'" :video="slide" />
    </SplideSlide>
  </Splide>
</template>