import { useContext } from "react";
import { AppContext } from "../../data/Context";
import UserData from "../../data/UserData";
import Modal from "react-bootstrap/Modal";
import { useState } from "react";
const UserLoginForm = ({ show, handleClose }) => {
  const { setCurrentUser } = useContext(AppContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleFormSubmit = async (e) => {
    console.log(e);
    e.preventDefault();
    const userMatch = UserData.filter(
      (user) => user.email === email && user.password === password
    )[0];
    await setCurrentUser(userMatch);
    console.log(userMatch);
    handleClose();
  };

  return (
    <div>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Login</Modal.Title>
        </Modal.Header>
        <form onSubmit={handleFormSubmit}>
          <div className="modal-body">
            <div className="mb-3">
              <label className="form-label" htmlFor="email">
                Email
              </label>
              <input
                id="email"
                className="form-control"
                type="text"
                placeholder="john.doe@gmail.com"
                onChange={(event) => setEmail(event.target.value)}
              />
            </div>
            <div className="mb-3">
              <label className="form-label" htmlFor="password">
                Password
              </label>
              <input
                id="password"
                className="form-control"
                type="password"
                placeholder="**********"
                onChange={(event) => setPassword(event.target.value)}
              />
            </div>
          </div>
          <div className="modal-footer">
            <button className="btn btn-secondary" onClick={handleClose}>
              Close
            </button>
            <button className="btn btn-primary" type="submit">
              Login
            </button>
          </div>
        </form>
      </Modal>
    </div>
  );
};

export default UserLoginForm;
