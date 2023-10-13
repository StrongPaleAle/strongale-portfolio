import { reactive } from "vue";

function getMotionPreference() {
    const browserPRM = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (!localStorage.getItem('prm-toggled') || localStorage.getItem('prefers-reduced-motion') === null) {
        localStorage.setItem('prefers-reduced-motion', browserPRM.toString());
    }
    let storagePRM = localStorage.getItem('prefers-reduced-motion');
    if ( storagePRM === 'true' || storagePRM === 'false') {
        document.documentElement.setAttribute('data-prm', storagePRM);
        let prm : string | boolean = storagePRM;
        prm = (prm === 'true');
        return prm;
    }
    
    
}

function setWindow(){
    options.orientation = window.matchMedia('(orientation: portrait)').matches ? 'portrait' : 'landscape';
    options.windowWidth = window.innerWidth;
    options.windowHeight = window.innerHeight;
    options.canHover = window.matchMedia('(hover: hover)').matches;
}
window.addEventListener('resize', setWindow);
window.addEventListener('orientationchange', setWindow);

export const options = reactive({
    isLoaded: false,
    orientation: window.matchMedia('(orientation: portrait)').matches ? 'portrait' : 'landscape',
    windowWidth: window.innerWidth,
    windowHeight: window.innerHeight,
    canHover: window.matchMedia('(hover: hover)').matches,
    prefersReducedData: window.matchMedia('(prefers-reduced-data: reduce)').matches,
    prefersReducedMotion: getMotionPreference(),
    theme: document.documentElement.getAttribute('data-theme') || 'dark',
    toggleReducedMotion: function () {
        this.prefersReducedMotion = !this.prefersReducedMotion;
        let stringPRM = this.prefersReducedMotion.toString();
        localStorage.setItem('prefers-reduced-motion', stringPRM);
        localStorage.setItem('prm-toggled', 'true');
        document.documentElement.setAttribute('data-prm', stringPRM);
    },
    setResolution: function () { 
  
      const vMax = this.orientation === 'portrait' ? this.windowHeight : this.windowWidth;
      const vMin = this.orientation === 'portrait' ? this.windowWidth : this.windowHeight;
      if (vMin >= 1200 || vMax >= 2200){
        if (this.orientation === 'landscape'){
          return '1440';
        } else {
          return '1080';
        }
      } else if (vMin >= 940 || vMax >= 1760){
            
        return '1080';

      }else if (vMin >= 765 || vMax >= 1360){
      
        return '900';

      } else if (vMin >= 650 || vMax >= 1152){
          
        return '720';

      } else if (vMin >= 520 || vMax >= 850){
    
        return '576';

      } if (vMin >= 390 || vMax >= 680){
    
        return '432';

      } else {
        return '360';
      }

    }
    
});