<script setup lang="ts">
import {DataBlock} from '@/types';


const props = defineProps<{
  block: Partial<DataBlock>;
}>();
</script>
<template>
    <h4 class="text-accent mt-2em mb-em/2 heading uppercase lh-tight center-line"
        v-if="block.title" >
        <span>{{ block.title }}</span>
    </h4>
    <div class="flex items-center gap-em/2">
        <span v-for="item in block.content" class="button tag text-large" :data-value="item.value">
            {{ item.label }}
        </span>
    </div>
</template>