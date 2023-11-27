import React from "react";
import PersonalInfo from "./Personal info/PersonalInfor";
import ContactInfo from "./Contact info/ContactInfo";
import EducationInfo from "./Education info/EducationInfo";
import AboutMe from "./About Me/AboutMe";
import "./EmployeeProfile.css";

function EmployProfile() {
  const emploeeInformation = {
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
  };

  return (
    <div className="profile">
      <h1>Employee Profile</h1>
      <div className="employee-profile">
        <div className="left-section">
          <PersonalInfo employee={emploeeInformation} />
          <ContactInfo employee={emploeeInformation} />
        </div>

        <div className="right-section">
          <AboutMe employee={emploeeInformation} />
          <EducationInfo employee={emploeeInformation} />
        </div>
      </div>
    </div>
  );
}

export default EmployProfile;
