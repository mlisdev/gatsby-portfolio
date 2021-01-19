import * as React from "react"
import Steph from "../../images/steph.png"

// markup
const About = () => {
    return (
  <section id="about">
      <div className="columns mt-4 is-mobile is-vcentered is-centered">
        <div className="column is-one-quarter">
          <center>
            <img src={Steph} alt="site author, girl with pink hair holding a coffee cup" />
            </center> 
          </div>

          <div className="column is-half">
            <p className="content">
              <h3>About... </h3>
              <div className="block">
                I am a solutions-oriented software engineer, dedicated to problem solving and clean design.
                     </div>
              <blockquote>I am "a victim of a series of accidents, as are we all.”
              - Vonnegut.
</blockquote>
              <div className="block">
                After working with community colleges for years, I decided I wanted to get my Master's Degree and explore a second career. I earned my MLIS in 2018 and it's the single thing I'm most proud of in this world.
                   </div>
              <div className="block">
                I have worked in jobs focused on partnership management, relationship building, and customer success.
                 </div>
              <div className="block">
                I believe front end web design should be ADA accessible, crisp, and clear.
                Back end web development should be secure, easy to navigate, and designed to improve the user experience.
                 </div>
            </p>
  </div>
        </div>
      </section>

  )
}

export default About