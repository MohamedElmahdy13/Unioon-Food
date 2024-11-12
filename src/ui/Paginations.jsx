import { Pagination, PaginationItem, PaginationLink } from "reactstrap";
import styled from "styled-components";
import { useSearchParams } from "react-router-dom";

// Styled component for pagination container
const StyledPagination = styled(Pagination)`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f5f5f5; /* Light grey background */
  padding: 15px 0;
  border-radius: 4px;
  .pagination {
    gap: 13px;
    margin: 0;

    button.page-link {
      border: none;
      border-radius: 50%;

      display: flex;
      align-items: center;
      justify-content: center;

      margin: 0;
      width: 30px;
      height: 30px;
    }
  }
`;

// Styled component for pagination items
const StyledPaginationItem = styled(PaginationItem)`
  &.active > .page-link {
    background-color: #00c3ff; /* Active page background color */
    color: white;
  }
`;

// Styled component for pagination links
const StyledPaginationLink = styled(PaginationLink)`
  background-color: black;
  color: white;
  border: none;
  border-radius: 50%;

  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 13px;
  margin: 0;
  width: 30px;
  height: 30px;
  cursor: pointer;

  &:hover {
    background-color: #333; /* Darker hover effect */
    color: #fff;
  }

  &[disabled] {
    background-color: #ccc;
    cursor: not-allowed;
  }
`;

function Paginations({ count = 100 }) {
  const PAGE_SIZE = 10;
  const maxVisibleButtons = 5;

  const [searchParams, setSearchParams] = useSearchParams();
  const currentPage = !searchParams.get("page") ? 1 : +searchParams.get("page");
  const pagesCount = Math.ceil(count / PAGE_SIZE);

  // Calculate the visible range of pages
  const startPage = Math.max(
    1,
    Math.min(currentPage - 2, pagesCount - maxVisibleButtons + 1),
  );
  const endPage = Math.min(pagesCount, startPage + maxVisibleButtons - 1);

  const handleNext = () => {
    if (currentPage < pagesCount) {
      searchParams.set("page", currentPage + 1);
      setSearchParams(searchParams);
    }
  };

  const handlePrev = () => {
    if (currentPage > 1) {
      searchParams.set("page", currentPage - 1);
      setSearchParams(searchParams);
    }
  };

  const handlePageClick = (page) => {
    searchParams.set("page", page);
    setSearchParams(searchParams);
  };

  if (pagesCount <= 1) return null;

  return (
    <StyledPagination>
      <StyledPaginationItem disabled={currentPage === 1}>
        <StyledPaginationLink previous onClick={handlePrev}>
          &lt;
        </StyledPaginationLink>
      </StyledPaginationItem>
      {Array.from({ length: endPage - startPage + 1 }, (_, i) => {
        const page = startPage + i;
        return (
          <StyledPaginationItem key={page} active={page === currentPage}>
            <StyledPaginationLink onClick={() => handlePageClick(page)}>
              {page}
            </StyledPaginationLink>
          </StyledPaginationItem>
        );
      })}
      <StyledPaginationItem disabled={currentPage === pagesCount}>
        <StyledPaginationLink next onClick={handleNext}>
          &gt;
        </StyledPaginationLink>
      </StyledPaginationItem>
    </StyledPagination>
  );
}

export default Paginations;
