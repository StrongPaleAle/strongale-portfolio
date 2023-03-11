<script setup lang="ts">
import {TextBlock} from '@/types';

const props = defineProps<{
  block: Partial<TextBlock>;
}>();

</script>
<template>
    <div class="content-block" v-html="block.content">
    </div>
</template>