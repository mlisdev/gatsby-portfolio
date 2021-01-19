import React from "react";
import './mystyles.scss';
import './layout.css';
import { GithubLogo, InstagramLogo, LinkedinLogo, TwitterLogo } from "phosphor-react";

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
                <a href="#resume" className="navbar-item">Resume</a>
                  <a href="http://rinehart.codes" className="navbar-item">Blog</a>
            </div>
            </div>
              <div className="navbar-end is-spaced">
                <div className="navbar-item">
                  <a href="http://github.com/mlisdev" target="_blank" rel="noopener noreferrer"><GithubLogo color="#763262" weight="duotone" size={32} aria-label="github logo" /></a>
                  &nbsp; | &nbsp; 
                  <a href="http://linkedin.com/in/srinehart" target="_blank" rel="noopener noreferrer" ><LinkedinLogo color="#763262" weight="duotone" size={32} aria-label="Linkedin logo" /></a>
                  &nbsp; | &nbsp; 
        
                  <a href="http://instagram.com/heyrinehart" target="_blank" rel="noopener noreferrer" ><InstagramLogo color="#763262" weight="duotone" size={32} aria-label="Instagram logo" /></a>
                  &nbsp; | &nbsp; 
                   
                  <a href="http://twitter.com/heyrinehart" target="_blank" rel="noopener noreferrer"><TwitterLogo color="#763262" weight="duotone" size={32} aria-label="Twitter logo" /></a>
                  </div>
            </div>
</div>
          </nav>
          </section>


        <main>
          {children}
      </main>

        </container>

  )
}
