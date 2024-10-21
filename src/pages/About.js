import Courses from "../components/Courses";
import AboutMe from "../components/AboutMe";
import Skills from "../components/Skills";
import Contact from "../components/Contact";

function About() {
  return (
    <div className="container">
      <div className="row">
        <AboutMe />
      </div>
      <div className="row">
        <div className="col-6">
          <Skills />
        </div>
        <div className="col-6">
          <Courses />
        </div>
      </div>
      <div className="row justify-content-center">
        <div className="col-4">
          <Contact />
        </div>
      </div>
    </div>
  )
}

export default About;