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
        paragraphVegetarian.innerHTML = `El plato ${item.name} tiene un valor de ${item.price} y viene acompañado con:`
        listVegetarian.innerHTML = `<li>${item.acompañamiento}</li>`

    })
}

function drinks(){
    const inputSoda = document.querySelector('#soda')
    const inputBeer = document.querySelector('#beer')
    const inputPepsi = document.querySelector('#pepsi')
    const pDrinks = document.querySelector('#paragraph-drinks')

    const drinksMenu = [
        {name: 'soda', price: 12000},
        {name: 'cerveza', price: 10000},
        {name: 'pepsi', price: 9000}
    ]
    const responseDrinks = (query) =>{
        return drinksMenu.filter(item =>{
            return item.name.includes(query)
        })
        .map(item =>{
            return `La ${item.name} tiene un valor de ${item.price}`
        })
    }

    if(inputSoda.checked){
        pDrinks.innerHTML = responseDrinks('soda')
    } else if(inputBeer.checked){
        pDrinks.innerHTML = responseDrinks('cerveza')
    } else if(inputPepsi.checked){
        pDrinks.innerHTML = responseDrinks('pepsi')
    }
}

function totalPrice(){
    const pTotal = document.getElementById('total-price')
        pTotal.innerHTML = ``
}
