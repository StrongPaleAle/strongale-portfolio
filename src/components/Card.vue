<script setup lang="ts">
import { ref, onMounted } from 'vue';
defineProps<{
  overflow?: boolean
  
}>()

onMounted(() => {
    const contentText = ref<HTMLElement>(0);
    const contentHeight = contentText.value?.clientHeight;
    const contentTextScrollHeight = contentText.value?.scrollHeight;

    //const isScrollable = contentTextScrollHeight  contentTextScrollHeight? > contentHeight?;
    console.log(contentText);
});
</script>
<template>
    <div class="card">
        <div class="content-text"
        ref="contentText" 
        :class="{'overflow-text hide-scrollbar' : overflow}">
            <slot></slot>
        </div>
        
    </div>
</template>