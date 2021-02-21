import * as React from "react";

import Layout from "../components/layout";
import Hero from "../components/hero/hero";
import Skill from "../components/skills/skill"; 
import About from "../components/about/about";
import Project from "../components/project/project";


// markup
const IndexPage = () => {
  
  return (
    <Layout pageMeta={{
      title: "Librarian + Web Developer",
      keywords: ["web developer", "programmer", "portfolio", "librarian"],
      description: "Professional portfolio for Stephanie Rinehart, a web developer and librarian based in New England"
    }}
>
      <Hero />
      <About />
      <Skill />
      <Project />
      </Layout>
      
  )
}

export default IndexPage


