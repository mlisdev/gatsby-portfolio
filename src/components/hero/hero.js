import * as React from "react"
import './hero.css'
import logo from "../../images/logo1.png"

// markup
const Hero = () => {
  return (
    <section className="hero is-light is-medium">
      <div className="hero-body">
        <div className="container">
        <img style={{ float: `left`, margin: `0px 25px 25px 0px`}} src={logo} />
      <h1 class="title">
          hello, world 🤘🏻
      </h1>
        <h2 className="subtitle">
      I'm <span className="highlight">Steph</span>,
      a <span className="highlight">librarian</span> and <span className="highlight">web developer</span><br />
       based in New England. 
          </h2>
        </div>
        </div>
    </section>
  )
}

export default Hero