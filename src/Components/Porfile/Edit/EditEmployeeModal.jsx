import React from "react";
import Modal from "react-modal";
import "./EditStyle.css";

const EditEmployeeModal = ({
  isOpen,
  onRequestClose,
  onSave,
  employee,
  handelChange,
}) => {
  return (
    <Modal
      className="edit-modal"
      isOpen={isOpen}
      onRequestClose={onRequestClose}
    >
      <div className="modal-close-btn" onClick={onRequestClose}>
        &times;
      </div>
      <label>Name :</label>
      <input
        type="text"
        name="name"
        value={employee.name}
        onChange={handelChange}
      />
      <label>job Title :</label>
      <input
        type="text"
        name="jobTitle"
        value={employee.jobTitle}
        onChange={handelChange}
      />
      <label>Job Time :</label>
      <input
        type="text"
        name="jobTime"
        value={employee.jobTime}
        onChange={handelChange}
      />
      <label>Email : </label>
      <input
        type="text"
        name="email"
        value={employee.email}
        onChange={handelChange}
      />
      <label>Address :</label>
      <input
        type="text"
        name="address"
        value={employee.address}
        onChange={handelChange}
      />
      <label>Phone :</label>
      <input
        type="text"
        name="phone"
        value={employee.phoneNumber}
        onChange={handelChange}
      />
      <label>Degree :</label>
      <input
        type="text"
        name="degree"
        value={employee.degree}
        onChange={handelChange}
      />
      <label>Courses :</label>
      <input
        type="text"
        name="course"
        value={employee.courses}
        onChange={handelChange}
      />
      {/*
      <label>Skills :</label>
      <input type="text" name="skills" value={employee.courses} />
      <label>Description :</label>
  <textarea type="text" name="description" value={employee.description} />*/}

      <button onClick={onSave}>Save</button>
      <button onClick={onRequestClose}>Cancel</button>
    </Modal>
  );
};

export default EditEmployeeModal;
