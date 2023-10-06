<script setup>
import { computed } from 'vue'
import { valueToPoint } from '../utils/utils.ts'

const props = defineProps({
    graphpoint: Object,
    index: Number,
    total: Number
})

const point = computed(() =>
    valueToPoint(+props.graphpoint.value, props.index, props.total)
)
</script>

<template>
    <g class="svg-graph__point" :data-tooltip="graphpoint.label">
        <circle class="area" :cx="point.x" :cy="point.y" r="6" fill="transparent"></circle>
        <circle :cx="point.x" :cy="point.y" r="3"></circle>
        
        <text filter="url(#solid)" :x="point.x" :y="point.y + 20">{{graphpoint.label}}</text>
    </g>
    
</template>