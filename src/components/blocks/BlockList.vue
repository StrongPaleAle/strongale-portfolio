<script setup lang="ts">
import { ListBlock } from '@/types';

const props = defineProps<{
  block: Partial<ListBlock>;
}>();

</script>
<template>
    <component :is="block.listOrdination ? block.listOrdination : 'div'"
        class="flow  list-style" data-marker="accent-color">

        <component :is="block.listOrdination ? 'li' : 'p'" 
        class="text-small"
        v-for="item in block.content" 
        v-html="item">
        </component>

    </component>
</template>