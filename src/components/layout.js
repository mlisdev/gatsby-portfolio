import React from "react";
import './mystyles.scss'
import Scrollspy from 'react-scrollspy';
import { GithubLogo, InstagramLogo, LinkedinLogo, TwitterLogo } from "phosphor-react";

export default function Layout({ children }) {
    return (
        <container>
<Scrollspy items={['Home', 'About', 'Skills', 'Portfolio', 'Resume']} currentClassName="is-current">
                <nav class="navbar" role="navigation" aria-label="main navigation">
                        <div class="navbar-brand">
                <a class="navbar-item" href="">
                </a>
                <a role="button" class="navbar-burger burger" aria-label="menu" aria-expanded="false"
                    data-target="navbarBasicExample">
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                </a>
            </div>
            <div class="navbar-start is-spaced">
                <div class="navbar-item">   
                <a href="#Home" class="navbar-item">Home</a>
                <a href="#About" class="navbar-item">About</a>
                <a href="#Skills" class="navbar-item">Skills</a>
                <a href="#Portfolio" class="navbar-item">Portfolio</a>
                <a href="#Resume" class="navbar-item">Resume</a>
                  <a href="http://rinehart.codes" class="navbar-item">Blog</a>
                  </div>
              <div className="navbar-end is-spaced">
                <div class="navbar-item">
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
            </Scrollspy>
          


        <main>
          {children}
      </main>

        </container>

  )
}
