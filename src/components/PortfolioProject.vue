<script setup lang="ts">
import {Project} from "@/types";

const props = defineProps<{
  project: Partial<Project>;
}>();
</script>
<template>
    <div class="portfolio-item | card " :id="`portfolio-${project.id}`" >
        <div class="card flex gap-em">
            
            <div class="portfolio-item__image">
                
                <img src="https://via.placeholder.com/300x200" alt="">
                
            </div>
            <div class="portfolio-item__content">
                <a :href="`#${project.slug}`" class="block">
                    <h3 class="portfolio-item__title | heading uppercase text-xlarge text-accent-color">{{ project.title }}</h3>
                    <p class="portfolio-item__description | content-text | body-text lh-loose">
                        {{ project.subtitle }}
                    </p>
                </a>
                
                
                <div class="portfolio-item__links">
                    <a href="#" class="icon-link">
                        <i class="material-symbols-outlined" aria-hidden="true">visibility</i>
                        <span class="visually-hidden">
                            View project
                        </span>
                    </a>
                    <a href="#">
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