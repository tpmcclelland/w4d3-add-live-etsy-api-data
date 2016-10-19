var container = document.createElement('div')
// console.dir(container)

container.classList.add('container')
var row = document.createElement('div')
row.classList.add('row')
container.appendChild(row)

var col = document.createElement('div')
col.classList.add('col-sm-4')
col.setAttribute('title', 'A fancy column')
var col2 = col.cloneNode(true)
var col3 = col.cloneNode(true)

col.innerHTML= 'Column A'
col2.innerHTML= 'Column B'
col3.innerHTML= 'Column C'

row.appendChild(col)
row.appendChild(col2)
row.appendChild(col3)

// <input type="text" id="search" placeholder="Search ...">
var searchInput = document.createElement('input')
searchInput.type = 'text'
searchInput.placeholder = 'Search ...'
searchInput.id = 'search'
searchInput.className = 'form-control'
// container.insertBefore(searchInput, row)

/* <div class="input-group">
      <input type="text" class="form-control" placeholder="Search for...">
      <span class="input-group-btn">
        <button class="btn btn-default" type="button">Go!</button>
      </span>
    </div> */
var searchDiv = document.createElement('div')
searchDiv.classList.add('input-group')
// searchDiv.style.padding = '20px'

var span = document.createElement('span')
span.classList.add('input-group-btn')

var button = document.createElement('button')
button.type = 'button'
button.className = 'btn btn-primary'
button.innerHTML = 'Search!!!'

searchDiv.appendChild(searchInput)
span.appendChild(button)
searchDiv.appendChild(span)

container.insertBefore(searchDiv, row)
container.insertBefore(document.createElement('br'), searchDiv)
// container.insertBefore(document.createElement('br'), searchDiv.nextSibling)
container.insertBefore(document.createElement('br'), row)

button.addEventListener('click', search)
searchInput.addEventListener('keypress', searchEnter)

function searchEnter(event) {
    if (event.key === 'Enter') {
        search()
    }
}


function search() {
    var searchTerm = document.querySelector('#search').value
    // alert(searchTerm)
    var searchResult = {
        term: searchTerm,
        image: 'http://unsplash.it/400?random'
    }

    createSearchResult(searchResult)
    document.querySelector('#search').value = ''
}

function createSearchResult(result) {
    var card = document.createElement('div')
    card.className = 'well'
    card.innerHTML = result.term
    document.querySelector('.col-sm-4:first-child').appendChild(card)
}

document.getElementById('searchResults').appendChild(container)
