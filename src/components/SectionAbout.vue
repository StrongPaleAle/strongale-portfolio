<script setup lang="ts">

import Card from './Card.vue';
import { Tab } from '@/types';
import { ref, onMounted } from "vue";
import BlockWrapper from './blocks/BlockWrapper.vue';

import AboutData from '../data/about.json';


const tabs = ref<Partial<Tab>[]>(JSON.parse(JSON.stringify(AboutData)));
const tabsLength = tabs.value.length;
let selectedTab = ref<number>(0);
let isAnimating = false;



function selectTab(index: number) {
    selectedTab.value = index;
}
onMounted(() => {

    // BASIC VARIABLES
    const hash = window.location.hash.substring(1);
    const aboutContainer = document.querySelector('#about .section-content');
    const tabItems = document.querySelectorAll('#about .tab-item');
    const cardHeight = window.innerHeight - 200;

    // INTERSECTION OBSERVERS
    const tabOptions = {
        root: aboutContainer,
        threshold: 1
    }

    const tabObserver = new IntersectionObserver(scrollTabSwitch, tabOptions);
    
    const aboutObserver = new IntersectionObserver(toggleScrolling, { threshold: 1 });

    aboutContainer ? aboutObserver.observe(aboutContainer) : null;

    tabItems.forEach((item) => {
        if (window.location.hash) {
            
            const itemID = item.getAttribute('id');

            if (itemID === hash) {
                const tabN = Number(item.getAttribute('data-tab')) || 0;
                
                const itemPos = cardHeight * tabN;
                aboutContainer  ? aboutContainer.scrollTo({top : itemPos}) : null;
                

                selectTab(tabN);
                //console.log(selectedTab.value);
            }
            
        }

        tabObserver.observe(item);
    });
});

function scrollTabSwitch(element: any) {
        
    if (element[0].isIntersecting) {
        let tabN = Number(element[0].target.getAttribute('data-tab')) || 0;
        selectTab(tabN);
    } 
    
}
function toggleScrolling(element: any) {
    if (element[0].isIntersecting) {
        //console.log('scrolling');
        element[0].target.setAttribute('data-scrolling', 'true');
    } else {
        element[0].target.setAttribute('data-scrolling', 'false');
    }
}


</script>
<template>
    <section id="about" class="section-wrapper">
        <div class="section-container" >
            <div class="flex ">
                <header class="section-sidebar">
                    <h2 class="section-title | heading text-huge lh-tight">
                        <span class="about-title-text | text-box " data-variant="accent-bg clip-bl"><span class="carved">About me</span></span>
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
                    
                </header>
                
                
                <div class="section-content | hide-scrollbar snap-y max-h-screen" data-variant="padded-screen">
                    
                    <div class="tab-item | h-screen lh-loose body-text" 
                        data-variant="padded-screen" 
                        v-for="(tab, index)  in tabs"
                        :id="tab.slug"
                        :key="index"
                        :data-tab="index"
                        :data-active="index === selectedTab">
                    
                    
                        <Card class="max-h-screen pb-em-2" :overflow="true" data-variant="card-light padded-screen">
                            
                            <div class="tab-section"
                                
                                v-for="(section, index)  in tab.sections"
                                :id="section.id"
                                :key="index" 
                                :data-variant="section.blockVariant"
                                :class="section.extraClass">
                            
                                <component :is="section.titleHeader ? section.titleHeader : 'h3'" 
                                    class="heading uppercase lh-tight"
                                    :data-variant="section.titleVariant"
                                    :class="section.titleClass"
                                    v-if="section.title" >

                                    <span class="title-inner">{{ section.title }}</span>

                                </component>
                                
                                <div class="flow">

                                    <div class="tab-section__content" 
                                        v-for="block in section.blocks" 
                                        :data-variant="block.blockVariant"
                                        :class="block.extraClass"
                                        >

                                        <KeepAlive>
                                            <BlockWrapper :block="block" />
                                        </KeepAlive>
                                        

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