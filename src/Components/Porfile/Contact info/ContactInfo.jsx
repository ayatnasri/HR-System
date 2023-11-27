import "./contactInfo.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faPhone,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";

function ContactInfo({ employee }) {
  return (
    <div className="contact-info">
      <h4>Contact Information</h4>
      <p>
        {" "}
        <FontAwesomeIcon icon={faEnvelope} />
        {employee.email}
      </p>
      <p>
        <FontAwesomeIcon icon={faLocationDot} />
        {employee.address}
      </p>
      <p>
        <FontAwesomeIcon icon={faPhone} /> {employee.phoneNumber}
      </p>
    </div>
  );
}

export default ContactInfo;
