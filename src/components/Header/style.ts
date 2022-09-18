import styled from "styled-components";

import { NavLink as Link } from "react-router-dom";

import { FaBars, FaTimes } from "react-icons/fa";

export const Nav = styled.nav`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 80px;
  min-width: 320px;
  width: 100%;
  z-index: 1000;
  background: #fff;
`;

export const Logo = styled.div`
  @media screen and (max-width: 1200px) {
    padding-left: 1.5rem;
  }
  @media screen and (max-width: 1024px) {
    z-index: 1000;
  }
`;

export const OpenMenu = styled(FaBars)`
  display: none;

  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 75%);
    font-size: 1.8rem;
    cursor: pointer;
  }
`;

export const CloseMenu = styled(FaTimes)`
  display: none;

  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 75%);
    font-size: 1.8rem;
    cursor: pointer;
    z-index: 10000;
  }
`;

export const NavMenu = styled.div`
  display: flex;
  align-items: center;
  margin-right: -24px;

  transition: all 0.2s ease-in-out;

  @media screen and (max-width: 1200px) {
    padding-right: 2rem;
  }

  @media screen and (max-width: 768px) {
    position: absolute;
    top: 0;
    flex-direction: column;
    padding: 5rem 2rem;
    align-items: center;
    box-shadow: rgba(0, 0, 0, 0.56) 0px 22px 70px 4px;
    width: 100%;
    height: 100vh;
    overflow-x: hidden;
    background: hsl(229, 31%, 21%, 0.97);
    margin: 0 auto;

    transition: all 0.2s ease-in-out;
  }
`;

export const NavLink = styled(Link)`
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 1.8rem 1rem;
  margin: 0 1rem;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  color: white;
  text-transform: uppercase;
  font-weight: 400;
  font-size: 1.5rem;

  @media screen and (min-width: 768px) {
    color: var(--Very-Dark-Blue);
    font-weight: 500;
    font-size: 1rem;

    &.active {
      color: #000;

      transition: all 0.2s ease-in-out;
    }
  }
`;

export const Divider = styled.div`
  width: 100%;
  border: 1px solid #ffffff80;
`;

export const LoginBtn = styled(Link)`
  background: none;
  text-decoration: none;
  color: white;
  font-weight: 500;
  border-radius: 5px;
  border: 2px solid white;
  box-shadow: none;
  width: 100%;
  padding: 1rem 0;
  margin-top: 2rem;

  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (min-width: 768px) {
    background: var(--Soft-Red);
    padding: 1rem 2rem;
    margin-top: 0;
    margin-left: 1rem;
    text-decoration: none;
    color: white;
    font-weight: 500;
    border-radius: 5px;
    box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
  }
`;

export const NavBtn = styled.nav`
  display: flex;
  align-items: center;
  margin-right: 24px;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const SocialIcons = styled.div`
  display: flex;
  gap: 1.5rem;
  justify-content: flex-end;
  height: 100%;
  button {
    border: none;
    background: none;
    font-size: 2rem;
    color: white;
  }
`;
