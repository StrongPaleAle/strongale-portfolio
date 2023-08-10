<script setup lang="ts">
import {Project} from "@/types";
import IconLink from "./blocks/IconLink.vue";
import IconButton from "./blocks/IconButton.vue";
import {openDialog} from "../utils/dialog";
import {computed} from "vue";

const props = defineProps<{
  project: Partial<Project>;
    index: number;
}>();

const year = computed(() => {
  return props.project?.infos?.find((info) => info.label === "Year")?.value;
});


</script>
<template>
    <div class="portfolio-item" :id="`portfolio-${project.slug}`" >
        
        
        <div class="portfolio-item__image">
            <a :href="`#project-${project.slug}`" class="imag-inner" @click="openDialog(`project-${project.slug}`)">
                <picture v-if="project.cover" class="portfolio-item__image-inner">
                    <source v-for="image in project.cover.sources" :srcset="image.src" :type="image.type" :media="image.media">
                    <img :src="project.cover.img.src" :alt="project.cover.img.alt" loading="lazy" decoding="async">
                </picture>
                <div v-if="project.cover?.overlay" class="overlay" :style="`background-image: url(${project.cover.overlay})`"></div>
            </a>
            
        </div>
        <span class="portfolio-item__date">{{ year }}</span>
        
        <div class="portfolio-item__content">
            <a :href="`#project-${project.slug}`" @click="openDialog(`project-${project.slug}`)" class="btn-link block mb-em text-text-color">
                
                <h3 class="portfolio-item__title | ellipsis heading uppercase text-xlarge  m-t-em-05 m-b-0">{{ project.title }}</h3>
                <!-- <p v-if="project.subtitle" class="portfolio-item__description | content-text | text-small lh-loose text-text-color mb-em-05">
                    {{ project.subtitle }}
                </p> -->
            </a>
            <div class="portfolio-item__tags">
                <ul class="comma-list">
                    <li v-for="tag in project.tags" :key="tag" class="comma-list__item | text-xsmall uppercase">
                        {{ tag }}
                    </li>
                </ul>
            </div>
            
            
        </div>
        <div class="portfolio-item__links text-large">
            <IconLink :href="`#project-${project.slug}`" @click="openDialog(`project-${project.slug}`)" icon="visibility">
                View project
            </IconLink>

            <IconLink v-if="project.link" :href="project.link" icon="open_in_new" target="_blank">
                Visit website
            </IconLink>

            <IconLink v-if="project.source" :href="project.source" icon="source" target="_blank">
                View source
            </IconLink>
            
        </div>   
        
    </div>
</template>