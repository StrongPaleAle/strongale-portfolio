<script setup lang="ts">
import { ref, toRefs, onMounted } from 'vue';
import { useScroll} from '@vueuse/core';
const props = defineProps<{
  overflow?: boolean
  
}>()

const contentText = ref<HTMLElement| null>(null);
const {arrivedState} = useScroll(contentText);
const { bottom } = toRefs(arrivedState)
let isScrollable = ref<boolean>(false);
onMounted(() => {
    if(props.overflow){
        //console.log('overflow');
        const contentHeight = contentText.value ? contentText.value?.clientHeight : 0;
        const contentTextScrollHeight = contentText.value ? contentText.value?.scrollHeight : 0;

        isScrollable.value = contentTextScrollHeight > contentHeight ? true : false;
        //console.log(contentTextScrollHeight, contentHeight, isScrollable);
    }
    
});
</script>
<template>
    <div class="card">
        <div class="content-text flow"
        ref="contentText" 
        :class="{'overflow-text hide-scrollbar' : overflow, 'is-scrolling' : !bottom && isScrollable}">
            <slot></slot>
        </div>
        
    </div>
</template>