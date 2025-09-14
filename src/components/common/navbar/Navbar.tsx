'use client';

import React, { useState } from 'react';

import Link from 'next/link';
import {
  Navigation,
  MenuContainer,
  MenuLink,
  BurgerMenu,
  Sidebar,
  CloseButton,
  SidebarLogoContainer,
  Backdrop,
  MobileLogoContainer,
} from './Navbar.styles';

const Navbar = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  // const [marketplaceDropdownOpen, setMarketplaceDropdownOpen] = useState(false);

  // const toggleMarketplaceDropdown = () => {
  //   setMarketplaceDropdownOpen((prev) => !prev);
  // };

  // const closeMarketplaceDropdown = () => {
  //   setMarketplaceDropdownOpen(false);
  // };

  const toggleSidebar = () => {
    setSidebarOpen((prev) => !prev);
  };

  const closeSidebar = () => {
    setSidebarOpen(false);
  };

  return (
    <Navigation>
      <div>
        <MobileLogoContainer>OPI SUOMI</MobileLogoContainer>
        <BurgerMenu onClick={toggleSidebar}>
          <span />
          <span />
          <span />
        </BurgerMenu>
      </div>
      <Sidebar className={sidebarOpen ? 'sidebar-open' : 'sidebar-closed'}>
        <CloseButton onClick={toggleSidebar}>&times;</CloseButton>
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
          }}
        >
          <SidebarLogoContainer>OPI SUOMI</SidebarLogoContainer>
        </div>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: 10,
            color: '#002E83',
          }}
        >
          <Link href="/" onClick={toggleSidebar}>
            Home
          </Link>
          <Link href="/basics" onClick={toggleSidebar}>
            The Basics
          </Link>
          <Link href="/intermediate" onClick={toggleSidebar}>
            Intermediate
          </Link>
          <Link href="/advanced" onClick={toggleSidebar}>
            Advanced
          </Link>
          <Link href="/puhekieli" onClick={toggleSidebar}>
            Spoken Finnish
          </Link>
          {/* <Link href="/marketplace" onClick={toggleSidebar}>
            Marketplace
          </Link> */}
          {/* <div style={{ position: 'relative' }}>
            <MenuLink as="div" onClick={toggleMarketplaceDropdown}>
              Marketplace ▾
            </MenuLink>

            {marketplaceDropdownOpen && (
              <div
                style={{
                  position: 'absolute',
                  top: '100%',
                  left: 0,
                  backgroundColor: 'white',
                  border: '1px solid #ccc',
                  borderRadius: '4px',
                  boxShadow: '0 2px 6px rgba(0,0,0,0.1)',
                  padding: '10px',
                  zIndex: 20,
                }}
              >
                <Link href="/marketplace" onClick={closeMarketplaceDropdown}>
                  All Products
                </Link>
                <br />
                <Link
                  href="/marketplace/category/electronics"
                  onClick={closeMarketplaceDropdown}
                >
                  Electronics
                </Link>
                <br />
                <Link
                  href="/marketplace/category/fashion"
                  onClick={closeMarketplaceDropdown}
                >
                  Fashion
                </Link>
                <br />
                <Link
                  href="/marketplace/category/services"
                  onClick={closeMarketplaceDropdown}
                >
                  Services
                </Link>
              </div>
            )}
          </div> */}
        </div>
      </Sidebar>
      <Backdrop
        className={sidebarOpen ? 'backdrop-open' : 'backdrop-closed'}
        onClick={closeSidebar}
      />
      <MenuContainer>
        <MenuLink href="/">Home</MenuLink>
        <MenuLink href="/basics">The Basics</MenuLink>
        <MenuLink href="/intermediate">Intermediate</MenuLink>
        <MenuLink href="/advanced">Advanced</MenuLink>
        <MenuLink href="/puhekieli">Spoken Finnish</MenuLink>
        {/* <div style={{ position: 'relative' }}>
          <MenuLink as="div" onClick={toggleMarketplaceDropdown}>
            Marketplace ▾
          </MenuLink>

          {marketplaceDropdownOpen && (
            <div
              style={{
                position: 'absolute',
                top: '100%',
                left: 0,
                backgroundColor: 'white',
                border: '1px solid #ccc',
                borderRadius: '4px',
                boxShadow: '0 2px 6px rgba(0,0,0,0.1)',
                padding: '10px',
                zIndex: 20,
              }}
            >
              <Link href="/marketplace" onClick={closeMarketplaceDropdown}>
                All Products
              </Link>
              <br />
              <Link
                href="/marketplace/category/electronics"
                onClick={closeMarketplaceDropdown}
              >
                Electronics
              </Link>
              <br />
              <Link
                href="/marketplace/category/fashion"
                onClick={closeMarketplaceDropdown}
              >
                Fashion
              </Link>
              <br />
              <Link
                href="/marketplace/category/services"
                onClick={closeMarketplaceDropdown}
              >
                Services
              </Link>
            </div>
          )}
        </div> */}
      </MenuContainer>
    </Navigation>
  );
};

export default Navbar;
