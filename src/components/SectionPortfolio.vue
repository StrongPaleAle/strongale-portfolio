<script setup lang="ts">
import { Project } from "@/types";
import PortfolioProject from "./PortfolioProject.vue";
import SingleProject from "./SingleProject.vue";
import Projects from "../data/projects.json";
import { onMounted } from "vue";
import {gsap} from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { rotateElement } from "../utils/utils";
import { options } from "../utils/options";

const projects = Projects as Project[];
const totalProjects = projects.length - 1;
gsap.registerPlugin(ScrollTrigger);

onMounted(() => {
    
    
    const portfolioContainer = document.querySelector('#portfolio .portfolio-container');
    const portfolioItems = Array.from(document.querySelectorAll('#portfolio .portfolio-item') as NodeListOf<HTMLElement>);
    const portfolioWidth = portfolioContainer ? portfolioContainer.clientWidth : 0;
    const portfolioHeight = portfolioContainer ? portfolioContainer.clientHeight : 0;

    const getRandom = (min: number, max: number) => Math.floor(Math.random() * (max - min + 1)) + min;
    const getCenter = (parentD: number, childD: number, childS: number) => (parentD / 2) - (childD + (childS / 2));
    let rowElements = 0;
    let topDistance = 0;
    let startA = 'top 90%';
    
    let pin = false;
    if(window.innerWidth < 768){
        startA = 'top 70%';    
        pin = true;
        
        
    }

    portfolioItems.forEach((item: HTMLElement, index) => {
        const itemWidth = item.clientWidth;
        const itemHeight = item.clientHeight;
        const itemTop = item.offsetTop;
        const itemLeft = item.offsetLeft;
        if (item.offsetTop > topDistance){
            rowElements = index;
            topDistance = item.offsetTop;

        }
        let itemDelay = 0.5 * index;
        
        const itemX = getCenter(portfolioWidth, itemLeft, itemWidth);
        const itemY = getCenter(portfolioHeight, itemTop, itemHeight);
        let itemScale = 1 - (1 / portfolioItems.length * (index + 1));
        let itemZIndex = portfolioItems.length - index;
        let startingScale = itemScale / 2;
        const trigger = `#${item.getAttribute('id')}`;
        const animate = trigger + ' .card';
        //console.log(itemX);
        
        item.style.setProperty('--x', `${itemX}px`);
        item.style.setProperty('--rotateX', `${itemX / 15}deg`);
        item.style.setProperty('--y', `${itemY}px`);
        item.style.setProperty('--rotateY', `${itemY / 15 * -1}deg`);
        item.style.setProperty('--scale', `${itemScale}`);
        item.style.setProperty('--zIndex', `${itemZIndex}`);
        if(window.innerWidth < 768){
            itemDelay = 0;
            itemScale = 1;
            item.style.setProperty('--rotateY', `${itemY / 30 * -1}deg`);
            startingScale = 0;
        }
        
            
        const portfolioTimeline = gsap.timeline({
            scrollTrigger: {
                trigger: trigger,
                pin: pin,
                scrub: 0.5,
                start: startA,
                end: '+=100',
                
            }
        })
        portfolioTimeline.fromTo(trigger, {
            x: itemX,
            y: itemY,
            opacity: itemScale,
            scale: startingScale,
            
        }, {
            duration: 0.5,
            delay: itemDelay,
            x:0,
            y:0,
            opacity: 1,
            scale: 1,
            ease: 'none'
        })
       
        if(!options.canHover){
            const noHoverObserver = new IntersectionObserver(centerScreenRotate, {rootMargin:'-10% 0px -10% 0px', threshold: 1});
            item ? noHoverObserver.observe(item) : null;
        }
    })
    // const portfolioObserver = new IntersectionObserver(toggleMouseTracking, { threshold: 1 });
    // portfolioContainer ? portfolioObserver.observe(portfolioContainer) : null;

})
function toggleMouseTracking(element: any) {
    if (element[0].isIntersecting) {
        //console.log('scrolling');
        document.addEventListener("mousemove", (e) => {
            const childs = Array.from(element[0].target.querySelectorAll('.portfolio-item') as NodeListOf<HTMLElement>);
            childs.forEach((item: HTMLElement) => {
                rotateElement(e, item);
            });
        });
        
    }
}
function centerScreenRotate(element: any) {
    if (element[0].isIntersecting) {
        //console.log('fully inside');
        element[0].target.classList.add('on-center');
        
        
    } else {
        //console.log('not fully inside');
        element[0].target.classList.remove('on-center');
    }
}
</script>
<template>
    <section id="portfolio" class="section-wrapper">
        <div class="section-container">
            <header class="section-header | flex gap-em-2">
                <h2 class="section-title | heading text-huge lh-tight">
                    <span class="about-title-text | text-box " data-variant="accent-bg"><span class="carved">Portfolio</span></span>
                </h2>

                <div>
                    <p class="content-text | text-large lh-loose">
                        In my career, I worked on more than <strong>70 projects</strong>. These are some of those I think have something interesting to tell about.
                    </p>
                </div>
                
            </header>
            <div class="portfolio-container gap-em-2 pblock-em-2">
                <!-- <div class="portfolio-item | card " id="portfolio-1">
                    <div class="card flex gap-em-2">
                        <div class="portfolio-item__image">
                            <img src="https://via.placeholder.com/300x200" alt="">
                        </div>
                        <div class="portfolio-item__content">
                            <h3 class="portfolio-item__title | heading text-large">Project title 2</h3>
                            <p class="portfolio-item__description | content-text | text-large lh-loose">
                            </p>
                            <div class="portfolio-item__links">
                                <a href="#" class="button">View project</a>
                                <a href="#" class="button">View source</a>
                            </div>
                        </div>
                    </div>
                </div> -->
                <PortfolioProject 
                    v-for="project, index in projects" 
                    :key="project.id" 
                    :project="project" 
                    :index="index"
                    
                />
                
            </div>
        </div>
        <SingleProject
            v-for="project, index in projects" 
            :key="project.id" 
            :project="project" 
            :index="index"
            :totalProjects="totalProjects"
            :nextProject="projects[index + 1]"
            :prevProject="projects[index - 1]"
        />
    </section>
</template>