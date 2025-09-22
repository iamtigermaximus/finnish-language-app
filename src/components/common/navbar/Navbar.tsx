"use client";

import React, { useState } from "react";
import Link from "next/link";
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
} from "./Navbar.styles";

const Navbar = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [mobileDropdowns, setMobileDropdowns] = useState({
    basics: false,
    intermediate: false,
    advanced: false,
    spokenFinnish: false,
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

  const handleDropdownItemClick = () => {
    setActiveDropdown(null); // Close dropdown when an item is clicked
  };

  const toggleMobileDropdown = (dropdownName: keyof typeof mobileDropdowns) => {
    setMobileDropdowns((prev) => {
      // Create a new state object with all dropdowns closed
      const newState = {
        basics: false,
        intermediate: false,
        advanced: false,
        spokenFinnish: false,
      };

      // If the clicked dropdown wasn't already open, open it
      if (!prev[dropdownName]) {
        newState[dropdownName] = true;
      }

      return newState;
    });
  };

  // Dropdown content for each section
  const dropdownContent = {
    basics: [
      { href: "/basics/greetings", label: "Greetings" },
      { href: "/basics/numbers-colors", label: "Numbers and Colors" },
      { href: "/basics/days-months", label: "Days and Months" },
      { href: "/basics/time", label: "Time" },
      { href: "/basics/directions", label: "Directions" },
      { href: "/basics/personal-pronouns", label: "Personal Pronouns" },
      {
        href: "/basics/demonstrative-pronouns",
        label: "Demonstrative Pronouns",
      },
      {
        href: "/basics/interrogative-pronouns",
        label: "Interrogative Pronouns",
      },
      { href: "/basics/basic-verbs", label: "Basic Verbs" },
      { href: "/basics/adjectives", label: "Adjectives" },
      { href: "/basics/useful-words", label: "Useful Words" },
    ],
    intermediate: [
      { href: "/intermediate/kpt", label: "KPT" },
      {
        href: "/intermediate/verbtypes-present",
        label: "Verb Types and the Present Tense",
      },
      { href: "/intermediate/past-tense", label: "Past Tense" },
      { href: "/intermediate/perfect-tense", label: "Perfect Tense" },
      {
        href: "/intermediate/past-perfect-tense",
        label: "Past Perfect Tense",
      },
      { href: "/intermediate/partitive", label: "Partitive" },
      { href: "/intermediate/word-types", label: "Word Types" },
      { href: "/intermediate/passive", label: "Passive" },
      { href: "/intermediate/necessive", label: "Necessive" },
      { href: "/intermediate/imperative", label: "Imperative" },
      { href: "/intermediate/object", label: "Object" },
      { href: "/intermediate/adverb", label: "Adverb" },
      { href: "/intermediate/case-usage-helper", label: "Case Usage Helper" },
      {
        href: "/intermediate/verb-conjugator",
        label: "Verb Conjugator Helper",
      },
      {
        href: "/intermediate/connector-words",
        label: "Connector Words Helper",
      },
    ],
    advanced: [
      { href: "/advanced/noun-pluralization", label: "Noun Pluralization" },
      {
        href: "/advanced/noun-partitive-pluralization",
        label: "Noun Partitive Pluralization",
      },
      {
        href: "/advanced/noun-genetive-pluralization",
        label: "Noun Genetive Pluralization",
      },
      {
        href: "/advanced/noun-illative-pluralization",
        label: "Noun Illative Pluralization",
      },
      { href: "/advanced/noun-form-verb", label: "Noun Form Of Verb" },
      { href: "/advanced/conditional-tense", label: "Conditional Tense" },
      { href: "/advanced/verb-rections", label: "Verb Rections" },
      { href: "/advanced/idioms", label: "Idioms" },
      { href: "/advanced/business-finnish", label: "Business Finnish" },
    ],
    spokenFinnish: [
      {
        href: "/spoken-finnish/everyday-conversations",
        label: "Everyday Conversations",
      },
      {
        href: "/spoken-finnish/informal-grammar",
        label: "Informal Grammar",
      },
      {
        href: "/spoken-finnish/puhekieli",
        label: "Puhekieli",
      },
      {
        href: "/spoken-finnish/sentence-analyzer",
        label: "Sentence Construction Helper",
      },
    ],
  };

  return (
    <Navigation>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <MobileLogoContainer>
          <Link href="/" style={{ textDecoration: "none", color: "inherit" }}>
            OPI SUOMEA
          </Link>
        </MobileLogoContainer>
        <BurgerContainer>
          <BurgerMenu onClick={toggleSidebar}>
            <span />
            <span />
            <span />
          </BurgerMenu>
        </BurgerContainer>
      </div>

      <Sidebar className={sidebarOpen ? "sidebar-open" : "sidebar-closed"}>
        <CloseButton onClick={toggleSidebar}>&times;</CloseButton>
        <div style={{ display: "flex", flexDirection: "row" }}>
          <SidebarLogoContainer>
            <Link href="/" style={{ textDecoration: "none", color: "inherit" }}>
              OPI SUOMEA
            </Link>
          </SidebarLogoContainer>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 10,
            color: "#002E83",
          }}
        >
          <Link
            href="/"
            onClick={closeSidebar}
            style={{ color: "#002e83", fontSize: "16px" }}
          >
            Home
          </Link>

          {/* Basics Dropdown in Sidebar */}
          <SidebarDropdown>
            <SidebarDropdownHeader
              onClick={() => toggleMobileDropdown("basics")}
            >
              The Basics {mobileDropdowns.basics ? "▴" : "▾"}
            </SidebarDropdownHeader>
            <SidebarDropdownContent
              className={mobileDropdowns.basics ? "open" : "closed"}
            >
              {dropdownContent.basics.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={closeSidebar}
                  style={{
                    paddingLeft: "20px",
                    display: "block",
                    fontSize: "14px",
                    marginBottom: "8px",
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
              onClick={() => toggleMobileDropdown("intermediate")}
            >
              Intermediate {mobileDropdowns.intermediate ? "▴" : "▾"}
            </SidebarDropdownHeader>
            <SidebarDropdownContent
              className={mobileDropdowns.intermediate ? "open" : "closed"}
            >
              {dropdownContent.intermediate.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={closeSidebar}
                  style={{
                    paddingLeft: "20px",
                    display: "block",
                    fontSize: "14px",
                    marginBottom: "8px",
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
              onClick={() => toggleMobileDropdown("advanced")}
            >
              Advanced {mobileDropdowns.advanced ? "▴" : "▾"}
            </SidebarDropdownHeader>
            <SidebarDropdownContent
              className={mobileDropdowns.advanced ? "open" : "closed"}
            >
              {dropdownContent.advanced.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={closeSidebar}
                  style={{
                    paddingLeft: "20px",
                    display: "block",
                    fontSize: "14px",
                    marginBottom: "8px",
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
              onClick={() => toggleMobileDropdown("spokenFinnish")}
            >
              Spoken Finnish {mobileDropdowns.spokenFinnish ? "▴" : "▾"}
            </SidebarDropdownHeader>
            <SidebarDropdownContent
              className={mobileDropdowns.spokenFinnish ? "open" : "closed"}
            >
              {dropdownContent.spokenFinnish.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={closeSidebar}
                  style={{
                    paddingLeft: "20px",
                    display: "block",
                    fontSize: "14px",
                    marginBottom: "8px",
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
        className={sidebarOpen ? "backdrop-open" : "backdrop-closed"}
        onClick={closeSidebar}
      />

      <MenuContainer>
        <MenuLink href="/">Home</MenuLink>

        {/* Basics Dropdown */}
        <DropdownContainer
          onMouseEnter={() => handleDropdownEnter("basics")}
          onMouseLeave={handleDropdownLeave}
        >
          <DropdownTrigger>The Basics ▾</DropdownTrigger>
          {activeDropdown === "basics" && (
            <DropdownMenu>
              {dropdownContent.basics.map((item) => (
                <DropdownItem
                  key={item.href}
                  href={item.href}
                  onClick={handleDropdownItemClick}
                >
                  {item.label}
                </DropdownItem>
              ))}
            </DropdownMenu>
          )}
        </DropdownContainer>

        {/* Intermediate Dropdown */}
        <DropdownContainer
          onMouseEnter={() => handleDropdownEnter("intermediate")}
          onMouseLeave={handleDropdownLeave}
        >
          <DropdownTrigger>Intermediate ▾</DropdownTrigger>
          {activeDropdown === "intermediate" && (
            <DropdownMenu>
              {dropdownContent.intermediate.map((item) => (
                <DropdownItem
                  key={item.href}
                  href={item.href}
                  onClick={handleDropdownItemClick}
                >
                  {item.label}
                </DropdownItem>
              ))}
            </DropdownMenu>
          )}
        </DropdownContainer>

        {/* Advanced Dropdown */}
        <DropdownContainer
          onMouseEnter={() => handleDropdownEnter("advanced")}
          onMouseLeave={handleDropdownLeave}
        >
          <DropdownTrigger>Advanced ▾</DropdownTrigger>
          {activeDropdown === "advanced" && (
            <DropdownMenu>
              {dropdownContent.advanced.map((item) => (
                <DropdownItem
                  key={item.href}
                  href={item.href}
                  onClick={handleDropdownItemClick}
                >
                  {item.label}
                </DropdownItem>
              ))}
            </DropdownMenu>
          )}
        </DropdownContainer>

        {/* Spoken Finnish Dropdown */}
        <DropdownContainer
          onMouseEnter={() => handleDropdownEnter("spokenFinnish")}
          onMouseLeave={handleDropdownLeave}
        >
          <DropdownTrigger>Spoken Finnish ▾</DropdownTrigger>
          {activeDropdown === "spokenFinnish" && (
            <DropdownMenu>
              {dropdownContent.spokenFinnish.map((item) => (
                <DropdownItem
                  key={item.href}
                  href={item.href}
                  onClick={handleDropdownItemClick}
                >
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
