<script setup lang="ts">
import { ref, onMounted } from 'vue';
const props = defineProps<{
  overflow?: boolean
  
}>()

const contentText = ref<HTMLElement| null>(null);
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
        :class="{'overflow-text hide-scrollbar' : overflow, 'is-scrolling' : isScrollable}">
            <slot></slot>
        </div>
        
    </div>
</template>