<script setup lang="ts">
import { ref, onMounted } from "vue";
import {gsap} from 'gsap';
import { SlowMo } from "gsap/EasePack";
import { ScrollTrigger } from 'gsap/ScrollTrigger';
//import CoverStatic from './CoverStatic.vue';
// ffmpeg -i lowfps.mov -vf scale=1920:-1 -movflags faststart -vcodec libx264 -crf 20 -g 1 -pix_fmt yuv420p output_1920.mp4

const videoBg = ref<HTMLVideoElement | null>(null);
let videoFile = ref<string>(''); 
setFile();

onMounted(() =>{

    
    window.addEventListener('resize', setFile);

    if (videoBg.value) {

        gsap.registerPlugin(ScrollTrigger, SlowMo);
        gsap.ticker.fps(60);
        let videoScroll = videoBg.value,
            frameNumber = 0,
            src = videoFile.value;
        console.log('src: ' + src);

        let videoScrollTL = gsap.timeline({
            defaults: { duration: 1, ease: "slow(0.1, 0.4, false)" },
            scrollTrigger: {
                trigger: "body",
                start: "top top",
                end: "bottom bottom",
                scrub: 1,
                
                onUpdate: self => {
                frameNumber = self.progress / 14 * 100 - 1; //this takes fine tuning divide your videos FPS by two. My video's FPS was 30, 14 was the sweet spot. -1 fixes an issue on safari where the video disappears at the end of the scrollTrigger
                videoScroll.currentTime = frameNumber;
                }
            }
            });	
        
            /* Make sure the video is 'activated' on iOS */
        function once(el: HTMLElement, event: string, fn: any, opts?: any) {
        var onceFn = function (this: AnalyserNode, e) {
            el.removeEventListener(event, onceFn);
            fn.apply(this, arguments);
        };
        el.addEventListener(event, onceFn, opts);
        return onceFn;
        }			    

        once(document.documentElement, "touchstart", function (e) {
        videoScroll.play();
        videoScroll.pause();
        });

        //make sure video has loaded
        once(videoScroll, "loadedmetadata", function () {
        videoScrollTL.fromTo(videoScroll, { currentTime: 0 }, { currentTime: videoScroll.duration - 0.10 });
        });

        //When first coded, the Blobbing was important to ensure the browser wasn't dropping previously played segments, but it doesn't seem to be a problem now. Possibly based on memory availability?
        setTimeout(function () {
        if (window["fetch"]) {
            fetch(src).then(function (response) {
            return response.blob();
            }).then(function (response) {
            var blobURL = URL.createObjectURL(response);
            var t = videoScroll.currentTime;
            once(document.documentElement, "touchstart", function (e) {
                videoScroll.setAttribute("src", blobURL);
                videoScroll.currentTime = t + 0.01;
            });
            });
        }
        }, 0);

        // /* Make sure the video is 'activated' on iOS */
        // function once(el: HTMLElement, event: string, fn: any) {
        // var onceFn = function (this: any, e) {
        //     el.removeEventListener(event, onceFn);
        //     fn.apply(this, arguments);
        // };
        // el.addEventListener(event, onceFn);
        // return onceFn;
        // } 

        // once(document.documentElement, "touchstart", function (e: any) : void {
        // video.play();
        // video.pause();
        // });

        // /* ---------------------------------- */
        // /* Scroll Control! */

        // gsap.registerPlugin(ScrollTrigger, SlowMo);

        // let tl = gsap.timeline({
        // defaults: { duration: 1, ease: "slow(0.1, 0.4, false)"},
        // scrollTrigger: {
        //     trigger: "body",
        //     start: "top top",
        //     end: "bottom bottom",
        //     scrub: 1.5
        // }
        // });

        // once(video, "loadedmetadata", () => {
        // tl.fromTo(
        //     video,
        //     {
        //     currentTime: 0
        //     },
        //     {
        //     currentTime: video.duration - 0.1 || 1
        //     }
        // );
        // });

        // /* When first coded, the Blobbing was important to ensure the browser wasn't dropping previously played segments, but it doesn't seem to be a problem now. Possibly based on memory availability? */
        // setTimeout(function () {
        // if (window["fetch"]) {
        //     fetch(src)
        //     .then((response) => response.blob())
        //     .then((response) => {
        //         var blobURL = URL.createObjectURL(response);

        //         var t = video.currentTime;
        //         once(document.documentElement, "touchstart", function (e: any) {
        //         video.play();
        //         video.pause();
        //         });

        //         video.setAttribute("src", blobURL);
        //         video.currentTime = t + 0.01;
        //     });
        // }
        // }, 1000);

        /* ---------------------------------- */
    }
    
})

function setFile(){
        if (window.matchMedia("(orientation: portrait)").matches){

            if (window.innerWidth <= 390){

                videoFile.value = 'portrait_360';

            } else if (window.innerWidth <= 520){

                videoFile.value = 'portrait_432';

            } else if (window.innerWidth <= 650){

                videoFile.value = 'portrait_576';

            } else if (window.innerWidth <= 765){

                videoFile.value = 'portrait_720';

            } else if (window.innerWidth <= 855){

                videoFile.value = 'portrait_810';

            } else if (window.innerWidth <= 990){
                
                videoFile.value = 'portrait_900';

            }  else {
                
                videoFile.value = 'portrait_1080';

            } 

        } else {
            videoFile.value = 'newlow2_1920';
        }
        videoFile.value = `/assets/video/${ videoFile.value }.mp4`;
        
    }

</script>
<template>
    <div class="video-holder">
        <video :src="videoFile" playsinline="true" preload="auto" muted class="video-background" ref="videoBg"></video>
    </div>
    
</template>