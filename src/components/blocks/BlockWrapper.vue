<script setup lang="ts">
import {BlockTypes} from '@/types';

const props = defineProps<{
  block: Partial<BlockTypes>;
}>();

</script>
<template>
    <component :is="block.titleHeader ? block.titleHeader : 'h4'" 
        class="heading uppercase lh-tight"
        :class="block.titleClass" 
        :data-variant="block.titleVariant"
        v-if="block.title" >

        <span class="title-inner">{{ block.title }}</span>

    </component>
    
    <component :is="block.type" :block="block"/>
    
</template>