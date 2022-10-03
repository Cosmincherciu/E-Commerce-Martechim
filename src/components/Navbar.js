import React, { Component } from "react";
import { Link } from "react-router-dom";
import logo from "../logo-martechim.png";
import styled from "styled-components";
import { ButtonContainer } from "./Button";

export default class Navbar extends Component {
  render() {
    return (
      <NavWrapper className="navbar navbar-expand-sm navbar-dark px-sm-5">
        <Link to="/">
          <img
            src={logo}
            alt="store"
            className="navbar-brand"
            width="250"
          ></img>
        </Link>
        <ul className="navbar-nav align-items-center">
          <li className="nav-item ml-5">
            <Link to="/" className="nav-link">
              produse
            </Link>
          </li>
        </ul>
        <Link to="/cart" className="mx-auto">
          <ButtonContainer>
            <span className="mr-2">
              <i className="fa-solid fa-cart-shopping" />
            </span>
            coșul meu
          </ButtonContainer>
        </Link>
        <ul className="navbar-nav align-items-right">
          <li className="nav-item ml-5">
            <Link to="/register" className="nav-link">
              Register
            </Link>
          </li>
        </ul>
        <br></br>
        <Link to="/login" className="nav-link">
          Login
        </Link>
      </NavWrapper>
    );
  }
}

const NavWrapper = styled.nav`
  background: var(--mainPink);
  .nav-link {
    color: var(--mainWhite) !important;
    fonst-size: 1.3rem;
    text-transform: capitalize;
  }
`;
