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


export const options = reactive({
    canHover: window.matchMedia('(hover: hover)').matches,
    prefersReducedMotion: getMotionPreference(),
    toggleReducedMotion: function () {
        this.prefersReducedMotion = !this.prefersReducedMotion;
        let stringPRM = this.prefersReducedMotion.toString();
        localStorage.setItem('prefers-reduced-motion', stringPRM);
        localStorage.setItem('prm-toggled', 'true');
        document.documentElement.setAttribute('data-prm', stringPRM);
    }
    
});