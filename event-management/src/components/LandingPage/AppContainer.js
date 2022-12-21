import LandingPage from "./LandingPage";
import Navbar from "./Navbar";
import EventsList from "./EventsList";
import SideBar from "./Sidebar";

const AppContainer = ({ componentToRender }) => {
  return (
    <div>
      <Navbar
        navbarTitle="Eventr"
        navbarLinks={[
          { linkText: "Home", linkPath: "/" },
          { linkText: "Events", linkPath: "/events" },
        ]}
      />
      <div className="d-flex h-screen">
        {componentToRender === "events" ? <SideBar /> : null}
        <div>
          {componentToRender === "events" ? (
            <div className="p-3">
              <h4>Events near you...</h4>
              <EventsList />
            </div>
          ) : componentToRender === "home" ? (
            <LandingPage />
          ) : null}
        </div>
      </div>
    </div>
  );
};
export default AppContainer;
