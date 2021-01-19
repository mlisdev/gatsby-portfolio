import React from "react"
import { useStaticQuery, graphql} from "gatsby"


const Project = () => {
  const queryData = useStaticQuery(
    graphql`
        query MyQuery {
        allDatoCmsProject {
            nodes {
            id
            title
            aboutText
            ghLink
            link
            technologies
            mainImage {
                url
            }
            }
        }
        }
    `
  )

  return (

          <div class="content">
        <h1>Projects</h1>
                  {queryData.allDatoCmsProject.nodes.map((projects) => {
                      return (
            <div>
                    {projects.title}
        <ul>
                                  <li>{projects.aboutText}</li>
                                  <li>{projects.ghLink}</li>
                                  <li>{projects.link}</li>
                                  <li>{projects.technologies}</li>
                                  <li>{projects.mainImage.url}</li>
                              </ul>
                              </div>
            );
          })}
        </div>
  );
};


export default Project