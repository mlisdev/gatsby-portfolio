import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { GithubLogo, Link } from "phosphor-react";

// markup
const Project = () => {
  const queryData = useStaticQuery(
    graphql`
        query MyQuery {
              allDatoCmsProject {
                    nodes {
                    entityPayload  {
                        attributes {
                        title
                        img_url
                        description
                        technologies
                        github_link
                        link
                        }
                        id
                    }
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
          <div className="columns mt-4 mb-4 is-desktop is-centered is-vcentered projs" key={proj.id}>
                <div classNamme="column is-4">
                    <div className="content">
                        
                            <h5 class="title is-5">{proj.entityPayload.attributes.title}</h5>
                            
                <img src={proj.entityPayload.attributes.img_url} style={{ width: 32 + `rem` }} />
                </div>
                </div>
                <div className="column is-4">
                    <block>
                        <strong>Description:</strong> <br />
                    {proj.entityPayload.attributes.description} 
                    </block>
                    <br />
                    <br />
                    <block>
                        <strong>Technologies used:</strong> <br />
                    {proj.entityPayload.attributes.technologies} 
                    </block>
                    <br />
                    <br />
                            <a href={proj.entityPayload.attributes.github_link} target="_blank" rel="noopener noreferrer">
                        <GithubLogo color="#763262" weight="duotone" size={20} aria-label="Web browser icon" className="icon"/>
                        <span>Github</span>
                    </a>
                    &nbsp; &nbsp; &nbsp; 
                            <a href={proj.entityPayload.attributes.link} target="_blank" rel="noopener noreferrer">
                        <Link color="#763262" weight="duotone" size={20} aria-label="Web browser icon" className="icon"/>
                        <span>Deployed app</span>
                            </a>
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