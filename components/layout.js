import Meta from "./meta";
import Nav from "./nav";
import Sidebar from "./sidebar";
import CheckAuth from "../services/checkauth.service";
const Layout = ({ children, page }) => {
  let navheading;
  let loggedin = CheckAuth();
  if (loggedin) {
    navheading = (
      <div className="container-fluid">
        <div className="row">
          <Sidebar />

          <main role="main" className="col-md-9 ml-sm-auto col-lg-10 pt-3 px-4">
            <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pb-2 mb-3 border-bottom">
              <h1 className="h2">{page}</h1>
              <div className="btn-toolbar mb-2 mb-md-0">
                <div className="btn-group mr-2">
                  <button className="btn btn-sm btn-outline-secondary">
                    Share
                  </button>
                  <button className="btn btn-sm btn-outline-secondary">
                    Export
                  </button>
                </div>
              </div>
            </div>
            {children}
          </main>
        </div>
      </div>
    );
  } else {
    navheading = (
      <div className="container-fluid">
        <div className="row">
          <Sidebar />

          <main
            role="main"
            className="col-md-12 ml-sm-auto col-lg-12 pt-3 px-4"
          >
            {children}
          </main>
        </div>
      </div>
    );
  }
  return (
    <>
      <Meta />
      <Nav />
      {navheading}
    </>
  );
};

Layout.defaultProps = {
  page: "Dashboard",
};
export default Layout;
