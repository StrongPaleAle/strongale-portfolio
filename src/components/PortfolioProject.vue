<script setup lang="ts">
import {Project} from "@/types";

const props = defineProps<{
  project: Partial<Project>;
}>();
</script>
<template>
    <div class="portfolio-item | card " :id="`portfolio-${project.id}`" >
        <div class="card flex gap-em-15">
            
            <div class="portfolio-item__image">
                
                <img src="https://via.placeholder.com/300x200" alt="">
                
            </div>
            <div class="portfolio-item__content">
                <a :href="`#${project.slug}`" class="block">
                    <p class="lh-loose text-text-color mb-em-05 text-right">{{ project.year }}</p>
                    <h3 class="portfolio-item__title | heading uppercase text-xlarge text-accent-color mb-em-05">{{ project.title }}</h3>
                    <p v-if="project.subtitle" class="portfolio-item__description | content-text | text-small lh-loose text-text-color mb-em-05">
                        {{ project.subtitle }}
                    </p>
                </a>
                
                <ul>
                    <li v-for="tag in project.tags" :key="tag" class="portfolio-item__tag | text-small text-accent-color uppercase">
                        {{ tag }}
                    </li>
                </ul>
                <div class="portfolio-item__links">
                    <a :href="`#${project.slug}`" class="icon-link">
                        <i class="material-symbols-outlined" aria-hidden="true">visibility</i>
                        <span class="visually-hidden">
                            View project
                        </span>
                    </a>
                    <a v-if="project.link" :href="project.link" >
                        <i class="material-symbols-outlined" aria-hidden="true">
                            open_in_new
                        </i>
                        <span class="visually-hidden">
                            Visit website
                        </span>
                    </a>
                    <a href="#" class="icon-link">
                        <i class="material-symbols-outlined" aria-hidden="true">source</i>
                        <span class="visually-hidden">
                            View source
                        </span>
                        
                    </a>
                    
                </div>
            </div>
            
        </div>
    </div>
</template>