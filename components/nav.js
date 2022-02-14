import Link from "next/link";
import { Component } from "react";

export default class Nav extends Component {
  render() {
    let logout;
    //console.log(this.props)
    if (this.props.user) {
      logout = (
        <li className="nav-item text-nowrap">
          <Link
            href="/"
            onClick={() => localStorage.clear()}
            className="nav-link"
          >
            Logout
          </Link>
        </li>
      );
    } else {
      <li className="nav-item text-nowrap">
        <Link href="/login" className="nav-link">
          Login
        </Link>
      </li>;
    }
    return (
      <>
        <nav className="navbar navbar-dark sticky-top bg-dark flex-md-nowrap p-0">
          <a className="navbar-brand col-sm-3 col-md-2 mr-0" href="#">
            {this.props.school.schoolname}
          </a>
          <ul className="navbar-nav px-3">{logout}</ul>
        </nav>
      </>
    );
  }
}
