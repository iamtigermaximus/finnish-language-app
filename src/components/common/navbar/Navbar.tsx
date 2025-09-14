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
  DropdownContainer,
  DropdownMenu,
  DropdownItem,
  DropdownTrigger,
  SidebarDropdown,
  SidebarDropdownContent,
  SidebarDropdownHeader,
  BurgerContainer,
} from './Navbar.styles';

const Navbar = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [mobileDropdowns, setMobileDropdowns] = useState({
    basics: false,
    intermediate: false,
    advanced: false,
    puhekieli: false,
  });

  const toggleSidebar = () => {
    setSidebarOpen((prev) => !prev);
  };

  const closeSidebar = () => {
    setSidebarOpen(false);
  };

  const handleDropdownEnter = (dropdownName: string) => {
    setActiveDropdown(dropdownName);
  };

  const handleDropdownLeave = () => {
    setActiveDropdown(null);
  };

  const toggleMobileDropdown = (dropdownName: keyof typeof mobileDropdowns) => {
    setMobileDropdowns((prev) => ({
      ...prev,
      [dropdownName]: !prev[dropdownName],
    }));
  };

  // Dropdown content for each section
  const dropdownContent = {
    basics: [
      { href: '/basics/greetings', label: 'Greetings' },
      { href: '/basics/numbers-colors', label: 'Numbers and Colors' },
      { href: '/basics/days-months', label: 'Days and Months' },
      { href: '/basics/time', label: 'Time' },
      { href: '/basics/directions', label: 'Directions' },
      { href: '/basics/personal-pronouns', label: 'Personal Pronouns' },
      {
        href: '/basics/demonstrative-pronouns',
        label: 'Demonstrative Pronouns',
      },
      {
        href: '/basics/interrogative-pronouns',
        label: 'Interrogative Pronouns',
      },
      { href: '/basics/basic-verbs', label: 'Basic Verbs' },
      { href: '/basics/adjectives', label: 'Adjectives' },
      { href: '/basics/useful-words', label: 'Useful Words' },
    ],
    intermediate: [
      { href: '/intermediate/kpt', label: 'KPT' },
      {
        href: '/intermediate/verbtypes-present',
        label: 'Verb Types and the Present Tense',
      },
      { href: '/intermediate/past-tense', label: 'Past Tense' },
      { href: '/intermediate/perfect-tense', label: 'Perfect Tense' },
      {
        href: '/intermediate/past-perfect-tense',
        label: 'Past Perfect Tense',
      },
      { href: '/intermediate/negatives', label: ' Negatives' },
      { href: '/intermediate/partitive', label: 'Partitive' },
      { href: '/intermediate/word-types', label: 'Word Types' },
      { href: '/intermediate/passive', label: 'Passive' },
      { href: '/intermediate/necessive', label: 'Necessive' },
      { href: '/intermediate/imperative', label: 'Imperative' },
      { href: '/intermediate/object', label: 'Object' },
      { href: '/intermediate/adverb', label: 'Adverb' },
    ],
    advanced: [
      { href: '/advanced/complex-grammar', label: 'Complex Grammar' },
      { href: '/advanced/conditional-mood', label: 'Conditional Mood' },
      { href: '/advanced/passive-voice', label: 'Passive Voice' },
      { href: '/advanced/idioms', label: 'Idioms' },
      { href: '/advanced/literature', label: 'Literature' },
      { href: '/advanced/business-finnish', label: 'Business Finnish' },
    ],
    puhekieli: [
      { href: '/puhekieli/pronunciation', label: 'Pronunciation' },
      {
        href: '/puhekieli/everyday-conversations',
        label: 'Everyday Conversations',
      },
      { href: '/puhekieli/informal-grammar', label: 'Informal Grammar' },
      { href: '/puhekieli/spoken-finnish', label: 'Puhekieli' },
    ],
  };

  return (
    <Navigation>
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <MobileLogoContainer>OPI SUOMEA</MobileLogoContainer>
        <BurgerContainer>
          <BurgerMenu onClick={toggleSidebar}>
            <span />
            <span />
            <span />
          </BurgerMenu>
        </BurgerContainer>
      </div>

      <Sidebar className={sidebarOpen ? 'sidebar-open' : 'sidebar-closed'}>
        <CloseButton onClick={toggleSidebar}>&times;</CloseButton>
        <div style={{ display: 'flex', flexDirection: 'row' }}>
          <SidebarLogoContainer>OPI SUOMEA</SidebarLogoContainer>
        </div>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: 10,
            color: '#002E83',
          }}
        >
          <Link
            href="/"
            onClick={closeSidebar}
            style={{ color: '#002e83', fontSize: '16px' }}
          >
            Home
          </Link>

          {/* Basics Dropdown in Sidebar */}
          <SidebarDropdown>
            <SidebarDropdownHeader
              onClick={() => toggleMobileDropdown('basics')}
            >
              The Basics {mobileDropdowns.basics ? '▴' : '▾'}
            </SidebarDropdownHeader>
            <SidebarDropdownContent
              className={mobileDropdowns.basics ? 'open' : 'closed'}
            >
              {dropdownContent.basics.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={closeSidebar}
                  style={{
                    paddingLeft: '20px',
                    display: 'block',
                    fontSize: '14px',
                    marginBottom: '8px',
                  }}
                >
                  {item.label}
                </Link>
              ))}
            </SidebarDropdownContent>
          </SidebarDropdown>

          {/* Intermediate Dropdown in Sidebar */}
          <SidebarDropdown>
            <SidebarDropdownHeader
              onClick={() => toggleMobileDropdown('intermediate')}
            >
              Intermediate {mobileDropdowns.intermediate ? '▴' : '▾'}
            </SidebarDropdownHeader>
            <SidebarDropdownContent
              className={mobileDropdowns.intermediate ? 'open' : 'closed'}
            >
              {dropdownContent.intermediate.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={closeSidebar}
                  style={{
                    paddingLeft: '20px',
                    display: 'block',
                    fontSize: '14px',
                    marginBottom: '8px',
                  }}
                >
                  {item.label}
                </Link>
              ))}
            </SidebarDropdownContent>
          </SidebarDropdown>

          {/* Advanced Dropdown in Sidebar */}
          <SidebarDropdown>
            <SidebarDropdownHeader
              onClick={() => toggleMobileDropdown('advanced')}
            >
              Advanced {mobileDropdowns.advanced ? '▴' : '▾'}
            </SidebarDropdownHeader>
            <SidebarDropdownContent
              className={mobileDropdowns.advanced ? 'open' : 'closed'}
            >
              {dropdownContent.advanced.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={closeSidebar}
                  style={{
                    paddingLeft: '20px',
                    display: 'block',
                    fontSize: '14px',
                    marginBottom: '8px',
                  }}
                >
                  {item.label}
                </Link>
              ))}
            </SidebarDropdownContent>
          </SidebarDropdown>

          {/* Spoken Finnish Dropdown in Sidebar */}
          <SidebarDropdown>
            <SidebarDropdownHeader
              onClick={() => toggleMobileDropdown('puhekieli')}
            >
              Spoken Finnish {mobileDropdowns.puhekieli ? '▴' : '▾'}
            </SidebarDropdownHeader>
            <SidebarDropdownContent
              className={mobileDropdowns.puhekieli ? 'open' : 'closed'}
            >
              {dropdownContent.puhekieli.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={closeSidebar}
                  style={{
                    paddingLeft: '20px',
                    display: 'block',
                    fontSize: '14px',
                    marginBottom: '8px',
                  }}
                >
                  {item.label}
                </Link>
              ))}
            </SidebarDropdownContent>
          </SidebarDropdown>
        </div>
      </Sidebar>

      <Backdrop
        className={sidebarOpen ? 'backdrop-open' : 'backdrop-closed'}
        onClick={closeSidebar}
      />

      <MenuContainer>
        <MenuLink href="/">Home</MenuLink>

        {/* Basics Dropdown */}
        <DropdownContainer
          onMouseEnter={() => handleDropdownEnter('basics')}
          onMouseLeave={handleDropdownLeave}
        >
          <DropdownTrigger>The Basics ▾</DropdownTrigger>
          {activeDropdown === 'basics' && (
            <DropdownMenu>
              {dropdownContent.basics.map((item) => (
                <DropdownItem key={item.href} href={item.href}>
                  {item.label}
                </DropdownItem>
              ))}
            </DropdownMenu>
          )}
        </DropdownContainer>

        {/* Intermediate Dropdown */}
        <DropdownContainer
          onMouseEnter={() => handleDropdownEnter('intermediate')}
          onMouseLeave={handleDropdownLeave}
        >
          <DropdownTrigger>Intermediate ▾</DropdownTrigger>
          {activeDropdown === 'intermediate' && (
            <DropdownMenu>
              {dropdownContent.intermediate.map((item) => (
                <DropdownItem key={item.href} href={item.href}>
                  {item.label}
                </DropdownItem>
              ))}
            </DropdownMenu>
          )}
        </DropdownContainer>

        {/* Advanced Dropdown */}
        <DropdownContainer
          onMouseEnter={() => handleDropdownEnter('advanced')}
          onMouseLeave={handleDropdownLeave}
        >
          <DropdownTrigger>Advanced ▾</DropdownTrigger>
          {activeDropdown === 'advanced' && (
            <DropdownMenu>
              {dropdownContent.advanced.map((item) => (
                <DropdownItem key={item.href} href={item.href}>
                  {item.label}
                </DropdownItem>
              ))}
            </DropdownMenu>
          )}
        </DropdownContainer>

        {/* Spoken Finnish Dropdown */}
        <DropdownContainer
          onMouseEnter={() => handleDropdownEnter('puhekieli')}
          onMouseLeave={handleDropdownLeave}
        >
          <DropdownTrigger>Spoken Finnish ▾</DropdownTrigger>
          {activeDropdown === 'puhekieli' && (
            <DropdownMenu>
              {dropdownContent.puhekieli.map((item) => (
                <DropdownItem key={item.href} href={item.href}>
                  {item.label}
                </DropdownItem>
              ))}
            </DropdownMenu>
          )}
        </DropdownContainer>
      </MenuContainer>
    </Navigation>
  );
};

export default Navbar;
