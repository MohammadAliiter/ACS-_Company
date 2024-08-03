import React, { useState } from 'react';
import styled, { keyframes } from 'styled-components';
import { NavLink } from 'react-router-dom';
import NavbarLogo from '../../Image/NavbarLogo/NavbarLogo.jpg';

const slideDown = keyframes`
  from {
    opacity: 0;
    transform: translateY(-10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const NavbarContainer = styled.nav`
  width: 100%;
  background: linear-gradient(90deg, rgba(33,150,243,1) 0%, rgba(0,188,212,1) 50%, rgba(33,150,243,1) 100%);
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.75rem 2rem;
  z-index: 1000;
  position: fixed;
  top: 0;
  left: 0;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  animation: ${fadeIn} 0.5s ease-in-out;

  @media (max-width: 768px) {
    padding: 0.5rem 1rem;
  }
`;

const Logo = styled.div`
  display: flex;
  align-items: center;
  color: #fff;
  font-size: 1.5rem;
  font-weight: bold;

  img {
    width: 50%;
    height: 50%;
    margin-right: 0.5rem;
    border-radius: 5px;
  }
`;

const Menu = styled.ul`
  list-style: none;
  display: flex;
  gap: 2rem;
  font-size: 15px;
  font-weight: 500;
  align-items: center;

  @media (max-width: 768px) {
    display: ${(props) => (props.isOpen ? 'block' : 'none')};
    position: absolute;
    top: 60px;
    left: 0;
    width: 100%;
    background-color: #222;
    padding: 1rem 0;
    animation: ${slideDown} 0.5s ease-in-out;
    text-align: center;
    z-index: 999; /* Ensure the menu is above other content */
  }
`;

const MenuItem = styled.li`
  & a {
    text-decoration: none;
    color: #fff;
    padding: 0.5rem 1rem;
    display: block;
    border-radius: 5px;
    transition: background-color 0.3s, transform 0.3s;

    &:hover {
      background:  #06425C;
      transform: scale(1.05);
    }

    &.active {
      background-color: rgba(0,0,0,0.7);
    }
  }
`;

const Burger = styled.div`
  display: none;
  flex-direction: column;
  cursor: pointer;
  gap: 5px;

  @media (max-width: 768px) {
    display: flex;
  }

  div {
    width: 25px;
    height: 3px;
    background-color: #fff;
    transition: all 0.3s;
  }

  &.open div:nth-child(1) {
    transform: rotate(45deg) translateY(6px);
  }

  &.open div:nth-child(2) {
    opacity: 0;
  }

  &.open div:nth-child(3) {
    transform: rotate(-45deg) translateY(-6px);
  }
`;

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleMenuItemClick = () => {
    if (window.innerWidth <= 768) {
      setIsOpen(false);
    }
  };

  return (
    <NavbarContainer>
      <Logo>
        <img src={NavbarLogo} alt="Brand Logo" />
      </Logo>
      <Burger className={isOpen ? 'open' : ''} onClick={toggleMenu}>
        <div />
        <div />
        <div />
      </Burger>
      <Menu isOpen={isOpen}>
        <MenuItem>
          <NavLink to="/" exact activeClassName="active" onClick={handleMenuItemClick}>
            Home
          </NavLink>
        </MenuItem>
        <MenuItem>
          <NavLink to="/services" activeClassName="active" onClick={handleMenuItemClick}>
            Services
          </NavLink>
        </MenuItem>
        <MenuItem>
          <NavLink to="/industries" activeClassName="active" onClick={handleMenuItemClick}>
            Industries
          </NavLink>
        </MenuItem>
        <MenuItem>
          <NavLink to="/about-us" activeClassName="active" onClick={handleMenuItemClick}>
            About Us
          </NavLink>
        </MenuItem>
        <MenuItem>
          <NavLink to="/contact-us" activeClassName="active" onClick={handleMenuItemClick}>
            Contact Us
          </NavLink>
        </MenuItem>
        <MenuItem>
          <NavLink to="/career" activeClassName="active" onClick={handleMenuItemClick}>
            Career
          </NavLink>
        </MenuItem>
      </Menu>
    </NavbarContainer>
  );
};

export default Navbar;
