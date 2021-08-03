import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { GithubLogo, Link } from "phosphor-react";
import { StructuredText } from "react-datocms";
import './project.css'; 

// markup
const Project = () => {
  const queryData = useStaticQuery(
    graphql`
      query MyQuery {
      allDatoCmsProject {
        nodes {
          description
          githubLink
          id
          imgAlt
          imgUrl
          link
          technologies
          title
        }
      }
    }

    `
  )
  

  return (

      <section className="mt-6" id="projects">
          <h3 className="title is-3 titletext">Projects</h3>
      {queryData.allDatoCmsProject.nodes.map((proj) => {
        return (
          <div className="columns mt-4 mb-4 is-desktop is-centered is-vcentered projs" >
                <div className="column is-4">
                    <div className="content">
                            <h5 className="title is-5" key={proj.id}>{proj.title}</h5>
                            
                <img className="projimg" src={proj.imgUrl} style={{ width: 34 + `rem` }} alt={proj.imgAlt} />
                </div>
                </div>
                <div className="column is-4">
                    <div className="block">
                        <strong>Description:</strong> <br />
                {proj.description}
              
                    </div>
                    <div className="block">
                        <strong>Technologies used:</strong> <br />
                    {proj.technologies} 
                    </div>
                    <div className="block">
                            <a href={proj.githubLink} target="_blank" rel="noopener noreferrer">
                        <GithubLogo color="#763262" weight="duotone" size={20} aria-label="Web browser icon" className="icon"/>
                        <span>Github</span>
                    </a>
                    &nbsp; &nbsp; &nbsp; 
                            <a href={proj.link} target="_blank" rel="noopener noreferrer">
                        <Link color="#763262" weight="duotone" size={20} aria-label="Web browser icon" className="icon"/>
                        <span>Deployed app</span>
                        </a>
                        </div>
                    <hr />
                    </div>
                </div>
                  
        );
      }
      )
                  }
          </section>

  )
}

export default Project