import Leetcode
 from "../components/Leetcode";
function Projects() {
  return (
    <div className="container">
      <div className="row">
        <Leetcode />
      </div>
      <div className="row">
        <h1>Project Euler</h1>
        <p>My project euler stats</p>
        <img src="https://projecteuler.net/profile/domick.png"></img>
      </div>
      <div className="opengl">
        <h1>OpenGL</h1>
        <p>Some stuff ive done</p>
      </div>
    </div>
  )
}

export default Projects;