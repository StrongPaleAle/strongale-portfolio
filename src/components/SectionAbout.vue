<script setup lang="ts">

import Card from './Card.vue';
import { Tab } from '@/types';
import { ref, onMounted } from "vue";
import BlockWrapper from './blocks/BlockWrapper.vue';

import AboutData from '../data/about.json';


const tabs = ref<Partial<Tab>[]>(JSON.parse(JSON.stringify(AboutData)));
const tabsLength = tabs.value.length;
const sectionWrapper = ref<HTMLElement | null>(null);
const tabsContainer = ref<HTMLElement | null>(null);
const tabItems = ref<HTMLElement[]>([]);
const tabMenu = ref<HTMLElement | null>(null);
const tabMenuItems = ref<HTMLElement[]>([]);

let clickedLink = ref<boolean>(false);
let selectedTab = ref<number>(0);




function selectTab(index: number, fromLink: boolean) {

    selectedTab.value = index;
    //console.log(clickedLink.value);

    // if (window.innerWidth < 1024){
        
    // }
    const tabMenuItem = tabMenuItems.value[index];
    const tabItem = tabItems.value[index];
    
    tabMenuItems.value.forEach((item) => {
        item?.querySelector('a')?.setAttribute('data-active', 'false');
    });
    tabMenuItem?.querySelector('a')?.setAttribute('data-active', 'true');

    if (fromLink) {
        
        tabsContainer.value?.scroll({
            left: tabItem.offsetLeft,
            behavior: 'smooth'
        });
        
    } 
    
    const itemPos = tabMenuItem.offsetLeft + tabMenuItem.clientWidth;

        if (tabMenu.value?.offsetWidth && itemPos > tabMenu.value?.offsetWidth) {
            
            tabMenu.value?.scrollTo({left : itemPos - tabMenu.value?.offsetWidth + 100, behavior: 'smooth'});
            
        }
        if (tabMenu.value?.scrollLeft && tabMenuItem.offsetLeft < tabMenu.value?.scrollLeft) {
            tabMenu.value?.scrollTo({left : tabMenuItem.offsetLeft - 100, behavior: 'smooth'});
        }

}
onMounted(() => {
    
    // BASIC VARIABLES
    const hash = window.location.hash.substring(1);
    const aboutContainer = document.querySelector('#about .section-content');
    
    const cardHeight = window.innerHeight - 200;

    // INTERSECTION OBSERVERS
    const tabOptions = {
        root: tabsContainer.value,
        threshold: 0.75
    }

    const tabObserver = new IntersectionObserver(scrollTabSwitch, tabOptions);
    
    //const aboutObserver = new IntersectionObserver(toggleScrolling, { threshold: 1 });

    //aboutContainer ? aboutObserver.observe(aboutContainer) : null;
    
    tabItems.value?.forEach((item) => {
        if (window.location.hash) {
            
            const itemID = item.getAttribute('id');

            if (itemID === hash) {
                const tabN = Number(item.getAttribute('data-tab')) || 0;
                
                const itemPos = cardHeight * tabN;
                
                
                console.log('hash ' + tabN);
                //tabsContainer.value?.scrollTo({top : itemPos });
                    selectTab(tabN , true);
                //console.log(selectedTab.value);
                setTimeout(() => {
                    window.scrollTo({top :  sectionWrapper.value?.offsetTop, behavior: 'smooth' });
                    
                }, 200);
                
                
            }
            
        }
        setTimeout(() => {
            tabObserver.observe(item);
        }, 300);
        
    });
});

function scrollTabSwitch(element: any) {
        
    if (element[0].isIntersecting) {
        if (!clickedLink.value) {
            console.log('scrolling bug ' + clickedLink.value);
            let tabN = Number(element[0].target.getAttribute('data-tab')) || 0;
            selectTab(tabN, false);
        }
        
    } 
    
}
function clickedLinkHandler(index: number, event) {
    
    clickedLink.value = true;
    const tabN = index;
    selectTab(tabN , true);
    setTimeout(() => {
        clickedLink.value = false;
    }, 750);
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
    <section id="about" class="section-wrapper" ref="sectionWrapper">
        <div class="section-container" >
            <div class="flex justify-center">
                <header class="section-sidebar">
                    <h2 class="section-title | heading text-huge lh-tight">
                        <span class="about-title-text | text-box " data-variant="accent-bg clip-desk-bl"><span class="carved">About me</span></span>
                    </h2>
                    <nav class="tab-menu__container">
                        <ul class="tab-menu  | lateral-scroll | text-large uppercase text-right" ref="tabMenu">
                            <li class="tab-menu__item"
                                v-for="(tab, index)  in tabs"
                                :key="index" 
                                :data-tab="index"
                                ref="tabMenuItems"
                                >
                                    
                                <a class="button-show" :href="`#${tab.slug}`"  data-active="false" @click="clickedLinkHandler(index, $event)">{{ tab.title }}</a>
                            </li>
                            
                        </ul> 
                    </nav>
                    <p class="tldr">TL;DR 
                        <a class="button" href="https://cv.strongale.it" target="_blank">
                            <span class="button__inner">
                                <span>Read my CV</span>
                            </span>
                                
                        </a>
                    </p>
                    
                </header>
                
                
                <div class="section-content max-h-screen" data-variant="padded-screen" >
                    <div class="tab-wrapper | hide-scrollbar snap-xy  max-h-screen" ref="tabsContainer" data-variant="padded-screen">
                        <div class="tab-item | h-screen lh-loose body-text" 
                            data-variant="padded-screen" 
                            v-for="(tab, index)  in tabs"
                            :id="tab.slug"
                            :key="index"
                            :data-tab="index"
                            :data-active="index === selectedTab"
                            ref="tabItems">
                        
                        
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
        </div>
    </section>
</template>