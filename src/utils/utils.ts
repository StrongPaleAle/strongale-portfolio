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


  
export function rotateElement(event: MouseEvent, element: HTMLElement) {
  // get mouse position
  const x = event.clientX;
  const y = event.clientY;
  // console.log(x, y)

  // find the middle
  const itemWidth = element.clientWidth;
  //console.log(itemWidth)
  const itemHeight = element.clientHeight;
  const itemTop = element.offsetTop;
  const itemLeft = element.offsetLeft;

  const middleX = (itemWidth / 2) + itemLeft;
  const middleY = (itemHeight / 2) + itemTop;
  //console.log(middleX, middleY)

  // get offset from middle as a percentage
  // and tone it down a little
  let offsetX = ((x - middleX) / middleX) * 10;
  // if (offsetX > 30) offsetX = 30;
  // if (offsetX < -30) offsetX = -30;
  let offsetY = ((y - middleY) / middleY) * 10;
  // if (offsetY > 30) offsetY = 30;
  // if (offsetY < -30) offsetY = -30;

  //if (offsetY > 45) offsetY = 45;
  // console.log(offsetX, offsetY);

  // set rotation
  element.style.setProperty("--rotateX", offsetX + "deg");
  element.style.setProperty("--rotateY", -1 * offsetY + "deg");
}
