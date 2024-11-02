function Matmul() {
  return (
    <div className="card align-self-start" style={{ width: "17rem"}}>
      <div className="card-body">
        <h5 className="card-title">Matrix Multiplication</h5>
        <p className="card-subtitle mb-2 text-body-secondary"><em>C, OpenGL, OpenMP, Git</em></p>
        <p className="card-text">
          Testing matrix multiplication with various methods, including
          sequentially, parallelized on the CPU, and parallelized on the GPU.
        </p>
        <a href="https://github.com/dominicattal/matrix-multiplication" class="card-link">Source</a>
      </div>
    </div>
  )
}

export default Matmul;