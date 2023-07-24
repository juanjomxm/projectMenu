function menuRes(){
    const meatRes = [
        {name: 'res', price:35000}
    ]
    meatRes.map(item =>{
        const pRes = document.querySelector('#paragraph-res')
        pRes.innerHTML = `El plato tiene un valor de ${item.price} y viene acompañado con:`
    })
}

function menuChicken(){
    const chicken = [
        {name: 'chicken', price: 32000}
    ]
    chicken.map(item =>{
        const pChicken = document.querySelector('#paragraph-chicken')
        pChicken.innerHTML = `El plato tiene un valor de ${item.price} y viene acompañado con:`
    })
}

function menuFish(){
    const fishMenu = [
        {name: 'fish', price: 30000}
    ]
    fishMenu.map(item =>{
        const pFish = document.querySelector('#paragraph-fish')
        pFish.innerHTML = `El plato tiene un valor de ${item.price} y viene acompañado con:`
    })
}

function menuVegetarian(){
    const vegetarianMenu = [
        {name: 'fish', price: 31000}
    ]
    vegetarianMenu.map(item =>{
        const pVegetarian = document.querySelector('#paragraph-vegetarian')
        pVegetarian.innerHTML = `El plato tiene un valor de ${item.price} y viene acompañado con:`
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
