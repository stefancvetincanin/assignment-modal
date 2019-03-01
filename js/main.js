const s = selektor => document.getElementById(selektor)

const modalBtn = s("modal-btn")
const modal = s("modal")
const maska = s("maska")
const ugasi = s("ugasi")

modalBtn.addEventListener("click", function() {
    maska.classList.add("maska-vis")
    modal.classList.add("modal-vis")
})

maska.addEventListener("click", function() {
    maska.classList.remove("maska-vis")
    modal.classList.remove("modal-vis")
})
ugasi.addEventListener("click", function() {
    maska.classList.remove("maska-vis")
    modal.classList.remove("modal-vis")
})