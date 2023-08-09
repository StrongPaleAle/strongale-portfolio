<script setup lang="ts">
import { Project } from "@/types";
import { openDialog, closeDialog } from "../utils/utils";
import IconLink from "./blocks/IconLink.vue";
import IconButton from "./blocks/IconButton.vue";
import SingleInfo from "./blocks/SingleInfo.vue";
import BlockGallery from "./blocks/BlockGallery.vue";
const props = defineProps<{
    project: Partial<Project>;
    index: number;
    totalProjects: number;
    nextProject?: Partial<Project> | undefined;
    prevProject?: Partial<Project> | undefined;  
}>();

</script>
<template>
    <div 
    class="dialog"
    role="dialog"
    aria-modal="true"
    :aria-labelledby="`project-${project.slug}_label`" 
    :id="`project-${project.slug}`">
        <div class="dialog__backdrop" @click="closeDialog(`project-${project.slug}`)"></div>
        <div class="dialog__content">
            
            
                <div class="dialog__body">
                    <div class="dialog__grid gap-em-2">
                        <header class="dialog__header | flex gap-em-2 justify-between">
                            <div>
                                <h2 class="dialog__title text-box | text-2xl heading uppercase m-0" :id="`project-${project.slug}_label`" data-variant="accent-bg">
                                    {{ project.title }}
                                </h2>
                                <p v-if="project.subtitle" class="subtitle italic text-large text-accent-color">
                                    {{ project.subtitle }}
                                </p>
                            </div>
                            
                        </header>
                        <div class="dialog__info">
                            <div v-if="project.infos" class="grid justify-between lh-tight text-large gap-em-15">
                                <SingleInfo v-for="info in project.infos" :info="info"  />
                            <!-- <ProjectInfo v-if="project.year" :label="'Year'" :value="`${project.year}`" icon="schedule" />
                            
                            <div v-if="project.design" class="dialog__info__item">
                                <h3 class="dialog__info__title">Design</h3>
                                <p class="dialog__info__content">
                                    {{ project.design.label }}
                                </p>
                            </div> -->
                            </div>
                        </div>
            
                        <div class="dialog__description">
                            <div class="content-text | flow lh-loose body-text" v-html="project.content"></div>
                        </div>
                        <div class="dialog__gallery">
                            <BlockGallery :slides="project.gallery" :label="`${project.title} gallery`"/>
                        </div>
                    </div>
                    
                </div>
            
            <footer class="dialog__links | flex gap-em-05 text-large">
                    
                <IconLink v-if="project.link" :href="project.link" icon="open_in_new" target="_blank">
                    Visit website
                </IconLink>

                <IconLink v-if="project.source" :href="project.source" icon="source" target="_blank">
                    View source
                </IconLink>
                <IconButton v-if="prevProject" @click="openDialog(`project-${prevProject.slug}`)" icon="arrow_back">
                    View previous project
                </IconButton>
                <IconButton v-if="nextProject" @click="openDialog(`project-${nextProject.slug}`)" icon="arrow_forward">
                    View next project
                </IconButton>
                <IconButton @click="closeDialog(`project-${project.slug}`)" icon="close">
                    Close project
                </IconButton>
                
            </footer>   
            
        </div>
    </div>
</template>