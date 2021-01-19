import React from "react";
import './mystyles.scss';
import './layout.css';
import { GithubLogo, InstagramLogo, LinkedinLogo, TwitterLogo } from "phosphor-react";

export default function Layout({ children }) {
  document.addEventListener('DOMContentLoaded', () => {

  // Get all "navbar-burger" elements
  const $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);

  // Check if there are any navbar burgers
  if ($navbarBurgers.length > 0) {

    // Add a click event on each of them
    $navbarBurgers.forEach( el => {
      el.addEventListener('click', () => {

        // Get the target from the "data-target" attribute
        const target = el.dataset.target;
        const $target = document.getElementById(target);

        // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
        el.classList.toggle('is-active');
        $target.classList.toggle('is-active');

      });
    });
  }

});
    return (
      <container>
        <section id="home">
          <nav className="navbar is-fixed-top" role="navigation" aria-label="main navigation">
            <a role="button" className="navbar-burger" aria-label="menu" aria-expanded="false">
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
            </a>
            <div className="navbar-menu" id="navMenu">
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
