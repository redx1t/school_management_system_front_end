import Link from "next/link";
import { Component } from "react";
import CheckAuth from "../services/checkauth.service";

const Nav = () => {
  let logout;
  let schoolname = "School Management System";
  let checkauth = CheckAuth();
  console.log(checkauth);
  //console.log(this.props)
  if (checkauth) {
    logout = (
      <li className="nav-item">
        <button
          className="btn btn-danger"
          onClick={(e) => {
            e.preventDefault();
            localStorage.clear();
            window.location.reload();
          }}
        >
          Logout
        </button>
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
      <nav className="navbar navbar-dark sticky-top bg-dark flex-md-nowrap p-3">
        <Link className="navbar-brand col-sm-3 col-md-2 mr-0" href="/">
          {schoolname}
        </Link>
        <ul className="navbar-nav px-3">{logout}</ul>
      </nav>
    </>
  );
};

export default Nav;
