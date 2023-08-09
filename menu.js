function menuRes(){
    const paragraphRes = document.getElementById('paragraph-res')
    const listRes = document.getElementById('list-res')
    const meatRes = [
        {name: 'res', price:35000, acompañamiento:['papas', ' patacon', ' ensalada']}
    ]
    meatRes.map(item =>{
         paragraphRes.innerHTML = `El plato tiene un valor de ${item.price} y viene acompañado con:`
         listRes.innerHTML = `<li>${item.acompañamiento}</li>`
    })
}

function menuChicken(){
    const paragraphChicken = document.getElementById('paragraph-chicken')
    const listChicken = document.getElementById('list-chicken')
    const chicken = [
        {name: 'chicken', price: 32000, acompañamiento:['papas', ' patacon', ' ensalada']}
    ]
    chicken.map(item =>{
        paragraphChicken .innerHTML = `El plato tiene un valor de ${item.price} y viene acompañado con:`
        listChicken.innerHTML = `<li>${item.acompañamiento}</li>`
    })
}

function menuFish(){
    const paragraphFish = document.getElementById('paragraph-fish')
    const listFish = document.getElementById('list-fish')
    const fishMenu = [
        {name: 'fish', price: 30000, acompañamiento:['papas', ' patacon', ' ensalada']}
    ]
    fishMenu.map(item =>{
        paragraphFish.innerHTML = `El plato tiene un valor de ${item.price} y viene acompañado con:`
        listFish.innerHTML = `<li>${item.acompañamiento}</li>`
    })
}

function menuVegetarian(){
    const paragraphVegetarian = document.getElementById('paragraph-vegetarian')
    const listVegetarian = document.getElementById('list-vegetarian')
    const vegetarianMenu = [
        {name: 'vegetarian', price: 31000, acompañamiento:['papas', ' patacon', ' ensalada']}
    ]
    vegetarianMenu.map(item =>{
        paragraphVegetarian.innerHTML = `El plato tiene un valor de ${item.price} y viene acompañado con:`
        listVegetarian.innerHTML = `<li>${item.acompañamiento}</li>`

    })
}


function drinks(){
    const inputSoda = document.querySelector('#soda')
    const inputBeer = document.querySelector('#beer')
    const inputPepsi = document.querySelector('#pepsi')
    const pDrinks = document.querySelector('#paragraph-drinks')
    class drinksMenu{
        constructor({
            name,
            price,
        }){
            this.name = name
            this.price = price
        }
    }

    const drinkSoda = new drinksMenu({
        name: 'soda',
        price: '$12000',
    })

    const drinkBeer = new drinksMenu({
        name: 'cerveza',
        price: '$10000',
    })

    const drinkPepsi = new drinksMenu({
        name: 'pepsi',
        price: '$9000',
    })

    if(inputSoda.checked){
        pDrinks.innerHTML = `La ${drinkSoda.name} tiene un valor de ${drinkSoda.price}`
    } else if(inputBeer.checked){
        pDrinks.innerHTML = `La ${drinkBeer.name} tiene un valor de ${drinkBeer.price}`
    } else if(inputPepsi.checked){
        pDrinks.innerHTML = `La ${drinkPepsi.name} tiene un valor de ${drinkPepsi.price}`
    }
}

function totalPrice(){
    const pTotal = document.getElementById('total-price')
        pTotal.innerHTML = ``
}
