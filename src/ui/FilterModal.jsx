import React, { useState } from "react";
import { Button, Modal, ModalHeader, ModalBody } from "reactstrap";
import styled from "styled-components";
import { FaTimesCircle } from "react-icons/fa"; // Custom close icon

const StyledModal = styled.div`
  background: tomato;

  .modal-heading {
    background: var(--color-grey-100);
  }
`;
// Styled component for the modal content
const ModalContent = styled.div`
  padding: 1rem;
  font-size: 13px;

  .category-list {
    display: grid;
    grid-template-rows: repeat(5, auto); /* 5 items per column */
    grid-auto-flow: column; /* Automatically create columns */
    gap: 1rem;

    overflow-x: auto; /* Enable horizontal scrolling */
    overflow-y: hidden; /* Disable vertical scrolling */
    max-width: 100%;
    padding-bottom: 1rem; /* Avoid scrollbar overlap */
  }

  .category-item {
    display: flex;
    align-items: center;
    width: 200px;
    gap: 10px;
    transition: all 400ms ease-in-out;

    label {
      cursor: pointer;
    }

    &:hover {
      color: var(--color-primary);
    }
  }

  .apply-button {
    margin-top: 1rem;
    width: 100%;
    background-color: var(--color-primary);
    color: white;
    border: none;
  }

  .clear-button {
    margin-top: 1rem;
    color: #0d9bbd;
    cursor: pointer;
  }
`;

function FilterModal({ renderTrigger }) {
  // Internal state for managing open/close within the modal component
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  const categories = [
    "Spread Cheese",
    "Yoghurt",
    "Breads",
    "Variety Cheese",
    "Slices & Sticks Cheese",
    "Fresh Fruits",
    "Fresh Vegetables",
    "Chilled Processed Food",
    "Cakes",
    "Eggs",
    "Milk",
    "Laban & Lassi",
    "Fresh Beef",
    "Labneh",
    "Pickles",
    "Crunchy Delights",
    "Breads",
    "Variety Cheese",
    "Slices & Sticks Cheese",
    "Fresh Fruits",
    "Fresh Vegetables",
    "Chilled Processed Food",
    "Cakes",
    "Eggs",
    "Milk",
    "Laban & Lassi",
    "Fresh Beef",
    "Labneh",
    "Pickles",
    "Crunchy Delights",
    "Labneh",
    "Pickles",
    "Crunchy Delights",
    "Breads",
    "Variety Cheese",
    "Slices & Sticks Cheese",
    "Fresh Fruits",
    "Fresh Vegetables",
    "Chilled Processed Food",
    "Cakes",
    "Eggs",
    "Milk",
    "Laban & Lassi",
    "Fresh Beef",
    "Labneh",
    "Pickles",
    "Crunchy Delights",
    "Labneh",
    "Pickles",
    "Crunchy Delights",
    "Breads",
    "Variety Cheese",
    "Slices & Sticks Cheese",
    "Fresh Fruits",
    "Fresh Vegetables",
    "Chilled Processed Food",
    "Cakes",
    "Eggs",
    "Milk",
    "Laban & Lassi",
    "Fresh Beef",
    "Labneh",
    "Pickles",
    "Crunchy Delights",
    // Add more categories as needed
  ];

  return (
    <>
      {renderTrigger(toggle)}
      <StyledModal>
        {/* Render the trigger element, passing the toggle function */}

        <Modal isOpen={isOpen} toggle={toggle} size="lg">
          <ModalHeader
            toggle={toggle}
            className="d-flex justify-content-between align-items-center modal-heading"
            close={
              <FaTimesCircle
                size="1.5rem"
                style={{ cursor: "pointer", color: "#0d9bbd" }}
                onClick={toggle}
              />
            }
          >
            <input
              type="text"
              placeholder="Search Categories"
              style={{ width: "100%", padding: "8px", marginBottom: "1rem" }}
            />
          </ModalHeader>
          <ModalBody>
            <ModalContent>
              <div className="category-list">
                {categories.map((category, index) => (
                  <div className="category-item" key={index}>
                    <input type="checkbox" id={`category-${index}`} />
                    <label htmlFor={`category-${index}`}>{category}</label>
                  </div>
                ))}
              </div>

              <div className="clear-button">Clear</div>
              <Button className="apply-button" onClick={toggle}>
                Apply Filter
              </Button>
            </ModalContent>
          </ModalBody>
        </Modal>
      </StyledModal>
    </>
  );
}

export default FilterModal;
