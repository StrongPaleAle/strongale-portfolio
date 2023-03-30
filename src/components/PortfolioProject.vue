<script setup lang="ts">
import {Project} from "@/types";
import IconLink from "./blocks/IconLink.vue";

const props = defineProps<{
  project: Partial<Project>;
}>();
</script>
<template>
    <div class="portfolio-item" :id="`portfolio-${project.id}`" >
        
        <span class="lh-loose text-text-color mb-em-05 text-right">{{ project.year }}</span>
        <div v-if="project.cover" class="portfolio-item__image">
            
            <img :src="project.cover.url" :alt="project.cover.alt">
            
        </div>
        <div class="portfolio-item__content">
            <a :href="`#${project.slug}`" class="block mb-em">
                
                <h3 class="portfolio-item__title | heading uppercase text-xlarge text-accent-color m-block-em-05">{{ project.title }}</h3>
                <!-- <p v-if="project.subtitle" class="portfolio-item__description | content-text | text-small lh-loose text-text-color mb-em-05">
                    {{ project.subtitle }}
                </p> -->
            </a>
            
            <ul class="comma-list">
                <li v-for="tag in project.tags" :key="tag" class="comma-list__item | text-xsmall uppercase">
                    {{ tag }}
                </li>
            </ul>
            <div class="portfolio-item__links text-large m-t-em-2">
                <IconLink :href="`#${project.slug}`" icon="visibility">
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
            
        
    </div>
</template>