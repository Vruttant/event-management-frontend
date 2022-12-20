import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Clock, GeoAlt, CalendarEvent } from "react-bootstrap-icons";
import { useState } from "react";
import EventDetails from "../EventsPage/EventDetails";

const EventsList = ({ eventData }) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const renderModal = (eventData) =>
    `<EventDetails eventData=${eventData} show=${show} handleClose=${handleClose}/>`;
  return (
    <div className="row">
      {eventData
        ? eventData.map((event) => {
            return (
              <div
                className="col-sm-12 col-md-6 col-lg-4 mb-3 justify-items-center"
                key={event.id}
              >
                <Card
                  style={{ width: "30rem", height: "100%" }}
                  className="shadow-sm"
                >
                  <Card.Img variant="top" src={event.image} />
                  <Card.Body>
                    <Card.Title>{event.title}</Card.Title>
                    <ul className="list-unstyled">
                      <li className="p-1">
                        <span>
                          <GeoAlt /> {event.location}
                        </span>
                      </li>
                      <li className="p-1">
                        <span>
                          <CalendarEvent /> {event.date}
                        </span>
                      </li>
                      <li className="p-1">
                        <Clock /> {event.time}
                      </li>
                    </ul>
                  </Card.Body>
                  <Card.Footer>
                    <Button
                      className="float-end"
                      variant="primary"
                      onClick={handleShow}
                    >
                      View Details
                    </Button>
                  </Card.Footer>
                </Card>
              </div>
            );
          })
        : "There are no events"}
    </div>
  );
};

export default EventsList;
