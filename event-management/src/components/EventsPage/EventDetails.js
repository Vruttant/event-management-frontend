import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
const EventDetails = ({ show, handleClose, eventData }) => {
  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>{eventData.title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p className="mb-3">{eventData.description}</p>
        <ul>
          <li>Location: {eventData.location}</li>
          <li>Date: {eventData.date}</li>
          <li>Time: {eventData.time}</li>
        </ul>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default EventDetails;
