<script setup lang="ts">
import BlockText from './BlockText.vue';
import BlockGraph from './BlockGraph.vue';
import BlockTags from './BlockTags.vue';
import Card from './Card.vue';
import { Tab } from '@/types';
import { ref, onMounted } from "vue";

import AboutData from '../data/about.json';

const tabs = ref<Partial<Tab>[]>(JSON.parse(JSON.stringify(AboutData)));
const tabsLength = tabs.value.length;
let selectedTab = ref<number>(0);
let isAnimating = false;


function selectTab(index: number) {
    selectedTab.value = index;
}
onMounted(() => {
    const aboutContainer = document.querySelector('#about .section-content');
    const tabItems = document.querySelectorAll('#about .tab-item');
    selectTab(0);
    const options = {
        root: aboutContainer,
        threshold: 1
    }
    const observer = new IntersectionObserver(function(element, observer) {
        
            if (element[0].isIntersecting) {
                let tabN = Number(element[0].target.getAttribute('data-tab')) || 0;
                selectTab(tabN);
            }
        
    }, options);

    tabItems.forEach((item) => {
        observer.observe(item);
    });
    //aboutContainer ? observer.observe(aboutContainer): null;
});




</script>
<template>
    <section id="about" class="section-wrapper">
        <div class="section-container" >
            <div class="flex ">
                <div class="section-sidebar">
                    <h2 class="section-title | heading text-huge lh-tight">
                        <span class="about-title-text | text-box " data-variant="accent">About me</span>
                    </h2>
                    <nav class="tab-menu__container">
                        <ul class="tab-menu  | lateral-scroll | text-large uppercase text-right">
                            <li class="tab-menu__item"
                                v-for="(tab, index)  in tabs"
                                :key="index" 
                                >
                                    
                                <a class="button" :href="`#${tab.slug}`"  :data-active="index === selectedTab">{{ tab.title }}</a>
                            </li>
                            
                        </ul> 
                    </nav>
                    
                </div>
                
                
                <div class="section-content | hide-scrollbar snap-y max-h-screen" data-variant="padded-screen">
                    
                    <div class="tab-item | h-screen lh-loose body-text" 
                        data-variant="padded-screen" 
                        v-for="(tab, index)  in tabs"
                        :id="tab.slug"
                        :key="index"
                        :data-tab="index"
                        :data-active="index === selectedTab">
                    
                    
                        <Card class="max-h-screen" :overflow="true" data-variant="card-light padded-screen">
                            
                            <div class="tab-section"
                                
                                v-for="(section, index)  in tab.sections"
                                :id="section.id"
                                :key="index" >

                                <h3 class="text-accent heading uppercase lh-tight"
                                    v-if="section.title" >

                                    {{ section.title }}

                                </h3>
                                <div class="flow">
                                    <div class="tab-section__content" 
                                        v-for="block in section.blocks" >
                                        
                                        <BlockText v-if="block.type === 'BlockText'" :block="block"/>
                                        <BlockGraph v-if="block.type === 'BlockGraph'" :block="block"/>
                                        <BlockTags v-if="block.type === 'BlockTags'" :block="block"/>

                                    </div>
                                </div>
                               
                            

                            </div>
                                                                                                                                            
                        </Card>
                    </div>
                    
                </div>
                
            </div>
        </div>
    </section>
</template>