<script setup lang="ts">
import {DataBlock} from '../../types';
import SVGGraph from '../SVGGraph.vue';

const props = defineProps<{
  block: Partial<DataBlock>;
}>();

</script>
<template>
    
    <div class="flex items-center gap-em-2">
        
        
        <div class="flex-content">
            <SVGGraph :graphPoints="block.content"></SVGGraph>
        </div>
        <div class="grow">
            <table class="skill-table text-small">
                <tr v-for="(point, index) in block.content" :key="index">
                    
                    <th class="skill-table__label" :id="point.label.replace(/\s+/g, '-')">
                        <span aria-hidden="true">{{index + 1}}. </span>
                        {{point.label}}
                    </th>
                    <td class="grow-td">
                        <div class="progress">
                            <div class="progress-bar" role="progressbar" :aria-labelledby="point.label.replace(/\s+/g, '-')" :style="`width: ${point.value}%`">{{point.value}}%</div>
                        </div>
                        
                    </td>
                </tr>
            </table>
        </div>
        
    </div>
        
    
</template>