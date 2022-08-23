let modal = document.querySelector('.contact-modal-container')

document.querySelector('#open-modal').addEventListener("click", () => {
    modal.setAttribute("style", "display:block")
})

document.querySelector('#close-modal').addEventListener("click", () => {
    modal.setAttribute("style", "")
})

document.querySelector('#copy-email').addEventListener("click", () => {
    let copyTextarea = document.querySelector('#email-text');
    copyTextarea.focus();
    copyTextarea.select();
    copyTextarea.setSelectionRange(0, 99999);
    navigator.clipboard.writeText(copyTextarea.value);
    document.querySelector('#copy-email').innerHTML = "contactboardgamez@gmail.com (copié)"
})