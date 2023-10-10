<script setup lang="ts">
import { InfoBlock } from '../../types';
import SingleInfo from './SingleInfo.vue';

const props = defineProps<{
  block: Partial<InfoBlock>;
}>();

</script>
<template>
    <div class="info-wrapper flex justify-center lh-tight body-text gap-em-2">
      <SingleInfo v-for="info in block.content" :info="info" />
    </div>
    
</template>