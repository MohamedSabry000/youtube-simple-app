import React from 'react'
import Container from '../container/Container'

import './Header.css'

type HeaderProps = {
  children: React.ReactNode
};

export default function MobileHeader({ children }: HeaderProps) {
  return (
    <div className="mobile-header">
      <Container>
        <div className="header-content">
        {/* youtube logo */}
        <div className="header__logo">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/4/42/YouTube_light_icon_%282017%29.svg"
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
  )
}
