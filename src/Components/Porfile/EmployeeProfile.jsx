import React, { useState } from "react";
import PersonalInfo from "./Personal info/PersonalInfor";
import ContactInfo from "./Contact info/ContactInfo";
import EducationInfo from "./Education info/EducationInfo";
import AboutMe from "./About Me/AboutMe";
import "./EmployeeProfile.css";
import EditEmployeeModal from "./Edit/EditEmployeeModal";

function EmployProfile() {
  const [isEditing, setIsEditing] = useState(false);
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const [employeeState, setEmployeeState] = useState({
    id: 1,
    name: "Sara Sabrin",
    jobTitle: "Software Engineer",
    managerName: "Jane Smith",
    isActive: true,
    image:
      "https://th.bing.com/th/id/OIP.XzempItc4rb6OmK549PTWwAAAA?pid=ImgDet&w=186&h=186&c=7&dpr=1,4",
    jobTime: "40 H in a week",
    email: "Sara@example.com",
    address: "123 Main St, City",
    phoneNumber: "123-456-7890",
    degree: "Bachelor of Science in Computer Science",
    courses: [
      "Web Development",
      "Database Management",
      "React",
      "Angular",
      ".NET",
    ],
    skills: ["JavaScript", "React", "Node.js"],
    description:
      "Passionate software engineer with over 5 years of experience in full-stack web development. I specialize in building scalable and maintainable applications using the latest technologies. I am dedicated to delivering high-quality code and enjoy collaborating with cross-functional teams to solve complex problems.",
  });

  const handleEditClick = () => {
    setModalIsOpen(true);
  };

  const handelChange = (e) => {
    const { name, value } = e.target;
    setEmployeeState({ ...employeeState, [name]: value });
  };

  const handleSave = (e) => {
    // Add logic to save changes to employeeData
    e.preventDefault();
    setEmployeeState(employeeState);

    setModalIsOpen(false);
    setIsEditing(false);
  };

  const handleModalClose = () => {
    setModalIsOpen(false);
  };

  return (
    <div className={`employee-profile ${isEditing ? "editing" : ""}`}>
      <h1>Employee Profile</h1>
      <div className="employee-profile2">
        <div className="left-section">
          <PersonalInfo
            employee={employeeState}
            onEditClick={handleEditClick}
          />
          <ContactInfo employee={employeeState} />
        </div>

        <div className="right-section">
          <AboutMe employee={employeeState} />
          <EducationInfo employee={employeeState} />
        </div>
      </div>

      <EditEmployeeModal
        isOpen={modalIsOpen}
        onRequestClose={handleModalClose}
        onSave={handleSave}
        employee={employeeState}
        handelChange={handelChange}
      />
    </div>
  );
}

export default EmployProfile;
