const cards = document.querySelectorAll(".card")

// for (const card of cards) {
//     card.addEventListener("click",(evt)=>{

//         // const img = evt.currentTarget.querySelector("img").src;
//         // modalPequeno.querySelector("h6").textContent = evt.currentTarget.querySelector("h6").textContent;
//         // modalPequeno.querySelector("p").textContent = evt.currentTarget.querySelector("p").textContent;
//         // console.log(evt.currentTarget);
        
//     })   
// }

for (let i = 0; i < cards.length; i++) {
    const card = cards[i];
    card.addEventListener("click",(evt)=>{

        // const img = evt.currentTarget.querySelector("img").src;
        // modalPequeno.querySelector("h6").textContent = evt.currentTarget.querySelector("h6").textContent;
        // modalPequeno.querySelector("p").textContent = evt.currentTarget.querySelector("p").textContent;
        // console.log(evt.currentTarget);
        const index = i;
        window.location.href = `/recipes/${index}`;
        
        console.log(i);
    })
}