import React from "react";
import Container from "../container/Container";

import './Header.css'

type HeaderProps = {
  children: React.ReactNode
};

export default function DesktopHeader({ children }: HeaderProps) {
  return (
    <div className="desktop-header">
      <Container>
        <div className="header-content">
        {/* youtube logo */}
        <div className="header__logo">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/YouTube_Logo_2017.svg/512px-YouTube_Logo_2017.svg.png?20220605194644"
            alt="youtube logo"
          />
        </div>
        {/* search bar */}
        <div className="header__search">
          {
            children
          }
        </div>
        </div>
      </Container>
    </div>
  );
}
