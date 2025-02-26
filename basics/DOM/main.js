//Single element
console.log(document.getElementById('my-form'))
console.log(document.querySelector('.container'))


//multiple element
console.log(document.querySelectorAll('.item'))
console.log(document.getElementsByClassName('item'))
console.log(document.getElementsByTagName('li'))

const items = document.querySelectorAll('.item')

items.forEach((item) => console.log(item))

//manipulating UI ith DOM
const ul = document.querySelector('.items')

// ul.remove()

// ul.lastElementChild.remove()

//Changing li text content by firste children
ul.firstElementChild.textContent = 'Hello'
//Changing li text content by position
ul.children[1].innerText = 'Brad'
//Changing li text content last children by innering html
ul.lastElementChild.innerHTML = '<h1> Hello </h1>'

//change styles

// const btn = document.querySelector('.btn')
// btn.style.background = "red"

//Events
const btn = document.querySelector('.btn')
btn.addEventListener('click', (e) => {
    //No caso de form, evita dar reload.
    e.preventDefault()
    console.log('click')
})

const btn2 = document.querySelector('.btn')
btn2.addEventListener('click', (e) => {
    //No caso de form, evita dar reload.
    e.preventDefault()
    //receber o nome da classe do botão
    console.log(e.target.className)
})

const btn3 = document.querySelector('.btn')
btn3.addEventListener('click', (e) => {
    //No caso de form, evita dar reload.
    e.preventDefault()
    document.querySelector('#my-form').style.background = "#ccc"
    document.querySelector('body').classList.add('bg-dark')
    document.querySelector('.items').lastElementChild.innerHTML = "<h1>Hello World</h1>"
})




