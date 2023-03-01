<script setup lang="ts">
import {GraphBlock} from '@/types';
import SVGGraph from './SVGGraph.vue';

const props = defineProps<{
  block: Partial<GraphBlock>;
}>();

</script>
<template>
    <div class="flex">
        <div class="flex-content">
            <SVGGraph :graphPoints="block.content"></SVGGraph>
        </div>
        <div>
            <ul>
                <li v-for="(point, index) in block.content" :key="index">
                    {{point.label}}
                </li>
            </ul>
        </div>
        
    </div>
        
    
</template>