import styled from "styled-components";
import Filter from "./Filter.jsx";
import { useState } from "react";
import FilterModal from "./FilterModal.jsx";

const StyledFiltersContainer = styled.div`
  h4 {
    background: var(--color-primary);
    color: var(--color-grey-0);
    padding: 12px;
    border-start-start-radius: 15px;
    border-start-end-radius: 15px;
    font-size: 14px;
    font-weight: 700;
    margin-bottom: 0;
  }

  .seeMore {
    border: none;
    font-size: 14px;
    background: transparent;
    text-align: start;
    margin: 15px;
    transition: all 400ms ease-in-out;

    &:hover {
      color: var(--color-primary);
    }
  }
`;
const StyledFilters = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 20px 10px;
  border: 1px solid var(--color-primary);
  border-top: none;
`;

const Filters = () => {
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
  ];

  return (
    <StyledFiltersContainer>
      <h4>Filter Title</h4>
      <StyledFilters>
        {categories.map((category) => (
          <Filter key={category} item={category} />
        ))}
        <FilterModal
          renderTrigger={(toggle) => (
            <button onClick={toggle} className={"seeMore"}>
              see more
            </button>
          )}
        />
      </StyledFilters>
    </StyledFiltersContainer>
  );
};

export default Filters;
