import * as React from "react";
import Layout from "../components/layout";
import Hero from "../components/hero/hero";
import Skill from "../components/skills/skill" 
import About from "../components/about/about" 


// markup
const IndexPage = () => {
  return (

    <Layout>
      <Hero />
      <About />
      <Skill />
    </Layout>
  )
}

export default IndexPage


