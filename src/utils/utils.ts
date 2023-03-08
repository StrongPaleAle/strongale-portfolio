export function getTheme() {

  return localStorage.getItem('theme') || (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
  

}
export function setTheme(themeName:string) {

  localStorage.setItem('theme', themeName);
  document.documentElement.setAttribute('data-theme', themeName);

}
export function valueToPoint(value:number, index:number, total:number) {

  const x = 0
  const y = -value * 0.95
  const angle = ((Math.PI * 2) / total) * index
  const cos = Math.cos(angle)
  const sin = Math.sin(angle)
  const tx = x * cos - y * sin + 100
  const ty = x * sin + y * cos + 100
  return {
    x: tx,
    y: ty
  }

}
  
