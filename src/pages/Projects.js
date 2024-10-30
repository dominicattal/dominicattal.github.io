import bootstrap from "bootstrap";
import Asteroids from "../components/Projects/Asteroids";
import Minecraft from "../components/Projects/Minecraft";
import Snake from "../components/Projects/Snake";
import ProjectEuler from "../components/Projects/ProjectEuler";
import DiscoBreak from "../components/Projects/DiscoBreak";
import Collision from "../components/Projects/Collision";
import Graph from "../components/Projects/Graph";
import PerlinNoise from "../components/Projects/PerlinNoise";
import Soultaker from "../components/Projects/Soultaker";
import Pong from "../components/Projects/Pong";
import Leetcode from "../components/Projects/Leetcode";

function Projects() {
  return (
    <div className="container-fluid d-flex flex-wrap justify-content-center mt-3 gap-3">
      <Asteroids />
      <Minecraft />
      <Snake />
      <ProjectEuler />
      <Leetcode />
      <DiscoBreak />
      <Collision />
      <Graph />
      <PerlinNoise />
      <Soultaker />
      <Pong />
    </div>
  )
}

export default Projects;