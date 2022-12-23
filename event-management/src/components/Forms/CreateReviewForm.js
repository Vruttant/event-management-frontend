import { useContext } from "react";
import { AppContext } from "../../data/Context";
import Review from "../../models/Review";
import { useState } from "react";

const CreateReviewForm = ({ targetEvent }) => {
  const { eventsData, eventsDataHandler } = useContext(AppContext);
  const [rating, setRating] = useState("");
  const [review, setReview] = useState("");

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const newReview = new Review(rating, review);
    const newEventsList = eventsData.filter(
      (event) => event.id !== targetEvent.id
    );
    const prevEvent = eventsData.filter(
      (event) => event.id === targetEvent.id
    )[0];
    prevEvent.reviews.push(newReview);
    newEventsList.push(prevEvent);
    eventsDataHandler(newEventsList);
  };
  return (
    <form onSubmit={handleFormSubmit}>
      <h6>Add review</h6>
      <div className="mb-3">
        <label className="form-label" htmlFor="rating">
          Rating
        </label>
        <input
          id="rating"
          className="form-control w-25"
          type="number"
          placeholder="3"
          onChange={(e) => setRating(e.target.value)}
        />
      </div>
      <div className="mb-3">
        <label className="form-label" htmlFor="review">
          Review
        </label>
        <textarea
          id="review"
          className="form-control"
          as="textarea"
          rows={3}
          placeholder="How was your experience?"
          onChange={(e) => setReview(e.target.value)}
        />
      </div>

      <div>
        <button className="btn btn-primary" type="submit">
          Submit
        </button>
      </div>
    </form>
  );
};

export default CreateReviewForm;
