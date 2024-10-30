function Snake() {
  return (
    <div className="card align-self-start" style={{width: "13rem"}}>
      <div className="card-body">
        <h5 className="card-title">Snake</h5>
        <p className="card-subtitle mb-2 text-body-secondary"><em>C, Git, OpenGL, GLFW</em></p>
        <p className="card-text">
          Implementation of the Snake game. The user is able
          to write a game to a file and replay a game from a
          file.
        </p>
        <a href="https://github.com/dominicattal/snake" class="card-link">Source</a>
      </div>
    </div>
  )
}

export default Snake;