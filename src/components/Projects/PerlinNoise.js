function PerlinNoise() {
  return (
    <div className="card" style={{ width: "18rem"}}>
      <div className="card-body">
        <h5 className="card-title">Perlin Noise</h5>
        <p className="card-subtitle mb-2 text-body-secondary"><em>C++, SFML</em></p>
        <p className="card-text">
          Visual implementation of the Perlin Noise algorithm.
          The weights, random seed, and smoothing function are alterable
          to display cool effects.
        </p>
        <a href="#" class="card-link">Source</a>
      </div>
    </div>
  )
}

export default PerlinNoise;