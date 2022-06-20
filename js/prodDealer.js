let prodCate = ""
let prodName = ""
let prodPrice = ""
let congratstext = ""
let prodList = []

function congrats() {
    // congratstext = prompt("Your products were added succesfully! Do you want to add another ones? (YY / NN to close)")

    while (congratstext != "NN") {
        switch (congratstext) {
            case "YY":
                addProduct();
                congrats();
                break;

            default:
                alert("Please enter an option");
                congratstext = prompt("Your products were added succesfully! Do you want to add another ones? (YY / NN to close)")                
                return congrats();
        }
    }

    if (congratstext == "NN") {
        let thankYou = alert("Thank you for visit us! There are your products, good luck!");

    }
}

function addProduct() {
    class Product {
        constructor(prodCate, prodName, prodPrice) {
            this.prodCate = prodCate
            this.prodName = prodName
            this.prodPrice = prodPrice
        }
    }

    prodCate = prompt("Do you want to add: Shoe | Clothes | Accesories ?");
    prodName = prompt("Enter the Model/Name:");
    prodPrice = prompt("Enter the price:");
    debugger
    prodList.push(new Product(prodCate, prodName, prodPrice));
    congratstext = prompt("Your products were added succesfully! Do you want to add another ones? (YY / NN to close)")
}

const btnAddProd = document.querySelector("#addProd")
btnAddProd.addEventListener("click", () => {
    addProduct()
    congrats()
})

// export { prodList };