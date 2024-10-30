import { useNavigate } from 'react-router-dom';

function Home() {
  return (
    <div className="container position-absolute top-50 start-50 translate-middle">
      <div className="row align-items-center">
        <div className="col">
          <h1 className="text-center">Hi, I'm Dominic</h1>
          <p className="text-center">I like puzzles and making stuff.</p>
        </div>
      </div>
      <div className="row justify-content-center">
        <div className="col-4 text-center">
          <a href="https://github.com/dominicattal"><img className="logo img-fluid me-3" src="github-mark.png" /></a>
          <a href="https://www.linkedin.com/in/dominicattal/"><img className="logo img-fluid me-3" src="linkedin.png" /></a>
          <a href="mailto: da526@njit.edu"><img className="logo img-fluid me-3" src="gmail.png" /></a>
        </div>
      </div>
    </div>
  );
}

export default Home;