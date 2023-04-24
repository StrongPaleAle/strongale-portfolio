<script setup lang="ts">
import { InfoBlock } from '@/types';
import SingleInfo from './SingleInfo.vue';

const props = defineProps<{
  block: Partial<InfoBlock>;
}>();

</script>
<template>
    <div class="flex justify-center lh-tight text-large">
      <SingleInfo v-for="info in block.content" :info="info" />
    </div>
    
</template>