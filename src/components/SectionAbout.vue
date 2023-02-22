<script setup lang="ts">
import BlockText from './BlockText.vue';
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
    const aboutContainer = document.querySelector('#about .section-container');
    selectTab(0);
    const options = {
        threshold: 1
    }
    const observer = new IntersectionObserver(function(element, observer) {
        
            if (element[0].isIntersecting) {
                tabScroll(element[0].target);
                observer.unobserve(element[0].target);
            }
        
    }, options);
    aboutContainer ? observer.observe(aboutContainer): null;
});



function tabScroll(element) {
    element.addEventListener('wheel', (e) => {
        if (isAnimating) {
            console.log('animating');
            return;
        } 
        
        if (e.deltaY > 0) {
            if (selectedTab.value < tabsLength - 1) {
                isAnimating = true;
                e.preventDefault();
                selectedTab.value++;
                
            } 

        } else {
            isAnimating = true;
            if (selectedTab.value > 0) {
                isAnimating = true;
                e.preventDefault();
                selectedTab.value--;
            }  
        }
        setTimeout(() => {
            isAnimating = false;
        }, 200);
    });
}
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
                                @click="selectTab(index)">
                                    
                                <button  :data-active="index === selectedTab">{{ tab.title }}</button>
                            </li>
                            
                        </ul> 
                    </nav>
                    
                </div>
                
                
                <div class="section-content | border-block-accent">
                    
                    <div class="card lh-double | body-text" data-variant="light">

                        <div class="content-text">

                            <div class="tab-container"
                                v-for="(tab, index)  in tabs"
                                :key="index"
                                v-show="index === selectedTab">

                                <div class="tab-section"
                                    
                                    v-for="(section, index)  in tab.sections"
                                    :id="section.id"
                                    :key="index" >

                                    <h3 class="text-accent heading uppercase lh-tight"
                                        v-if="section.title" >

                                        {{ section.title }}

                                    </h3>

                                    <div class="tab-section__content" 
                                        v-for="block in section.blocks" >

                                        <h3 class="text-accent heading uppercase lh-tight"
                                            v-if="block.title" >

                                            {{ block.title }}

                                        </h3>

                                        
                                        <BlockText v-if="block.type === 'BlockText'" :block="block"/>
                                        

                                    </div>
                                

                                </div>
                                
                            </div>
                            
                        
                        
                        <!-- <p>I attended Lucca's Art High School, and in the meantime, I participated in various extracurricular activities such as student representative, marble sculpture, graphic design, 2d animation. Afterward, I graduated in Multimedia Arts at the Academy of Fine Arts of Carrara. During my years in Carrara, my passion for web development began.</p> -->
                        </div>
                        

                    </div>
                
                    
                </div>
                
            </div>
        </div>
    </section>
</template>