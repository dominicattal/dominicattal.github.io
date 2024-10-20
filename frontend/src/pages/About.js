import Courses from "../components/Courses";

function About() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-6">
          <h1 className="text-center">About me</h1>
          <p className="text-justify">
            Hi, I'm Dominic Attalienti, a junior at the New Jersey Institute of Technology and a
            member of the Albert Dorman Honors College. I currently work
            part time as an undergraduate computer science tutor at The 
            Norma J. Clayton '81 Learning Center. I am also a treasurer
            for NJIT's programming team and a volunteer tutor for the Ying Wu
            College of Computing. My hobbies include competitive programming, computer graphics,
            math, classical piano, and video games. I'm currently searching for a
            summer internship.
          </p>
        </div>
      </div>
      <h1>Skills</h1>
      <p>C, Python, etc</p>
      <Courses />
      <h1>Contact</h1>
      <p>Email: da526@njit.edu</p>
      <p>LinkedIn: in/dominicattal/</p>
      <p>Github: https://github.com/dominicattal</p>
    </div>
  )
}

export default About;