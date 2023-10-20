<script setup lang="ts">
import { ref } from "vue";
import { options } from "../utils/options";
const loaderWrapper = ref<HTMLElement | null>(null);

defineExpose({
    loaderWrapper
});
</script>
<template>
    <div class="loader-wrapper" :class="{ loaded : options.isLoaded }" ref="loaderWrapper">
        <div class="loader">
            <div class="loader__logo">
                <div class="masked-logo loader__logo-shadow">
                   
                </div>
                <div class="masked-logo loader__logo-bottom">
                    
                </div>
                <div class="masked-logo loader__logo-top">
                    
                </div>
                
                
            </div>
                <p class="loader__text">Loading<br><span>.</span><span>.</span><span>.</span></p>
            </div>
        
    </div>
</template>