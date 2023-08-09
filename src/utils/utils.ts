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

export function openDialog(dialog: string) {

  const oDialogs = document.querySelectorAll('.dialog.active');
  console.log('closing dialogs');
  oDialogs.forEach((oDialog) => {
    const dialogID = oDialog.id;
    closeDialog(dialogID, false);
  });
  console.log('opening dialog: ' + dialog);
  const dialogElement = document.getElementById(dialog);
  

  

  if (dialogElement?.classList.contains('closed')) {
    dialogElement?.classList.remove('closed');
  }
  
  
  document.body.classList.add('modal-open');
  dialogElement?.classList.add('active');
  dialogElement?.setAttribute("tabindex", "-1");

  document.addEventListener("keydown", handleKeyDialog);
  
}

export function closeDialog(dialog: string, closeModal: boolean = true) {
  
    const dialogElement = document.getElementById(dialog);
    dialogElement?.classList.remove('active');
    dialogElement?.removeAttribute("tabindex");
    dialogElement?.classList.add('closed');
    dialogElement?.removeEventListener("keydown", handleKeyDialog);
    closeModal ? document.body.classList.remove('modal-open') : null;
    history.replaceState("", document.title, window.location.pathname);
}



function handleKeyDialog(event) {
  console.log('handleKeyDialog');
  
  
  // handle TAB key
  if (event.key === "Tab") {
    const dialogElement = document.querySelector('.dialog.active');
    const dialogElements = 'input:not([disabled]), button:not([disabled]), [href]:not([disabled])';
    const focusableElements = dialogElement?.querySelectorAll(dialogElements);
    if (focusableElements) {
      const firstFocusableElement = focusableElements[0] as HTMLElement;
      const lastFocusableElement = focusableElements[focusableElements.length - 1];
      console.log(document.activeElement);
      if (document.activeElement === lastFocusableElement) {
      event.preventDefault();
      firstFocusableElement.focus();
      }
    }
  }

  if (event.key === "Escape") {
    const oDialog = document.querySelector('.dialog.active');
    const dialogTrigger = document.querySelector('.dialog-trigger') as HTMLElement;
    console.log('Escape pressed');
    const dialogID = oDialog?.id;
    dialogID ? closeDialog(dialogID) : null;
    dialogTrigger ? dialogTrigger.focus() : null;
  }
}