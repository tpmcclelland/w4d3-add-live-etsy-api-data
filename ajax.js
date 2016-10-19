// http://swapi.co/api/planets/1/

// var starwarsPlanets = new XMLHttpRequest()
// starwarsPlanets.addEventListener('load', planetListener)
// starwarsPlanets.open('GET', 'http://swapi.co/api/planets/')
// starwarsPlanets.send() //actually makes the request
//
// var starwarsPlanets = new XMLHttpRequest()
// starwarsPlanets.addEventListener('load', planetListener)
// starwarsPlanets.open('GET', 'http://swapi.co/api/planets/?page=2')
// starwarsPlanets.send() //actually makes the request

// function planetListener() {
//     var planets = JSON.parse(this.responseText)
//     listPlanets(planets.results)
// }

//newer way to call api, but requires polyfill
fetch('http://swapi.co/api/planets/')
    .then(response => response.json()) //needed everytime
    .then(response => listPlanets(response.results))
    //can use arrow fuction if function is very simple input > output

fetch('http://swapi.co/api/planets/1')
    .then(response => response.json()) //needed everytime
    .then(response => listPlanet(response))

function listPlanet(planet) {
    var list = document.createElement('ul')
    var planetName = document.createElement('li')
    planetName.innerHTML = planet.name
    list.appendChild(planetName)
    var planetGravity = document.createElement('li')
    planetGravity.innerHTML = planet.gravity
    list.appendChild(planetGravity)
    var planetPopulation = document.createElement('li')
    planetPopulation.innerHTML = planet.population
    list.appendChild(planetPopulation)
    
    document.querySelector('body').appendChild(list)
}

function listPlanets(planetsArray) {
    console.log('this comes after the first one')
    planetsArray.forEach(function(planet) {
        var planetTitle = document.createElement('h4')
        planetTitle.innerHTML = planet.name
        document.querySelector('body').appendChild(planetTitle)
    })
}

console.log('this comes first.')
