<script setup lang="ts">
import { ref, onMounted } from "vue";
import { options } from "../utils/options";
import { NewMask, MaskLayer } from '@/types';
import MasksData from '../data/newmasks.json';


const masks = ref<Partial<NewMask>[]>(MasksData);
const masksObj = JSON.parse(JSON.stringify(masks.value));
//const testPath = 'M6044.56,9717.97c-306.009,10.455 -1133.78,478.973 -1277.03,185.557c-272.588,-558.282 -997.118,-172.087 -1023.97,-224.328c-28.334,-55.02 -319.026,-150.593 -314.228,-224.198c8.798,-135.594 -599.563,-277.665 -710.989,-339.094c-177.148,-97.662 -513.636,-378.868 -702.608,-486.576c-61.972,-35.243 -260.881,79.339 -360.951,-282.494c-10.498,-37.934 -395.06,0.271 -390.732,-66.438c0.929,-14.189 45.786,-448.33 -229.104,-434.636c-212.976,10.584 -190.197,-294.5 -284.442,-477.591c-77.125,-150.032 -111.032,-325.439 -98.882,-511.913c7.043,-107.875 -299.069,-163.308 -306.667,-280.47c-17.772,-274.016 -69.28,-349.068 -49.484,-652.797c4.028,-61.788 -240.234,-226.929 -147.111,-390.223c12.855,-22.542 -28.335,-194.813 -110.266,-267.968c-158.128,-141.19 230.815,-409.018 174.076,-613.487c-14.509,-52.269 -70.759,-74.38 -66.55,-139.018c5.903,-90.5 -13.119,-157.713 -7.19,-248.688c11.6,-177.967 44.821,-383.893 56.349,-560.713c10.624,-162.991 313.776,-750.824 322.56,-885.583c4.715,-72.347 261.665,-200.28 286.445,-282.597c105.78,-351.374 194.756,-579.614 461.211,-889.256c69.124,-80.324 327.114,-189.663 397.127,-258.981c100.079,-99.09 473.105,-698.681 514.36,-493.591c55.19,274.368 379.418,-178.298 454.971,-242.811c287.283,-245.305 813.194,31.327 1126.81,-329.722c379.638,-437.065 640.587,-354.336 705.234,-177.487c123.818,338.721 917.751,-139.147 1183.33,75.338c103.939,83.943 242.04,-259.769 331.302,-184.694c129.089,108.556 309.583,336.195 485.466,360.066c233.925,31.748 179.071,-235.716 627.812,235.991c188.9,198.568 482.599,-50.866 636.07,201.766c83.46,137.393 290.658,494.822 364.355,638.065c55.446,107.757 395.716,135.086 482.21,220.699c156.263,154.655 417.883,323.798 628.331,391.539c189.941,61.141 113.556,663.741 250.805,812.03c313.276,338.486 266.559,479.334 281.398,721.415c12.309,200.798 168.712,440.939 177.742,989.691c0.029,1.476 97.609,174.307 86.859,362.188c-10.681,186.669 -129.693,388.396 -129.666,389.866c3.466,229.674 121.298,549.193 39.535,832.884c-65.295,226.551 -316.21,414.483 -426.597,631.194c-122.74,240.9 -291.334,472.467 -410.129,712.749c-87.722,177.497 -442.783,824.155 -585.241,914.328c-112.43,71.15 -316.333,256.447 -458.027,370.425c-141.866,114.144 -285.117,33.344 -402.628,72.834c-177.7,59.718 -322.062,211.007 -516.134,272.446c-623.055,197.178 -911.409,548.995 -1065.73,554.283Zm142.222,-4047.52c52.674,6.065 57.097,10.448 113.412,-79.646c27.973,-44.751 149.893,-53.802 159.849,-130.132c0,-70 10,-90 40,-140c20,-40 -20,-132.086 0,-162.086c30,-20 24.921,-108.998 12.08,-148.178c-16.705,-50.973 1.237,-150.554 -79.261,-220.889c-30.763,-26.879 -59.865,-56.392 -89.654,-75.349c-90,-50 -134.827,-151.485 -192.558,-174.368c-158.855,-62.968 53.764,-80.121 -206.236,-130.121c-30,-0 -91.235,-99.009 -161.235,-109.009c-90,-10 -152.894,-41.383 -192.894,-41.383c-35.01,5.002 -110.851,56.528 -110.242,41.383c1.719,-42.72 -82.558,-61.656 -90,-90c-10.158,-38.689 -80,-10 -110,-20c-40,-20 -100,-30 -140,-50c-90,-30 -110,-0.262 -200,-10.262c-36.445,-5.206 -86.443,10.047 -134.47,10.262c-44.22,0.198 -86.768,-15.055 -115.53,-10.262c-29.964,9.989 -56.903,-35.035 -89.042,-33.783c-32.215,1.255 -69.624,48.774 -94.654,48.774c-40,-10 -98.16,28.501 -128.16,18.501c-56.051,-16.815 -139.302,-47.801 -185.678,-0c-32.764,33.77 -76.101,48.745 -115.655,26.77c-23.705,-11.853 -56.77,82.569 -136.143,110c-54.562,18.856 -114.002,4.333 -127.097,50c-25.555,89.115 73.008,61.824 -123.571,119.806c-42.894,12.652 -60.06,104.918 -130,102.955c-39.984,-1.123 -71.209,196.086 -81.209,216.086c-10,20 51.209,37.801 81.209,107.801c0,20 -50,93.352 -40,103.352c20,20 20,137.914 40,157.914c30,30 20,92.086 50,122.086c10,20 70,50 80,60c50,30 63.571,38.241 123.571,58.241c10,0 9.652,61.759 19.652,61.759c10,10 66.777,-0 76.777,10c40,50 72.857,71.518 130,100.394c74.414,37.603 142.466,70.711 152.466,90.711c30,30 80.886,68.895 120.886,88.895c60,20 49.951,20 99.951,-0c70,-30 156.697,90 156.697,90c4.59,4.59 59.737,-4.505 120,-10c71.036,-6.477 84.463,45.767 115.53,20c20.024,-16.608 102.346,8.3 134.47,-0c55.79,-14.415 114.629,52.712 152.33,52.712c40,0 204.61,-43.621 224.61,-13.621c10,10 141.535,-5.412 163.06,0.642c69.021,19.415 133.136,-129.733 303.136,-59.733c37.505,15.002 81.044,2.486 143.457,-41.58c20.793,-14.681 95.391,-50.511 124.567,-48.42c67.67,4.851 99.76,-74.347 135.579,-70.222Z';
const canvas = ref<HTMLCanvasElement | null>(null);
const masksLength = masksObj.length;


onMounted(() => {
    if (canvas.value) {

        const ctx = canvas.value.getContext('2d');
        const width = canvas.value.clientWidth;
        const height = canvas.value.clientHeight;
        const factor = (width * 3.4) / 10000;

        const domChanges = ref({
            rotationConst: window.matchMedia("(orientation: portrait)").matches ? 90 : 0,
            initialScale: 100,
            rotationModifier: 0
        })

        
        setDisplay(canvas.value, ctx);

        window.addEventListener('resize', () => {
            setDisplay(canvas.value, ctx);
            domChanges.value.rotationConst = window.matchMedia("(orientation: portrait)").matches ? 90 : 0;
        });

        window.addEventListener('orientationchange', () => {
            setDisplay(canvas.value, ctx);
            domChanges.value.rotationConst = window.matchMedia("(orientation: portrait)").matches ? 90 : 0;
        });

        
        masksObj.forEach((mask, index) => {
            if (mask) {
                
                let propertyBg = `--${options.theme}-layer-bg-${mask.id}`;
                let propertyShade = `--${options.theme}-layer-shade-${mask.id}`;
                let colorBg = getComputedStyle(document.documentElement).getPropertyValue(propertyBg);
                let colorShade = getComputedStyle(document.documentElement).getPropertyValue(propertyShade);
                let layerRotation = 180 - ((180 * index) / masksLength) + domChanges.value.rotationConst;

                const maskLayer = ref(<MaskLayer>{
                    id : mask.id,
                    path : mask.path,
                    size : mask.size,
                    colorBg : colorBg,
                    colorShade : colorShade,
                    width : mask.size * factor,
                    x: (width - mask.size * factor) / 2,
                    y: (height - mask.size * factor) / 2,
                    rotation : layerRotation,
                    scale : factor
                }); 

                drawMask(maskLayer.value, ctx, canvas.value);
    
                
            }
        });

        
    }
});

function setDisplay(canvas: HTMLCanvasElement | null, ctx: CanvasRenderingContext2D | null) {
  
  let ratio = window.devicePixelRatio || 1;
  console.log('ratio' + ratio);
  if (canvas) {
      canvas.width = canvas.clientWidth * ratio;
      canvas.height = canvas.clientHeight * ratio;
  }
  if (ctx) {
      ctx.scale(ratio, ratio);
  }
 
}
function drawMask(mask: MaskLayer, ctx: CanvasRenderingContext2D | null, canvas: HTMLCanvasElement | null){
    if (!ctx || !canvas) return;

    //ctx.clearRect(0, 0, canvas?.width || 0, canvas?.height || 0);
    ctx.save();
    let p = new Path2D(mask.path);
        
    let gradient = ctx.createConicGradient(90, mask.size / 2, mask.size / 2);
    gradient.addColorStop(0, mask.colorBg);
    gradient.addColorStop(0.15, mask.colorShade);
    gradient.addColorStop(0.30, mask.colorBg);
    gradient.addColorStop(0.45, mask.colorShade);
    gradient.addColorStop(0.60, mask.colorBg);
    gradient.addColorStop(0.75, mask.colorShade);
    gradient.addColorStop(1, mask.colorBg);

    ctx.fillStyle = gradient;
    
    
    // 
    // 
    
    ctx.translate(canvas.width / 2, canvas.height / 2);
    ctx.rotate(mask.rotation * Math.PI / 180);
    ctx.translate(-1 * canvas.width / 2, -1 * canvas.height / 2);
    ctx.translate(((canvas.width - mask.width) / 2) , ((canvas.height - mask.width) / 2) );
    ctx.scale(mask.scale, mask.scale);
    // ctx.translate( objWidth / 2, objWidth / 2);
    //ctx.rotate(layerRotation * Math.PI / 180);
    ctx.fill(p);
    
    ctx.restore();
}
</script>
<template>
    <canvas id="canvas-cover" class="canvas-cover" ref="canvas"></canvas>
</template>