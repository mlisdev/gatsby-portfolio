import React from "react";
import './mystyles.scss';
import './layout.css';
import { GithubLogo, InstagramLogo, LinkedinLogo, TwitterLogo, At, Headphones } from "phosphor-react";

export default function Layout({ children }) {
   const [isActive, setisActive] = React.useState(false);

    return (
      <container>
        <section id="home">
          
          <nav className="navbar is-fixed-top" role="navigation" aria-label="main navigation">
        <div className="navbar-brand">
          <a
            onClick={() => {
              setisActive(!isActive);
            }}
            role="button"
            className={`navbar-burger burger ${isActive ? "is-active" : ""}`}
            aria-label="menu"
            aria-expanded="false"
            data-target="navbarBasicExample"
          >
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>
        </div>
        <div
          id="navbarBasicExample"
          className={`navbar-menu ${isActive ? "is-active" : ""}`}
        >
            <div className="navbar-start is-spaced">
              <div className="navbar-item">   
                <a href="#home" className="navbar-item">Home</a>
                <a href="#about" className="navbar-item">About</a>
                <a href="#skills" className="navbar-item">Skills</a>
                <a href="#projects" className="navbar-item">Projects</a>
                {/* <a href="#resume" className="navbar-item">Resume</a> */}
                  <a href="http://rinehart.codes" className="navbar-item">Blog</a>
            </div>
            </div>
              <div className="navbar-end is-spaced">
                <div className="navbar-item">
                  <a href="http://github.com/mlisdev" target="_blank" rel="noopener noreferrer"><GithubLogo color="#763262" weight="duotone" size={32} aria-label="github logo" /></a>
                  &nbsp; &nbsp; 
                  <a href="http://linkedin.com/in/srinehart" target="_blank" rel="noopener noreferrer" ><LinkedinLogo color="#763262" weight="duotone" size={32} aria-label="Linkedin logo" /></a>
                  &nbsp; &nbsp; 
        
                  <a href="http://instagram.com/heyrinehart" target="_blank" rel="noopener noreferrer" ><InstagramLogo color="#763262" weight="duotone" size={32} aria-label="Instagram logo" /></a>
                  &nbsp; &nbsp; 
                   
                  <a href="http://twitter.com/heyrinehart" target="_blank" rel="noopener noreferrer"><TwitterLogo color="#763262" weight="duotone" size={32} aria-label="Twitter logo" /></a>
                  &nbsp; &nbsp; 
                  <a href="mailto:hey@stephrinehart.com" target="_blank" rel="noopener noreferrer"><At color="#763262" weight="duotone" size={32} aria-label="At symbol for email" /></a>
                  &nbsp; &nbsp; 
                  <a href="https://open.spotify.com/user/rinehart?si=6EUUv_iYQgmJnegkLyocAg" target="_blank" rel="noopener noreferrer"><Headphones color="#763262" weight="duotone" size={32} aria-label="At symbol for email" /></a>
                  </div>
            </div>
</div>
          </nav>
          </section>


        <main>
          {children}
        </main>
        
        <footer class="footer">
  <div class="content has-text-centered">
            <p>
              <div class="block">
                Hey. Thanks for making it all the way to the end! <br />
                Think of these as the credits at the end of the movie. 
                </div> 
              <div class="block">
                How do you copyright something? Do I just go "copyright Stephanie Rinehart"? Because.. that.
                </div> 
              <div class="block">
                Website built with <a href="http://bulma.io" target="_blank" rel="noopener noreferrer" >Bulma</a>, <a href="http://gatsbyjs.com" target="_blank" rel="noopener noresferrer">GatsbyJS</a>, and <a href="http://datocms.com" target="_blank" rel="noopener noreferrer">DatoCMS</a><br />. 
                Icons from <a href="https://phosphoricons.com/" target="_blank" rel="noopener noreferrer" >Phosphoricons</a>. <br /> 
                Logo by <a href="https://evanayres.netlify.app/" target="_blank" rel="noopener noreferrer" >Evan Ayres</a>. <br /> 
                </div> 
              <div class="block">
                🏳️‍🌈 🏳️‍🌈 🏳️‍🌈
                </div> 

    </p>
  </div>
</footer>

        </container>

  )
}
