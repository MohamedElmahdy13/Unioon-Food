import { useState } from "react";
import styled from "styled-components";

const StyledLanguage = styled.button`
  display: flex;
  align-items: center;
  gap: 1rem;
  border: none;
  background: transparent;
  cursor: pointer;
`;

const StyledImage = styled.img`
  object-fit: cover;
  width: 24px;
  height: 16px;
`;

const StyledText = styled.span`
  transition: all 400ms ease-in-out;
  font-weight: 600;

  &:hover {
    color: var(--color-primary);
  }
`;

const Language = () => {
  const [isArabic, setIsArabic] = useState(false);

  const toggleLanguage = () => {
    setIsArabic((prev) => !prev);

    // Update the direction and language of the document
    document.documentElement.lang = isArabic ? "en" : "ar";
    document.documentElement.dir = isArabic ? "ltr" : "rtl";
  };

  return (
    <StyledLanguage onClick={toggleLanguage}>
      <StyledImage
        src={
          isArabic
            ? "../../public/images/Flag_of_the_United_Kingdom.svg"
            : "../../public/images/Flag_of_the_United_Arab_Emirates.svg"
        }
        alt={isArabic ? "English Flag" : "Arabic Flag"}
      />
      <StyledText>{isArabic ? "English" : "العربية"}</StyledText>
    </StyledLanguage>
  );
};

export default Language;
