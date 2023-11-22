const React = require('react')
const Def = require('./default')

function index (data) {
    let placesFormatted = data.places.map((place) => {
      return (
        <div>
          <h2><a href={`/places/${place.id}`}>{place.name}</a></h2>
              <img src={place.pic} alt={place.name} />
              <p>Located in {place.city}, {place.state}</p>
        </div>
      )
    })
    return (
      <Def>
          <main>
              <h1>Places to Rant or Rave about</h1>
              {placesFormatted}
          </main>
      </Def>
  )
  }

module.exports = index