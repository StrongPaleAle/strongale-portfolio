<script setup lang="ts">
import {DataBlock} from '@/types';
import {toRefs} from 'vue';


const props = defineProps<{
  block: Partial<DataBlock>;
}>();

const {block} = toRefs(props);


</script>
<template>
    <h4 class="text-accent mt-2em mb-em/2 heading uppercase lh-tight center-line"
        v-if="block.title" >
        <span>{{ block.title }}</span>
    </h4>
    <div class="flex justify-center items-center lh-ultra-tight gap-em/2  text-large">
        <span v-for="item in block.content" class="tag" :style="`--font-size: calc(70% + ${item.value}%);`">
            {{ item.label }}
        </span>
    </div>
</template>