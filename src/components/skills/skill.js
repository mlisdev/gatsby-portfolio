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
  allDatoCmsHobbyList(sort: {fields: hobby, order: ASC})  {
    nodes {
      hobby
      id
    }
  }
}
    `
    )

  return (

    <section className="mt-6 has-background-light" id="skills">
      <h3 className="title is-3 titletext">Skills</h3>
      <div className="columns is-desktop is-centered">
      <div className="column is-3">
          <div className="box">
            <div className="content">
            <h4>Library Skills</h4>
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
        <div className="column is-3">
          <div className="box">
            <div className="content">
            <h4>Dev Skills</h4>
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
        <div className="column is-3">
          <div className="box">
            <div className="content">
            <h4>Hobbies</h4>
      {queryData.allDatoCmsHobbyList.nodes.map((hobbies) => {
        return (
          <ul key={hobbies.id}>
            <li>{hobbies.hobby}</li>
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