import {options} from './options';

export function openDialog(dialog: string) {

    const oDialogs = document.querySelectorAll('.dialog.active');
    console.log('closing dialogs');
    oDialogs.forEach((oDialog) => {
      const dialogID = oDialog.id;
      closeDialog(dialogID, false);
    });
    //console.log('opening dialog: ' + dialog);
    const dialogElement = document.getElementById(dialog);
    
  
    
  
    if (dialogElement?.classList.contains('closed')) {
      dialogElement?.classList.remove('closed');
    }
    
    
    
    dialogElement?.classList.add('active');
    dialogElement?.setAttribute("tabindex", "-1");
    options.isModalOpen = true;
    document.addEventListener("keydown", handleKeyDialog);
    
  }
  
  export function closeDialog(dialog: string, closeModal: boolean = true) {
    
      const dialogElement = document.getElementById(dialog);
      dialogElement?.classList.remove('active');
      dialogElement?.removeAttribute("tabindex");
      dialogElement?.classList.add('closed');
      dialogElement?.removeEventListener("keydown", handleKeyDialog);
      closeModal ? options.isModalOpen = false : null;
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