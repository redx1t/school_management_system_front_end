import Link from "next/link";
import { Component } from "react";
import CheckAuth from "../services/checkauth.service";

const Nav = () => {
  let logout;
  let schoolname = "School Management System";
  //console.log(this.props)
  if (CheckAuth()) {
    logout = (
      <li className="nav-item btn btn-danger">
        <Link
          onClick={(e) => {
            e.preventDefault();
            localStorage.clear();
          }}
          className="nav-link"
          href="/login"
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
        <Link className="navbar-brand col-sm-3 col-md-2 mr-0" href="/">
          {schoolname}
        </Link>
        <ul className="navbar-nav px-3">{logout}</ul>
      </nav>
    </>
  );
};

export default Nav;
