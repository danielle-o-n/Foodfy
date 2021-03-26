const modalGrande = document.querySelector("#modal-grande");
const cards = document.querySelectorAll(".card");
const modalPequeno = document.querySelector("#modal-pequeno");
const xis = modalPequeno.querySelector("#close");

for (const card of cards) {
    card.addEventListener("click",(evt)=>{
        modalGrande.classList.remove("ativado");
        modalPequeno.querySelector("img").src = evt.currentTarget.querySelector("img").src;
        modalPequeno.querySelector("h6").textContent = evt.currentTarget.querySelector("h6").textContent;
        modalPequeno.querySelector("p").textContent = evt.currentTarget.querySelector("p").textContent;
        console.log(evt.currentTarget);
    })   
}

xis.addEventListener("click",()=>{
    modalGrande.classList.add("ativado");
})