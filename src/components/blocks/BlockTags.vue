<script setup lang="ts">
import {DataBlock} from '@/types';
import {toRefs} from 'vue';


const props = defineProps<{
  block: Partial<DataBlock>;
}>();

const {block} = toRefs(props);


</script>
<template>
    
    <div class="flex justify-center items-center lh-tight gap-0  text-large">
        <span v-for="item in block.content" class="tag" 
        :style="{
            '--font-size': `calc(70% + ${item.value}%)`,
            '--tag-bg': `var(--bg-heavy-${item.value})`
            }"
        :data-value="item.value">
            {{ item.label }}
            
        </span>
    </div>
</template>