import Courses from "../components/Courses";
import AboutMe from "../components/AboutMe";
import Skills from "../components/Skills";

function About() {
  return (
    <div className="container mt-2">
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
    </div>
  )
}

export default About;