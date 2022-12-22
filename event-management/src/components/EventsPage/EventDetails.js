import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import StarRating from "./StarRating";
import CreateReviewForm from "../Forms/CreateReviewForm";
import { useContext } from "react";
import { AppContext } from "../../data/Context";
const EventDetails = ({ show, handleClose, eventData }) => {
  const { user } = useContext(AppContext);
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
        <div>
          <h6>Ratings: </h6>
          <hr />
          {eventData.reviews.map((review) => {
            return (
              <div>
                <StarRating activeStarCount={review.rating} />
                <blockquote>{review.review}</blockquote>
              </div>
            );
          })}
        </div>
        <div>
          {user ? (
            !user.is_organizer ? (
              <CreateReviewForm targetEvent={eventData} />
            ) : null
          ) : null}
        </div>
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
