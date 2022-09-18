/* eslint-disable @typescript-eslint/no-unused-vars */
import {
  Nav,
  Logo,
  NavLink,
  NavMenu,
  LoginBtn,
  SocialIcons,
  OpenMenu,
  CloseMenu,
  Divider,
} from "./style";

import { useEffect, useState } from "react";

import { FaFacebook, FaTwitter } from "react-icons/fa";
import LogoIcon from "../svg/LogoSvg";

const Header = () => {
  const [handleMenuActivation, setHandleMenuActivation] = useState(false);

  const [windowSize, setWindowSize] = useState(getWindowSize());

  useEffect(() => {
    function handleWindowResize() {
      setWindowSize(getWindowSize());
    }

    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  function getWindowSize() {
    const { innerWidth, innerHeight } = window;
    return { innerWidth, innerHeight };
  }

  useEffect(() => {
    if (windowSize.innerWidth < 768) {
      setHandleMenuActivation(false);
    }
  }, [windowSize.innerWidth]);

  return (
    <Nav>
      <Logo>
        <LogoIcon
          color={`${handleMenuActivation ? "#fff" : "#242A45"}`}
          className={`${handleMenuActivation ? "#fff" : "#5267DF"}`}
          style={{ color: `${handleMenuActivation ? "#242A45" : "#fff"}` }}
        />
      </Logo>

      {handleMenuActivation ? (
        <CloseMenu
          style={{ color: "#fff" }}
          onClick={() => setHandleMenuActivation(!handleMenuActivation)}
        />
      ) : (
        <OpenMenu
          st
          onClick={() => setHandleMenuActivation(!handleMenuActivation)}
        />
      )}

      <NavMenu
        style={{
          display: `${
            windowSize.innerWidth < 768 && handleMenuActivation
              ? "flex"
              : windowSize.innerWidth > 768
              ? "flex"
              : "none"
          }`,
        }}
      >
        <Divider />

        <NavLink to="/features" activeStyled>
          FEATURES
        </NavLink>

        <Divider />

        <NavLink to="/pricing" activeStyled>
          PRICING
        </NavLink>

        <Divider />

        <NavLink to="/contact" activeStyled>
          Contact
        </NavLink>

        <Divider />

        <LoginBtn to="/login" activeStyled>
          LOGIN
        </LoginBtn>

        <SocialIcons
          style={{
            display: `${windowSize.innerWidth < 768 ? "flex" : "none"}`,
          }}
        >
          <button>
            <FaFacebook />
          </button>
          <button>
            <FaTwitter />
          </button>
        </SocialIcons>
      </NavMenu>
    </Nav>
  );
};

export default Header;
