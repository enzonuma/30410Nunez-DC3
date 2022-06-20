// import { prodList } from "./prodDealer.js";

const showProd = (products) => {
    const prodCards = document.querySelector("#prodCatalog");
    prodCards.innerHTML =+ ""

    prodList.forEach( prod => {
        const prodDiv = document.createElement("div")
        prodDiv.classList.add("col-4 prodCards")
        prodDiv.innerHTML += `<img src="">
        <p class="pcCategory">${prod.prodCate}</p>
        <h6 class="pcTitle">${prod.prodName}</h6>
        <p class="pcPrice">${prod.prodPrice}</p>`

        prodCards.appendChild(prodDiv)
    });
}



