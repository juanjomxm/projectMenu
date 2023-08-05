function menuRes(){
    const paragraphRes = document.getElementById('paragraph-res')
    const divOneRes = document.getElementById('div-one-res')
    const divOneRes2 = document.getElementById('div-two-res')
    const divOneRes3 = document.getElementById('div-three-res')
    
    const meatRes = [
        {name: 'res', price:35000}
    ]
    meatRes.map(item =>{
        paragraphRes.innerHTML = `El plato tiene un valor de ${item.price} y viene acompañado con:`
        divOneRes.innerText = '* Papas'
        divOneRes2.innerText = '* Patacon'
        divOneRes3.innerText = '* Ensalada'
    })
}

function menuChicken(){
    const paragraphChicken = document.getElementById('paragraph-chicken')
    const divOneChicken = document.getElementById('div-one-chicken')
    const divOneChicken2 = document.getElementById('div-two-chicken')
    const divOneChicken3 = document.getElementById('div-three-chicken')
    const chicken = [
        {name: 'chicken', price: 32000}
    ]
    chicken.map(item =>{
        paragraphChicken .innerHTML = `El plato tiene un valor de ${item.price} y viene acompañado con:`
        divOneChicken.innerText = '* Papa en pure'
        divOneChicken2.innerText = '* Patacon'
        divOneChicken3.innerText = '* Aguacate'
    })
}

function menuFish(){
    const paragraphFish = document.getElementById('paragraph-fish')
    const divOneFish = document.getElementById('div-one-fish')
    const divOneFish2 = document.getElementById('div-two-fish')
    const divOneFish3 = document.getElementById('div-three-fish')
    const fishMenu = [
        {name: 'fish', price: 30000}
    ]
    fishMenu.map(item =>{
        paragraphFish.innerHTML = `El plato tiene un valor de ${item.price} y viene acompañado con:`
        divOneFish.innerText = '* Papas'
        divOneFish2.innerText = '* Patacon'
        divOneFish3.innerText = '* Ensalada'
    })
}

function menuVegetarian(){
    const paragraphVegetarian = document.getElementById('paragraph-vegetarian')
    const divOneVegetarian = document.getElementById('div-one-vegetarian')
    const divOneVegetarian2 = document.getElementById('div-two-vegetarian')
    const divOneVegetarian3 = document.getElementById('div-three-vegetarian')
    const vegetarianMenu = [
        {name: 'fish', price: 31000}
    ]
    vegetarianMenu.map(item =>{
        paragraphVegetarian.innerHTML = `El plato tiene un valor de ${item.price} y viene acompañado con:`
        divOneVegetarian.innerText = '* Carne vegetarian'
        divOneVegetarian2.innerText = '* Vgetales'
        divOneVegetarian3.innerText = '* Arroz'
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
