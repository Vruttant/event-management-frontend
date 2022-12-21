import Modal from "react-bootstrap/Modal";
import Event from "../../models/Event";
import { useState } from "react";
import { AppContext } from "../../data/Context";
import { useContext } from "react";

const CreateEventForm = ({ show, handleClose }) => {
  const [eventTitle, setEventTitle] = useState("");
  const [eventDescription, setEventDescription] = useState("");
  const [eventImageURL, setEventImageURL] = useState("");
  const [eventLocation, setEventLocation] = useState("");
  const [eventDate, setEventDate] = useState("");
  const [eventTime, setEventTime] = useState("");

  const { eventsData, eventsDataHandler } = useContext(AppContext);

  const handleFormSubmit = (event) => {
    event.preventDefault();
    console.log("entered onsubmit");
    const eventID = eventsData.length + 1;
    const newEvent = new Event(
      eventID,
      eventTitle,
      eventDescription,
      eventImageURL,
      eventLocation,
      eventDate,
      eventTime
    );

    const newEventData = [...eventsData, newEvent];
    eventsDataHandler(newEventData);
    handleClose();
  };
  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Create a new event</Modal.Title>
      </Modal.Header>
      <form onSubmit={handleFormSubmit}>
        <div className="modal-body">
          <div className="mb-3">
            <label className="form-label" htmlFor="event-title">
              Event Title
            </label>
            <input
              id="event-title"
              className="form-control"
              type="text"
              placeholder="Enter event title"
              onChange={(event) => setEventTitle(event.target.value)}
            />
          </div>
          <div className="mb-3">
            <label className="form-label" htmlFor="event-description">
              Event Description
            </label>
            <input
              id="event-description"
              className="form-control"
              as="textarea"
              rows={3}
              placeholder="Give a detailed description of your event here..."
              onChange={(event) => setEventDescription(event.target.value)}
            />
          </div>
          <div className="mb-3">
            <label className="form-label" htmlFor="image-url">
              Event Image URL
            </label>
            <input
              id="image-url"
              className="form-control"
              type="text"
              placeholder="Paste URL for an image related to your event"
              onChange={(event) => setEventImageURL(event.target.value)}
            />
          </div>
          <div className="mb-3">
            <label className="form-label" htmlFor="event-location">
              Location
            </label>
            <input
              id="event-location"
              className="form-control"
              type="text"
              placeholder="Where'd it be happening?"
              onChange={(event) => setEventLocation(event.target.value)}
            />
          </div>
          <div className="mb-3">
            <label className="form-label" htmlFor="event-date">
              Date
            </label>
            <input
              id="event-date"
              className="form-control"
              type="date"
              onChange={(event) => setEventDate(event.target.value)}
            />
          </div>
          <div className="mb-3">
            <label className="form-label" htmlFor="event-time">
              Time
            </label>
            <input
              id="event-time"
              className="form-control"
              type="time"
              onChange={(event) => setEventTime(event.target.value)}
            />
          </div>
        </div>
        <div className="modal-footer">
          <button className="btn btn-secondary" onClick={handleClose}>
            Close
          </button>
          <button className="btn btn-primary" type="submit">
            Create
          </button>
        </div>
      </form>
    </Modal>
  );
};

export default CreateEventForm;
