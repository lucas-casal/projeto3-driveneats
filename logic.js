let chosenDish = 0;
let chosenDrink = 0;
let chosenDessert = 0;
let verifyDish = 0;
let verifyDrink = 0;
let verifyDessert = 0;
let totalValue = 0;

const finalValue = document.querySelector(".total-value");
const fecharPedido = document.querySelector(".button-finish-request");
console.log(fecharPedido);
const dishes = document.querySelectorAll(".dish-option-box");
console.log(dishes);

const tdishes = dishes.length;
console.log(tdishes);

let name = 0;
let celular = 0;
const screen= document.querySelector(".final-screen");
const secondPlan = document.querySelector(".second-plan");
const dishName = document.querySelector (".dish-name");
const drinkName = document.querySelector (".drink-name");
const dessertName = document.querySelector (".dessert-name");
const dishPrice = document.querySelector (".dish-price");
const drinkPrice = document.querySelector (".drink-price");
const dessertPrice = document.querySelector (".dessert-price");

function selectedDish(a){
    chosenDish = a;

for (i=0; i < tdishes; i++){
    if (dishes[i] !== a){
    dishes[i].classList.remove("selected-border"); 
    } else {}
}

    chosenDish.classList.toggle("selected-border");

    for (i=0; i < tdishes; i++){
        if (dishes[i].classList.contains("selected-border") === true){
            console.log("ok");
            verifyDish = 1;
            console.log(verifyDish);
            dishName.innerHTML = chosenDish.children[1].innerHTML;
            dishPrice.innerHTML = "R$" + chosenDish.children[3].innerHTML
            console.log(dishName);
            break;
        }
        else{
            verifyDish = 0;
        };
    }

};

const drinks = document.querySelectorAll(".drink-option-box");
console.log(drinks);

const tdrinks = drinks.length;
console.log(tdrinks);


function selectedDrink(a){
    chosenDrink = a;

for (i=0; i < tdrinks; i++){
    if (drinks[i] !== a){
    drinks[i].classList.remove("selected-border"); 
    } else {};
};

    chosenDrink.classList.toggle("selected-border");

    for (i=0; i < tdrinks; i++){
        if (drinks[i].classList.contains("selected-border") === true){
            console.log("ok");
            verifyDrink = 1;
            console.log(verifyDrink);
            drinkName.innerHTML = chosenDrink.children[1].innerHTML;
            drinkPrice.innerHTML = "R$" + chosenDrink.children[3].innerHTML;
            console.log(drinkName);
            break;
        }
        else{ 
            verifyDrink = 0;
        };
    }
    
};

function verify(){
    if (verifyDish !== 1 || verifyDrink !== 1 || verifyDessert !== 1){
        console.log("no")
        fecharPedido.classList.remove("liberado"); 
        fecharPedido.innerHTML = "Selecione os 3 itens para fechar o seu pedido"
    } else{
        console.log("liberado")
        fecharPedido.classList.add("liberado"); 
        fecharPedido.innerHTML = "Feche o seu pedido";
    }
}
const desserts = document.querySelectorAll(".dessert-option-box");
console.log(desserts);

const tdesserts = desserts.length;
console.log(tdesserts);


function selectedDessert(a){
    chosenDessert = a;

for (i=0; i < tdesserts; i++){
    if (desserts[i] !== a){
    desserts[i].classList.remove("selected-border"); 
    } else {};
}

    chosenDessert.classList.toggle("selected-border");

    for (i=0; i < tdesserts; i++){
        if (desserts[i].classList.contains("selected-border") === true){
            console.log("ok");
            verifyDessert = 1;
            console.log(verifyDessert);
            dessertName.innerHTML = chosenDessert.children[1].innerHTML;
            dessertPrice.innerHTML = "R$" + chosenDessert.children[3].innerHTML;

            break;
    
        }
        else{ 
            verifyDessert = 0;
        };
    }

};


function fechandoPedido(){
 if (verifyDish !== 1 || verifyDrink !== 1 || verifyDessert !== 1){   
    alert("faltam alguns itens");
    } else{
    name = prompt("Qual é o seu nome?");
    celular = prompt("Digite o seu celular no formato (xx)xxxxx-xxxx");
    screen.classList.add("confirmation");
    secondPlan.classList.add("blank");
    screen.classList.remove("escondido");
    totalValue = parseFloat(chosenDessert.children[3].innerHTML) + parseFloat(chosenDrink.children[3].innerHTML)+ parseFloat(chosenDish.children[3].innerHTML);
    const formatado = totalValue.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });

    console.log(formatado);
    finalValue.innerHTML = formatado;
}
};

function notReady() {
    secondPlan.classList.remove("blank");
    screen.classList.add("escondido");
    nome = 0;
    celular = 0;
};


function generateLink() {
    let message = document.querySelector(".message")
    let url = "https://wa.me/";
    let end_url = `${url}${celular}?text=${message}`;
    document.getElementById('end_url').innerText = end_url;
  }