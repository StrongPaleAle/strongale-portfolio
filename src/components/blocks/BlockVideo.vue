<script setup lang="ts">
import { ref, onMounted } from 'vue';
import type { Ref } from 'vue'
import { Video } from '@/types';

const props = defineProps<{
    video: Partial<Video>; 
}>();
const videoWrapper : Ref<HTMLElement | undefined> = ref();
const videoOBJ : Ref<HTMLVideoElement | undefined> = ref();
const videoPlaying = ref(
  {
    playing: false,
    label: 'Play',
    icon: 'play_circle',
  }
);

const playVideo = () => {
    if (videoOBJ.value) {
        if (videoOBJ.value.paused) {
            videoOBJ.value.play();
            
        } else {
            videoOBJ.value.pause();
        }
    }
    console.log(videoPlaying);
}
defineExpose({
  playVideo
});
onMounted(() => {
  //console.log(videoOBJ);
  videoOBJ.value?.addEventListener('play', () => {
    videoPlaying.value = {
      playing: true,
      label: 'Pause',
      icon: 'pause_circle',
    };
    videoWrapper.value?.classList.add('playing');
  });
  videoOBJ.value?.addEventListener('pause', () => {
    videoPlaying.value = {
      playing: false,
      label: 'Play',
      icon: 'play_circle',
    };
    videoWrapper.value?.classList.remove('playing');
  });
});

</script>
<template>
  <div class="block-picture" ref="videoWrapper">
    <video ref="videoOBJ" no-controls loop muted :aria-describedby="`#${ video.id }`">
        <source v-for="source in video.sources" :src="source.src" :type="source.type"/>
        <p>
            Your browser doesn't support HTML video.
        </p>
    </video>
    <div class="video-controls">
      <button @click="playVideo" class="playvideo" v-if="videoOBJ">
        <span class="material-symbols-outlined" aria-hidden="true">{{ videoPlaying.icon }}</span>
        <span class="visually-hidden">{{ videoPlaying.label }}</span>
      </button>
      <span class="indicator">
        <span class="material-symbols-outlined">
          no_sound
          </span>
        <span class="visually-hidden">No sound</span>
      </span>
      
    </div>
    <p :id="video.id" v-html="video.caption" :class="{'visually-hidden' : !video.showCaption}"></p>
  </div>
</template>