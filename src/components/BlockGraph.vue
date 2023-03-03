<script setup lang="ts">
import {DataBlock} from '@/types';
import SVGGraph from './SVGGraph.vue';

const props = defineProps<{
  block: Partial<DataBlock>;
}>();

</script>
<template>
    <h4 class="text-accent mt-2em mb-em/2 heading uppercase lh-tight center-line"
        v-if="block.title" >
        <span>{{ block.title }}</span>
    </h4>
    <div class="flex items-center gap-2em">
        
        
        <div class="flex-content">
            <SVGGraph :graphPoints="block.content"></SVGGraph>
        </div>
        <div class="grow">
            <table class="skill-table text-small">
                <tr v-for="(point, index) in block.content" :key="index">
                    <td>{{point.label}}</td>
                    <td class="grow-td">
                        <div class="progress">
                            <div class="progress-bar" role="progressbar" :style="`width: ${point.value}%`">{{point.value}}%</div>
                        </div>
                        
                    </td>
                </tr>
            </table>
        </div>
        
    </div>
        
    
</template>