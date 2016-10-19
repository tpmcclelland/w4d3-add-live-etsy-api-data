// Declare your builder function
function createResultCard(item) {
  var card = document.createElement('div')
  card.classList.add('col-sm-3')

  var panel = document.createElement('div')
  panel.className = 'panel panel-default panel-shadow'

  var panelBody = document.createElement('div')
  panelBody.className = 'panel-body'

  var image = document.createElement('img')
  image.className = 'img-responsive'
  image.src = item.image
  image.setAttribute('alt', 'product image')

  var wrapper = document.createElement('div')
  wrapper.className = 'panel-body-wrapper'

  var title = document.createElement('p')
  title.className = 'text-overflow'
  title.innerHTML = item.title

  var seller = document.createElement('p')
  seller.className = 'text-muted'
  seller.innerHTML = item.seller

  var price = document.createElement('p')
  price.className = 'text-success pull-right'
  price.innerHTML = accounting.formatMoney(item.price)

  card.appendChild(panel)
  panel.appendChild(panelBody)
  panelBody.appendChild(image)
  panelBody.appendChild(wrapper)
  wrapper.appendChild(title)
  wrapper.appendChild(seller)
  wrapper.appendChild(price)

  // your code here to build up the card
  // keep in mind you'll be nesting tags

  document.querySelector('#searchResults.row').appendChild(card)
}

document.querySelector('#search-button').addEventListener('click', search)

function search(e) {
  results.forEach(function(result) {
    createResultCard(result)
  })

  // document.querySelector('#searchResults').classList.remove('hidden')
}

// Call your builder function, one at a time to make 12 search result cards, each with different data (image can be the same at this point if you want)
// Don't forget you can use a for() loop, or make an array of objects even and use a items.forEach() loop.
var results = [
  {
    image: 'img/chess.jpg',
    title: 'Vintage Board Game Art Wall Home Decor',
    seller: 'franz66',
    price: 15.00
  },
  {
    image: '../img/chess.jpg',
    title: 'Vintage Board Game Art Wall Home Decor',
    seller: 'franz66',
    price: 15.00
  },
  {
    image: '../img/chess.jpg',
    title: 'Vintage Board Game Art Wall Home Decor',
    seller: 'franz66',
    price: 15.00
  },
  {
    image: '../img/chess.jpg',
    title: 'Vintage Board Game Art Wall Home Decor',
    seller: 'franz66',
    price: 15.00
  },
  {
    image: '../img/chess.jpg',
    title: 'Vintage Board Game Art Wall Home Decor',
    seller: 'franz66',
    price: 15.00
  },
  {
    image: '../img/chess.jpg',
    title: 'Vintage Board Game Art Wall Home Decor',
    seller: 'franz66',
    price: 15.00
  },
  {
    image: '../img/chess.jpg',
    title: 'Vintage Board Game Art Wall Home Decor',
    seller: 'franz66',
    price: 15.00
  },
  {
    image: '../img/chess.jpg',
    title: 'Vintage Board Game Art Wall Home Decor',
    seller: 'franz66',
    price: 15.00
  },
  {
    image: '../img/chess.jpg',
    title: 'Vintage Board Game Art Wall Home Decor',
    seller: 'franz66',
    price: 15.00
  },
  {
    image: '../img/chess.jpg',
    title: 'Vintage Board Game Art Wall Home Decor',
    seller: 'franz66',
    price: 15.00
  },
  {
    image: '../img/chess.jpg',
    title: 'Vintage Board Game Art Wall Home Decor',
    seller: 'franz66',
    price: 15.00
  },
  {
    image: '../img/chess.jpg',
    title: 'Vintage Board Game Art Wall Home Decor',
    seller: 'franz66',
    price: 15.00
  }
]
