<script setup>
import SVGGraphLabel from './SVGGraphLabel.vue'
import { computed } from 'vue'
import { valueToPoint } from '../utils/utils.ts'

const props = defineProps({
  graphPoints: Array
})
const total = props.graphPoints.length

const points = computed(() => {
  
  return props.graphPoints
    .map((graphPoint, i) => {
      const { x, y } = valueToPoint(graphPoint.value, i, total)
      return `${x},${y}`
    })
    .join(' ')
})

const fullPoints = computed(() => {
  
  return props.graphPoints
    .map((graphPoint, i) => {
      const { x, y } = valueToPoint(100, i, total)
      return `${x},${y}`
    })
    .join(' ')
})

const CirclePoints = computed(() => {
  
  return props.graphPoints
    .map((graphPoint, i) => {
      const { x, y } = valueToPoint(100, i, total)
      return {"x": x,"y": y}
    })
  
})

const numberPoints = computed(() => {
  
  return props.graphPoints
    .map((graphPoint, i) => {
      const { x, y } = valueToPoint(110, i, total)
      return {"x": x,"y": y}
    })
  
})

</script>

<template>
    <svg class="svg-graph" viewBox="0 0 240 240">
        <g transform="translate(20,20)">
            
            <!-- <circle class="svg-graph__border" cx="100" cy="100" r="80" fill="transparent"></circle> -->
            <line class="svg-graph__axis svg-graph__border"
                v-for="point in CirclePoints"
                x1="100" y1="100" :x2="point.x" :y2="point.y"
            ></line>
            <text class="number" v-for="point, index in numberPoints" :x="point.x" :y="point.y">{{ index + 1 }}</text>
            <polygon class="svg-graph__border" :points="fullPoints"></polygon>
            <polygon class="svg-graph__result" :points="points"></polygon>
            <defs>
                <filter x="-0.1" y="-0.1" width="1.2" height="1.2" id="solid">
                <feFlood flood-color="var(--bg-heavy-70)"/>
                <feComposite in="SourceGraphic" />
                </filter>
            </defs>
            <SVGGraphLabel
            v-for="(graphpoint, index) in graphPoints"
            :graphpoint="graphpoint"
            :index="index"
            :total="graphPoints.length"
            >
            </SVGGraphLabel>
        </g>
    </svg>
</template>