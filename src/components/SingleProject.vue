<script setup lang="ts">
import { onMounted } from "vue";
import { Project } from "../types";
import { openDialog, closeDialog } from "../utils/dialog";
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

onMounted(() => {
    
    if (window.location.hash === `#project-${props.project.slug}`) {
        openDialog(`project-${props.project.slug}`);
    }
});


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
                    <div class="dialog__grid">
                        <header class="dialog__header | flex gap-em-2 justify-between">
                            <div>
                                <h2 class="dialog__title text-box | heading uppercase m-0" :id="`project-${project.slug}_label`" data-variant="accent-bg">
                                    {{ project.title }}
                                </h2>
                                <p v-if="project.subtitle" class="subtitle italic text-accent-color">
                                    {{ project.subtitle }}
                                </p>
                            </div>
                            
                        </header>
                        <div class="dialog__info">
                            <div v-if="project.infos" class="grid justify-between lh-tight text-large">
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
                            <div class="content-text | flow lh-loose" v-html="project.content"></div>
                        </div>
                        <div class="dialog__gallery">
                            <BlockGallery :slides="project.gallery" :label="`${project.title} gallery`" :parentD="`project-${project.slug}`"/>
                        </div>
                    </div>
                    
                </div>
            
            <footer class="dialog__links | flex gap-em-05">
                    
                <IconLink v-if="project.link" :href="project.link" icon="open_in_new" target="_blank" data-tooltip="Visit the website">
                    Visit website
                </IconLink>

                <IconLink v-if="project.source" :href="project.source" icon="icon_source" target="_blank" data-tooltip="View source code">
                    View source code
                </IconLink>
                <IconLink v-if="prevProject" :href="`#project-${prevProject.slug}`" @click="openDialog(`project-${prevProject?.slug}`)" icon="arrow_back" data-tooltip="Previeous project">
                    View previous project
                </IconLink>
                <IconLink v-if="nextProject" :href="`#project-${nextProject.slug}`" @click="openDialog(`project-${nextProject?.slug}`)" icon="arrow_forward" data-tooltip="Next project">
                    View next project
                </IconLink>
                <IconButton @click="closeDialog(`project-${project.slug}`)" icon="icon_close" data-tooltip="Close project">
                    Close project
                </IconButton>
                
            </footer>   
            
        </div>
    </div>
</template>