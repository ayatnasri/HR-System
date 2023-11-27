import "./EducationInfo.css";
function EducationInfo({ employee }) {
  return (
    <div className="education-info">
      <h4>Education Information</h4>
      <ul>
        <span>Degree:</span> <li>{employee.degree}</li>
      </ul>
      <ul>
        <span>Courses:</span> <li>{employee.courses[0]}</li>
        <li>{employee.courses[1]}</li>
        <li>{employee.courses[2]}</li>
      </ul>
      <ul>
        <span>Skills:</span> <li>{employee.skills[0]}</li>
        <li>{employee.skills[1]}</li>
        <li>{employee.skills[2]}</li>
      </ul>
    </div>
  );
}

export default EducationInfo;
