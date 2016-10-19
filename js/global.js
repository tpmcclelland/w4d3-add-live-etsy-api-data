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
  image.src = item.Images[0].url_fullxfull
  // image.src = '../img/chess.jpg'
  image.setAttribute('alt', 'product image')

  var wrapper = document.createElement('div')
  wrapper.className = 'panel-body-wrapper'

  var title = document.createElement('p')
  title.className = 'text-overflow'
  title.innerHTML = item.title

  var seller = document.createElement('p')
  seller.className = 'text-muted'
  seller.innerHTML = item.Shop.shop_name

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

document.querySelector('#search-button').addEventListener('click', searchButtonListener)

document.querySelector('#search-input').addEventListener('keypress', searchInputListener)

function createResultsCards(results) {
  results.forEach(function(result) {
    createResultCard(result)
  })
}

function searchButtonListener(e) {
  document.querySelector('#searchResults').innerHTML = ''
  search()
}

function searchInputListener(e) {
    if (e.type === 'keypress' && e.key === 'Enter') {
      document.querySelector('#searchResults').innerHTML = ''
      search()
    }
}

function search() {

  fetch('http://thinksaydo.com/tiyproxy.php?url=' + encodeURIComponent('https://openapi.etsy.com/v2/listings/active?api_key=' + apiKey + '&keywords=' + encodeURIComponent(getSearchTerm()) + '&includes=Images,Shop'))
    .then(response => response.json())
    .then(response => createResultsCards(response.results))
}

const apiKey ='4i2xirk6y1vkors6a8yd8yeh'

function getSearchTerm() {
  return document.querySelector('#search-input').value
}
