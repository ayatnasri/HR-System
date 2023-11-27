import "./personalInfo.css";

function PersonalInfo({ employee }) {
  return (
    <div className="personal-info">
      <img
        className={`employee-profile ${
          employee.isActive ? "active" : "inactive"
        }`}
        src={employee.image}
        alt={employee.name}
      />
      <div>
        <h2>{employee.name}</h2>
        <span>{employee.jobTitle}</span>
        <h4>
          <span>Manager name:</span> {employee.managerName}
        </h4>
        <h4>
          <span>Job time :</span> {employee.jobTime}
        </h4>
      </div>
    </div>
  );
}

export default PersonalInfo;
