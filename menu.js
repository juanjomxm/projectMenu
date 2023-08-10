class menuPrincipal{
    constructor({
        name,
        price,
        accompaniment
    }){
        this.name = name
        this.price = price
        this.accompaniment = accompaniment
    }
}

function menuRes(){
    const paragraphRes = document.getElementById('paragraph-res')
    const listRes = document.getElementById('list-res')
    const menuRes = new menuPrincipal({
        name: 'res',
        price: '$35000',
        accompaniment: ['papas', ' patacon', ' ensalada']
    })
    paragraphRes.innerHTML = `El plato tiene un valor de ${menuRes.price} y viene acompañado con:`
    listRes.innerHTML = `<li>${menuRes.accompaniment}</li>`
}

function menuChicken(){
    const paragraphChicken = document.getElementById('paragraph-chicken')
    const listChicken = document.getElementById('list-chicken')
    const menuChicken = new menuPrincipal({
        name: 'chicken',
        price: '$31000',
        accompaniment: ['papas', ' patacon', ' ensalada']
    })
    paragraphChicken .innerHTML = `El plato tiene un valor de ${menuChicken.price} y viene acompañado con:`
    listChicken.innerHTML = `<li>${menuChicken.accompaniment}</li>`
}

function menuFish(){
    const paragraphFish = document.getElementById('paragraph-fish')
    const listFish = document.getElementById('list-fish')
    const menuFish = new menuPrincipal({
        name: 'fish',
        price: '$32000',
        accompaniment: ['papas', ' patacon', ' ensalada']
    })
    paragraphFish.innerHTML = `El plato tiene un valor de ${menuFish.price} y viene acompañado con:`
    listFish.innerHTML = `<li>${menuFish.accompaniment}</li>`
}

function menuVegetarian(){
    const paragraphVegetarian = document.getElementById('paragraph-vegetarian')
    const listVegetarian = document.getElementById('list-vegetarian')
    const menuVegetarian = new menuPrincipal({
        name: 'fish',
        price: '$29000',
        accompaniment: ['ensalada']
    })
    paragraphVegetarian.innerHTML = `El plato tiene un valor de ${menuVegetarian.price} y viene acompañado con:`
    listVegetarian.innerHTML = `<li>${menuVegetarian.accompaniment}</li>`
}

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

const pDrinks = document.querySelector('#paragraph-drinks')
const imgSoda = document.getElementById('img-soda')
imgSoda.addEventListener('click' , (()=>{
    pDrinks.innerHTML = `La ${drinkSoda.name} tiene un valor de ${drinkSoda.price}`
}))

const imgBeer = document.getElementById('img-beer')
imgBeer.addEventListener('click', (()=>{
    pDrinks.innerHTML = `La ${drinkBeer.name} tiene un valor de ${drinkBeer.price}`
}))

const imgPepsi = document.getElementById('img-pepsi')
imgPepsi.addEventListener('click', (()=>{
    pDrinks.innerHTML = `La ${drinkPepsi.name} tiene un valor de ${drinkPepsi.price}`
}))

function totalPrice(){
    const pTotal = document.getElementById('total-price')
        pTotal.innerHTML = ``
}
