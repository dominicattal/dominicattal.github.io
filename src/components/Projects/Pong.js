function Pong() {
  return (
    <div className="card align-self-start" style={{ width: "18rem"}}>
      <div className="card-body">
        <h5 className="card-title">Pong</h5>
        <p className="card-subtitle mb-2 text-body-secondary"><em>C, Git, OpenGL, GLFW, WinSock</em></p>
        <p className="card-text">
          Recreation of the classic video game Pong. This project is mainly
          an exercise in socket programming. I plan to implement LAN and
          online multiplayer.
        </p>
        <a href="https://github.com/dominicattal/pong" class="card-link">Source</a>
      </div>
    </div>
  )
}

export default Pong;