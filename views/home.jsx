const React = require('react')
const Def = require('./default')

function home () {
    return (
      <Def title="REST-Rant Home">
          <main>
          <h1>
            <a href="/" style={{ color: "inherit", textDecoration: "none"}}>HOME</a>
          </h1>
        <div>
          <img src="/images/chia-fruit-drink.jpg" alt="Chia Fruit Shake" />
          <div>
          Photo by <a href="AUTHOR_LINK">Brenda Godinez</a> on <a href="UNSPLASH_LINK">Unsplash</a>
          </div>
        </div>
          <a href="/places">
            <button className="btn-primary">Places Page</button>
          </a>
          </main>
      </Def>
    )
  } 

module.exports = home
