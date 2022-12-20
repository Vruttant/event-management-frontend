import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
const EventDetails = ({ show, handleClose, eventData }) => {
  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>{eventData.title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>{eventData.description}</Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default EventDetails;
