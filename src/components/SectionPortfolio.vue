<script setup lang="ts">
import { onMounted } from "vue";
import {gsap} from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';



onMounted(() => {
    const portfolioContainer = document.querySelector('#portfolio .portfolio-container');
    const portfolioItems = Array.from(document.querySelectorAll('#portfolio .portfolio-item') as NodeListOf<HTMLElement>);
    const portfolioWidth = portfolioContainer ? portfolioContainer.clientWidth : 0;
    const portfolioHeight = portfolioContainer ? portfolioContainer.clientHeight : 0;

    const getRandom = (min: number, max: number) => Math.floor(Math.random() * (max - min + 1)) + min;
    
    
    portfolioItems.forEach((item: HTMLElement) => {
        const itemWidth = item.clientWidth;
        const itemHeight = item.clientHeight;
        const itemX = getRandom(0, portfolioWidth - itemWidth);
        const itemY = getRandom(0, portfolioHeight - itemHeight);
        
        item.style.setProperty('--x', `${itemX}px`);
        item.style.setProperty('--y', `${itemY}px`);
        const portfolioTimeline = gsap.timeline({
            scrollTrigger: {
                trigger: portfolioContainer,
                pin:false,
                scrub:true,
                markers: true
            }
        })
        portfolioTimeline.to(item, {
            duration: 1,
            z: 200,
            ease: 'none'
        })
    })

       

})
</script>
<template>
    <section id="portfolio" class="section-wrapper">
        <div class="section-container">
            <header class="section-header | flex gap-2em">
                <h2 class="section-title | heading text-huge lh-tight">
                    <span class="about-title-text | text-box " data-variant="accent-bg"><span class="carved">Portfolio</span></span>
                </h2>

                <div>
                    <p class="content-text | text-large lh-loose">
                        In my career, I worked on more than <strong>70 projects</strong>. These are some of those I think have something interesting to tell about.
                    </p>
                </div>
                
            </header>
            <div class="portfolio-container">
                <div class="portfolio-item | card flex gap-2em">
                    <div class="portfolio-item__image">
                        <img src="https://via.placeholder.com/300x200" alt="">
                    </div>
                    <div class="portfolio-item__content">
                        <h3 class="portfolio-item__title | heading text-large">Project title</h3>
                        <p class="portfolio-item__description | content-text | text-large lh-loose">
                        </p>
                        <div class="portfolio-item__links">
                            <a href="#" class="button">View project</a>
                            <a href="#" class="button">View source</a>
                        </div>
                    </div>
                </div>
                <div class="portfolio-item | card flex gap-2em">
                    <div class="portfolio-item__image">
                        <img src="https://via.placeholder.com/300x200" alt="">
                    </div>
                    <div class="portfolio-item__content">
                        <h3 class="portfolio-item__title | heading text-large">Project title 1</h3>
                        <p class="portfolio-item__description | content-text | text-large lh-loose">
                        </p>
                        <div class="portfolio-item__links">
                            <a href="#" class="button">View project</a>
                            <a href="#" class="button">View source</a>
                        </div>
                    </div>
                </div>
                <div class="portfolio-item | card flex gap-2em">
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
                <div class="portfolio-item | card flex gap-2em">
                    <div class="portfolio-item__image">
                        <img src="https://via.placeholder.com/300x200" alt="">
                    </div>
                    <div class="portfolio-item__content">
                        <h3 class="portfolio-item__title | heading text-large">Project title 3</h3>
                        <p class="portfolio-item__description | content-text | text-large lh-loose">
                        </p>
                        <div class="portfolio-item__links">
                            <a href="#" class="button">View project</a>
                            <a href="#" class="button">View source</a>
                        </div>
                    </div>
                </div>
                <div class="portfolio-item | card flex gap-2em">
                    <div class="portfolio-item__image">
                        <img src="https://via.placeholder.com/300x200" alt="">
                    </div>
                    <div class="portfolio-item__content">
                        <h3 class="portfolio-item__title | heading text-large">Project title 4</h3>
                        <p class="portfolio-item__description | content-text | text-large lh-loose">
                        </p>
                        <div class="portfolio-item__links">
                            <a href="#" class="button">View project</a>
                            <a href="#" class="button">View source</a>
                        </div>
                    </div>
                </div>
                <div class="portfolio-item | card flex gap-2em">
                    <div class="portfolio-item__image">
                        <img src="https://via.placeholder.com/300x200" alt="">
                    </div>
                    <div class="portfolio-item__content">
                        <h3 class="portfolio-item__title | heading text-large">Project title 5</h3>
                        <p class="portfolio-item__description | content-text | text-large lh-loose">
                        </p>
                        <div class="portfolio-item__links">
                            <a href="#" class="button">View project</a>
                            <a href="#" class="button">View source</a>
                        </div>
                    </div>
                </div>
                <div class="portfolio-item | card flex gap-2em">
                    <div class="portfolio-item__image">
                        <img src="https://via.placeholder.com/300x200" alt="">
                    </div>
                    <div class="portfolio-item__content">
                        <h3 class="portfolio-item__title | heading text-large">Project title 6</h3>
                        <p class="portfolio-item__description | content-text | text-large lh-loose">
                        </p>
                        <div class="portfolio-item__links">
                            <a href="#" class="button">View project</a>
                            <a href="#" class="button">View source</a>
                        </div>
                    </div>
                </div>
                <div class="portfolio-item | card flex gap-2em">
                    <div class="portfolio-item__image">
                        <img src="https://via.placeholder.com/300x200" alt="">
                    </div>
                    <div class="portfolio-item__content">
                        <h3 class="portfolio-item__title | heading text-large">Project title 7</h3>
                        <p class="portfolio-item__description | content-text | text-large lh-loose">
                        </p>
                        <div class="portfolio-item__links">
                            <a href="#" class="button">View project</a>
                            <a href="#" class="button">View source</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>