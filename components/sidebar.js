import CheckAuth from "../services/checkauth.service";

const Sidebar = (props) => {
  let navbar;
  let loggedin = CheckAuth();
  if (loggedin) {
    navbar = (
      <>
        <nav className="col-md-2 d-none d-md-block bg-light sidebar">
          <div className="sidebar-sticky">
            <ul className="nav flex-column">
              <li className="nav-item">
                <a className="nav-link active" href="#">
                  <span data-feather="home"></span>
                  Dashboard <span className="sr-only">(current)</span>
                </a>
              </li>

              <li className="nav-item">
                <a className="nav-link" href="#">
                  <span data-feather="shopping-cart"></span>
                  Classrooms
                </a>
              </li>

              <li className="nav-item">
                <a className="nav-link" href="#">
                  <span data-feather="shopping-cart"></span>
                  Staff
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/students">
                  <span data-feather="file"></span>
                  Students
                </a>
              </li>

              <li className="nav-item">
                <a className="nav-link" href="#">
                  <span data-feather="bar-chart-2"></span>
                  Parents
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  <span data-feather="users"></span>
                  Exams
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  <span data-feather="layers"></span>
                  Fees
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </>
    );
  }
  return <>{navbar}</>;
};

export default Sidebar;
