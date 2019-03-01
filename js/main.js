const s = selektor => document.getElementById(selektor)

const modalBtn = s("modal-btn")
const modal = s("modal")
const maska = s("maska")
const ugasi = s("ugasi")

modalBtn.addEventListener("click", function() {
    $("#maska").show()
    modal.classList.add("modal-vis")
})

maska.addEventListener("click", function() {
    $("#maska").hide()
    modal.classList.remove("modal-vis")
})
ugasi.addEventListener("click", function() {
    $("#maska").hide()
    modal.classList.remove("modal-vis")
})