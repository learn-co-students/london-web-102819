document.addEventListener("DOMContentLoaded", () => {

const baseUrl = "http://futuramaapi.herokuapp.com/api/quotes"

const quotesList = document.querySelector("#quotes-list")

const getAllQuotes = () => fetch(baseUrl).then(resp => resp.json())

const createQuoteCard = quote => {
  let quoteDiv = document.createElement('div')
  let quoteText = document.createElement('p')
  quoteText.innerText = quote.quote
  let quoteImage = document.createElement("img")
  quoteImage.src = quote.image
  quoteImage.style.display = "none"
  let quoteButton = document.createElement("button")
  quoteButton.innerText = "Show Character"
  quoteButton.addEventListener("click", () => toggleImage(quoteImage))
  quoteDiv.append(quoteText, quoteButton, quoteImage)
  quotesList.append(quoteDiv)
}

const isVisible = image => image.style.display === "block"

const toggleImage = image => {
  image.style.display = isVisible(image) ? "none" : "block"
  event.target.innerText = `${ isVisible(image) ? "Hide" : "Show" } Character` 
}

const createAllQuoteCards = quotes => quotes.forEach(createQuoteCard)

const getAndRenderAllQuoteCards = () => getAllQuotes().then(createAllQuoteCards).catch(console.log)

getAndRenderAllQuoteCards()

})