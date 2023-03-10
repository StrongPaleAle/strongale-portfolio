<script setup lang="ts">
import {TextBlock} from '@/types';

const props = defineProps<{
  block: Partial<TextBlock>;
}>();

</script>
<template>
    <h4 class="text-accent heading uppercase lh-tight"
        v-if="block.title" >

        {{ block.title }}

    </h4>
    <div class="content-block" v-html="block.content">
    </div>
</template>