import styled from "styled-components";

const StyledFilters = styled("div")`
  font-size: 13px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem;
  background: var(--color-grey-50);
  color: var(--color-grey-100);

  .sort {
    flex-basis: 20%;
    justify-content: flex-end;

    select {
      width: 50%;
    }
  }
`;
const FiltersCategoryBar = () => {
  return (
    <StyledFilters>
      <div className="counters">
        1-12 out of 2536 results found in 0.009 seconds
      </div>
      <div className="d-flex align-items-center gap-2">
        <label htmlFor="">
          <strong>Express Delivery: </strong>
        </label>
        <input type="checkbox" />
      </div>
      <div className="sort d-flex align-items-center gap-1">
        <strong>Sort by</strong>
        <select>
          <option value="">price</option>
          <option value="">sales</option>
          <option value="">test</option>
        </select>
      </div>
    </StyledFilters>
  );
};

export default FiltersCategoryBar;
