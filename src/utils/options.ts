import { reactive } from "vue";


function getMotionPreference() {
    const browserPRM = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (!localStorage.getItem('prm-toggled')) {
        localStorage.setItem('prefers-reduced-motion', browserPRM.toString());
    }
    
    document.documentElement.setAttribute('data-prm', localStorage.getItem('prefers-reduced-motion').toString());
    let prm : string | boolean = localStorage.getItem('prefers-reduced-motion');
    prm = (prm === 'true');
    return prm;
}


export const options = reactive({
    canHover: window.matchMedia('(hover: hover)').matches,
    prefersReducedMotion: getMotionPreference(),
    toggleReducedMotion: function () {
        this.prefersReducedMotion = !this.prefersReducedMotion;
        
        localStorage.setItem('prefers-reduced-motion', this.prefersReducedMotion);
        localStorage.setItem('prm-toggled', 'true');
        document.documentElement.setAttribute('data-prm', localStorage.getItem('prefers-reduced-motion'));
    }
    
});