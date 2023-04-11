<script setup lang="ts">
import { Project } from "@/types";
import { closeDialog } from "../utils/utils";
const props = defineProps<{
    project: Partial<Project>;
    index: number;  
}>();
</script>
<template>
    <div 
    class="dialog"
    role="dialog"
    aria-modal="true"
    :aria-labelledby="`project-${index}_label`" 
    :id="`project-${index}`">
        <div class="dialog__overlay" @click="closeDialog(`project-${index}`)"></div>
        <div class="dialog__content">
            <div class="dialog__header">
                <h2 class="dialog__title" :id="`project-${index}_label`">{{ project.title }}</h2>
                <button class="dialog__close" @click="closeDialog(`project-${index}`)">
                    <span class="visully-hidden">Close project</span>
                </button>
            </div>
            <div class="dialog__body">
                
            </div>
        </div>
    </div>
</template>