import { useState, useEffect, useRef } from "react";
import styled, { css } from "styled-components";
import { BiSolidUserCircle } from "react-icons/bi";
import { FaAngleDown } from "react-icons/fa6";

const DropdownWrapper = styled.div`
  position: relative;
  display: inline-block;
`;

const DropdownButton = styled.button`
  padding: 1rem 2rem;
  font-size: 1.4rem;
  color: var(--text-color);
  border: none;
  cursor: pointer;
  outline: none;
  background-color: var(--color-grey-0);
  font-weight: 600;

  display: flex;
  align-items: center;
  gap: 0.5rem;
  transition: all 400ms ease-in-out;

  .arrow-icon,
  span {
    transition: all 400ms ease-in-out;
  }

  &:hover span,
  .arrow-icon {
    color: var(--color-primary);
  }

  &:hover .profile-icon {
    color: var(--color-text);
  }

  .arrow-icon--down {
    transform: rotate(-180deg);
  }

  .profile-icon {
    font-size: 3rem;
    color: var(--color-primary);
    transition: all 400ms ease-in-out;
  }
`;

const DropdownMenu = styled.div`
  position: absolute;
  z-index: 1000;
  min-width: 200px;
  background-color: white;
  border: 1px solid #ddd;
  border-top: 0.3rem solid var(--color-primary);
  border-radius: 5px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  opacity: 0;
  transform: scaleY(0);
  transform-origin: top;
  transition: all 0.3s ease-in-out;

  ${({ isOpen }) =>
    isOpen &&
    css`
      opacity: 1;
      transform: scaleY(1);
    `}

  ${({ adjustedStyles }) => adjustedStyles}
`;

const DropdownItem = styled.div`
  padding: 10px 15px;
  font-size: 14px;
  color: #333;
  cursor: pointer;

  &:hover {
    background-color: #f8f9fa;
  }
`;

const Dropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [adjustedStyles, setAdjustedStyles] = useState({});
  const dropdownRef = useRef(null);
  const menuRef = useRef(null);

  const toggleDropdown = (e) => {
    e.stopPropagation(); // Prevent event propagation
    adjustDropdownPosition(e); // Adjust position dynamically
    setIsOpen((prev) => !prev);
  };

  const closeDropdown = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  const adjustDropdownPosition = (e) => {
    if (menuRef.current) {
      const buttonRect = e.target.closest("button").getBoundingClientRect();
      const headerRect = document
        .querySelector(".main-header")
        .getBoundingClientRect();
      const isRTL =
        getComputedStyle(document.documentElement).direction === "rtl";

      const newPosition = isRTL
        ? {
            x: 0,
          }
        : {
            x: 0,
          };

      setAdjustedStyles(css`
        left: ${newPosition.x}px;
        top: ${newPosition.y}px;
      `);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", closeDropdown);
    return () => {
      document.removeEventListener("mousedown", closeDropdown);
    };
  }, []);

  return (
    <DropdownWrapper ref={dropdownRef} className={"dropdown-wrapper"}>
      <DropdownButton onClick={toggleDropdown}>
        <BiSolidUserCircle className={"profile-icon"} />
        <span>Login & Register</span>
        <FaAngleDown className={`arrow-icon ${isOpen && "arrow-icon--down"}`} />
      </DropdownButton>
      <DropdownMenu
        ref={menuRef}
        isOpen={isOpen}
        adjustedStyles={adjustedStyles}
      >
        <DropdownItem>Option 1</DropdownItem>
        <DropdownItem>Option 2</DropdownItem>
        <DropdownItem>Option 3</DropdownItem>
      </DropdownMenu>
    </DropdownWrapper>
  );
};

export default Dropdown;
