
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

  card.addEventListener('click', function() {
    window.open(item.url, '_self')
  })

  // your code here to build up the card
  // keep in mind you'll be nesting tags

  document.querySelector('#searchResults.row').appendChild(card)
}

document.querySelector('#search-button').addEventListener('click', searchButtonListener)

document.querySelector('#search-input').addEventListener('keypress', searchInputListener)

function createResultsCards(response) {
  var results = response.results
  // console.log(results)
  results.forEach(function(result) {
    createResultCard(result)
  })

  pagination(response)

}

function pagination(response) {
  console.log(response.pagination)
  var currentPage = response.pagination.effective_page
  var nextPage = response.pagination.next_page
  var prevPage = currentPage - 1
  var totalPages = response.count / response.pagination.effective_limit

  var pagesList = document.createElement('ul')
  pagesList.className = 'pagination'
  document.querySelector('#pagination-area').appendChild(pagesList)

  var prev = document.createElement('li')
  pagesList.appendChild(prev)
  var prevLink = document.createElement('a')
  prev.appendChild(prevLink)
  var span = document.createElement('span')
  span.innerHTML = '&laquo;'
  prevLink.appendChild(span)
  if (prevPage === 0) {
    prev.classList.add('disabled')
  } else {
    prevLink.setAttribute('data-page', prevPage)
    prevLink.addEventListener('click', function(e) {
      pageNum = e.target.getAttribute('data-page')
      console.log('prevclick ' + pageNum)
      search()
    })
  }

  for (var i = currentPage; i < currentPage + 10; i++) {
      var page = document.createElement('li')
      var pageLink = document.createElement('a')
      pageLink.setAttribute('href', '#')
      pageLink.setAttribute('data-page', i)
      pageLink.innerHTML = i
      page.appendChild(pageLink)
      pagesList.appendChild(page)

      page.addEventListener('click', function(e) {
        pageNum = e.target.getAttribute('data-page')
        //console.log('click ' + num)
        search()
      })

  }

  var next = document.createElement('li')
  pagesList.appendChild(next)
  var nextLink = document.createElement('a')
  next.appendChild(nextLink)
  var nextSpan = document.createElement('span')
  nextSpan.innerHTML = '&raquo;'
  nextLink.appendChild(nextSpan)
  nextLink.setAttribute('data-page', nextPage)
  nextLink.addEventListener('click', function(e) {
    pageNum = e.target.getAttribute('data-page')
    console.log('nextclick ' + pageNum)
    search()
  })

}

function searchButtonListener(e) {
  search()
}

function searchInputListener(e) {
    if (e.type === 'keypress' && e.key === 'Enter') {
      search()
    }
}

pageNum = 1

function search() {
  console.log(pageNum)
  document.querySelector('#searchResults').innerHTML = ''
  document.querySelector('#pagination-area').innerHTML = ''
  const apiKey = '4i2xirk6y1vkors6a8yd8yeh'
  var proxyServer = 'https://thinksaydo.com/tiyproxy.php?url='
  var etsyApi = 'https://openapi.etsy.com/v2/listings/active?api_key='

  var parameters = [
    'keywords=' + encodeURIComponent(getSearchTerm()),
    'includes=Images,Shop',
    'page=' + pageNum
  ]

'http://thinksaydo.com/tiyproxy.php?url=' + encodeURIComponent('https://openapi.etsy.com/v2/listings/active?api_key=h9oq2yf3twf4ziejn10b717i&keywords=' + encodeURIComponent('board games') + '&includes=Images,Shop')
  var url = proxyServer + encodeURIComponent(etsyApi + apiKey + '&' + parameters.join('&'))

  fetch(url)
    .then(response => response.json())
    .then(response => createResultsCards(response))
    // .then(response => console.log(response))
}

function getSearchTerm() {
  return document.querySelector('#search-input').value
}
