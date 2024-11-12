import { useState } from "react";
import styled from "styled-components";
import { FaStar } from "react-icons/fa";

const StyledStarGroup = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;
// Styled component for the star
const Star = styled(FaStar)`
  color: ${({ isFilled }) => (isFilled ? "var(--color-primary)" : "#e4e5e9")};
  cursor: pointer;
  transition: color 0.2s;
  font-size: 2rem;

  &:hover {
    color: var(--color-primary);
  }
`;

// Main rating component
const StarRating = ({ totalStars = 5, onRatingChange }) => {
  const [rating, setRating] = useState(0);

  const handleClick = (index) => {
    const newRating = index + 1;
    setRating(newRating);
    if (onRatingChange) {
      onRatingChange(newRating);
    }
  };

  return (
    <StyledStarGroup>
      {[...Array(totalStars)].map((_, index) => (
        <Star
          key={index}
          isFilled={index < rating}
          onClick={() => handleClick(index)}
        />
      ))}
    </StyledStarGroup>
  );
};

export default StarRating;
