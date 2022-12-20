import { Form } from "react-bootstrap";
import Button from "react-bootstrap/Button";

const CreateEventForm = () => {
  return (
    <div className="d-flex justify-content-center">
      <div className="card p-3 w-50">
        <Form>
          <Form.Group className="mb-3">
            <Form.Label>Event Title</Form.Label>
            <Form.Control type="text" placeholder="Enter event title" />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Event Description</Form.Label>
            <Form.Control as="textarea" rows={3} />
          </Form.Group>
          <Button variant="primary" type="submit">
            Create
          </Button>
        </Form>
      </div>
    </div>
  );
};

export default CreateEventForm;
