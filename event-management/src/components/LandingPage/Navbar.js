import { Link } from "react-router-dom";
import { useContext, useState } from "react";
import CreateEventForm from "../Forms/CreateEventForm";
import { AppContext } from "../../data/Context";
import UserLoginForm from "../Forms/UserLoginForm";

const Navbar = ({ navbarTitle, navbarLinks }) => {
  // format for navbarLinks = [{linkText: "", linkPath: ""}]
  const [showCreateForm, setShowCreateForm] = useState(false);
  const [showLoginForm, setShowLoginForm] = useState(false);
  const { user, setCurrentUser } = useContext(AppContext);
  const logoutHandler = () => {
    setCurrentUser("");
  };
  return (
    <>
      {showLoginForm ? (
        <UserLoginForm
          show={showLoginForm}
          handleClose={() => setShowLoginForm(false)}
        />
      ) : null}
      {showCreateForm ? (
        <CreateEventForm
          show={showCreateForm}
          handleClose={() => setShowCreateForm(false)}
        />
      ) : null}
      <nav className="navbar navbar-expand-lg bg-light">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            {navbarTitle}
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              {navbarLinks.map((link) => {
                return (
                  <li className="nav-item" key={link.linkText}>
                    <Link className="nav-link" to={link.linkPath}>
                      {link.linkText}
                    </Link>
                  </li>
                );
              })}
            </ul>
            {user ? (
              user.is_organizer ? (
                <button
                  className="btn btn-outline-primary me-2"
                  onClick={() => setShowCreateForm(true)}
                >
                  Create Event
                </button>
              ) : null
            ) : null}
            {user ? (
              <button
                className="btn btn-outline-success"
                onClick={logoutHandler}
              >
                Logout
              </button>
            ) : (
              <button
                className="btn btn-outline-success"
                onClick={() => setShowLoginForm(true)}
              >
                Login
              </button>
            )}
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
