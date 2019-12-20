// It might be a good idea to add event listener to make sure this file 
// only runs after the DOM has finshed loading. 
const quoteResource = 'http://localhost:3000/quotes'
const likeResource = 'http://localhost:3000/likes'
const quotelistEl = document.querySelector('#quote-list')
const formEl = document.querySelector('#new-quote-form')
const getQuotes = () => fetch('http://localhost:3000/quotes?_embed=likes').then(resp => resp.json())

const generateQuote = quote => {
    let liEl = document.createElement('li')
    liEl.classList.add("quote-card")
    liEl.innerHTML = `
    <blockquote class="blockquote" data-id="${quote.id}">
        <p class="mb-0">${quote.quote}</p>
        <footer class="blockquote-footer">${quote.author}</footer>
        <br>
        <button class='btn-success'>Likes: <span>${quote.likes ? quote.likes.length: "0"}</span></button>
        <button class='btn-danger'>Delete</button>
    </blockquote>
    `
    return liEl
}

const appendQuotes = quotes => {
    quotes.map(quote => generateQuote(quote))
    .forEach(quote => quotelistEl.appendChild(quote))
}

const init = () => {
    getQuotes()
    .then(appendQuotes)
}

const likeQuote = (quoteId,counter) => {
    fetch(likeResource,{
        method:'POST',
        headers:{
            'content-type':'application/json'
        },
        body: JSON.stringify({quoteId})
    })
    .then(() => counter.innerText = parseInt(counter.innerText)+1)
}

const removeQuote = (quote,quoteId) => {
    fetch(quoteResource+'/'+quoteId,{
        method:'DELETE'
    })
    .then(() => quotelistEl.removeChild(quote))
}

init()

formEl.addEventListener('submit', e => {
    e.preventDefault()
    const newQuote = {
        quote: formEl.quote.value,
        author: formEl.author.value
    }
    fetch(quoteResource,{
        method:'POST',
        headers:{
            'content-type':'application/json'
        },
        body: JSON.stringify(newQuote)
    })
    .then(resp => resp.json())
    .then(quote => generateQuote(quote))
    .then(quote => quotelistEl.appendChild(quote))

    formEl.reset()
})

quotelistEl.addEventListener('click', e => {
    const clickedEl = e.target
    if (e.target.className == "btn-success") {
        likeQuote(parseInt(clickedEl.parentElement.dataset.id), clickedEl.firstElementChild)
        
    } else if(clickedEl.className == "btn-danger"){
        removeQuote(clickedEl.parentElement.parentElement, parseInt(clickedEl.parentElement.dataset.id))
    }
})