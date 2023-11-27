import "./AboutMe.css";
function AboutMe({ employee }) {
  return (
    <div className="about-me">
      <h4>About Me</h4>
      <p>{employee.description}</p>
    </div>
  );
}

export default AboutMe;
