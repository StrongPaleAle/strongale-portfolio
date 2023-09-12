<script setup lang="ts">
import { ref, onMounted } from "vue";
import { options } from "../utils/options";
import {gsap} from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const videoBg = ref<HTMLVideoElement | null>(null);

onMounted(() =>{
    if (videoBg.value) {
        const video = videoBg.value;
        let src = video.currentSrc || video.src;
        console.log(video, src);

        /* Make sure the video is 'activated' on iOS */
        function once(el, event, fn) {
        var onceFn = function (e) {
            el.removeEventListener(event, onceFn);
            fn.apply(this, arguments);
        };
        el.addEventListener(event, onceFn);
        return onceFn;
        }

        once(document.documentElement, "touchstart", function (e) {
        video.play();
        video.pause();
        });

        /* ---------------------------------- */
        /* Scroll Control! */

        gsap.registerPlugin(ScrollTrigger);

        let tl = gsap.timeline({
        defaults: { duration: 1 },
        scrollTrigger: {
            trigger: "body",
            start: "top top",
            end: "bottom bottom",
            scrub: 1.5
        }
        });

        once(video, "loadedmetadata", () => {
        tl.fromTo(
            video,
            {
            currentTime: 0
            },
            {
            currentTime: video.duration || 1
            }
        );
        });

        /* When first coded, the Blobbing was important to ensure the browser wasn't dropping previously played segments, but it doesn't seem to be a problem now. Possibly based on memory availability? */
        setTimeout(function () {
        if (window["fetch"]) {
            fetch(src)
            .then((response) => response.blob())
            .then((response) => {
                var blobURL = URL.createObjectURL(response);

                var t = video.currentTime;
                once(document.documentElement, "touchstart", function (e) {
                video.play();
                video.pause();
                });

                video.setAttribute("src", blobURL);
                video.currentTime = t + 0.01;
            });
        }
        }, 1000);

        /* ---------------------------------- */
            }
})

</script>
<template>
    <div class="video-holder">
        <video  src="/assets/video/landscapeultramod.mp4" playsinline="true" preload="auto" muted class="video-background" ref="videoBg"></video>
    </div>
    
</template>