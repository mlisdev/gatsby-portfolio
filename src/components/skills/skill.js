import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"
import "./skill.css"

// markup
const Skill = () => {
  const queryData = useStaticQuery(
    graphql`
        query skillQuery {
  allDatoCmsLibrarySkill(sort: {order: ASC, fields: skill}) {
    nodes {
      skill
      id
    }
  }
  allDatoCmsSoftwareSkill(sort: {fields: skill, order: ASC}) {
    nodes {
      skill
      id
    }
  }
}
    `
    )

  return (

    <section className="mt-6 has-background-light" id="skills">
      <div className="columns is-mobile is-centered">
      <div className="column is-one-quarter">
          <div className="box">
            <div className="content">
            <h4>Librarian Skills</h4>
      {queryData.allDatoCmsLibrarySkill.nodes.map((skills) => {
        return (
          <ul key={skills.id}>
            <li>{skills.skill}</li>
          </ul>
        );
      }
      )
        }
          </div>
        </div>
        </div>
        <div className="column is-one-quarter">
          <div className="box">
            <div className="content">
            <h4>Software Engineer Skills</h4>
      {queryData.allDatoCmsSoftwareSkill.nodes.map((skills) => {
        return (
          <ul key={skills.id}>
            <li>{skills.skill}</li>
          </ul>
        );
      }
      )
              }
        </div>
        </div>
        </div>
        </div>
      </section>

  )
}

export default Skill