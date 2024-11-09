import styled from "styled-components";
import CategoryTitle from "./CategoryTitle.jsx";
import SliderComponent from "./SliderComponent.jsx";
import CategoryCardItem from "./CategoryCardItem.jsx";
import useShowSlider from "../hooks/useShowSlider.js";

const items = [
  { id: 1, title: "grocery" },
  { id: 2, title: "grocery" },
  { id: 3, title: "grocery" },
  { id: 4, title: "grocery" },

  // Add or remove items here as needed
];

const StyledCard = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding-inline: 15px;
`;

const StyleCardList = styled.div`
  display: flex;
  justify-content: center;
  gap: 30px;
  flex-wrap: wrap;
`;

function CategorySection() {
  const settings = {
    slidesToShow: 7,
    slidesToScroll: 4,
    centerPadding: "15px",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          className: "slider-phone",
        },
      },
    ],
  };

  const { containerRef, useSlider } = useShowSlider(items);
  return (
    <StyledCard ref={containerRef}>
      <CategoryTitle />
      {useSlider ? (
        <SliderComponent settings={settings}>
          {items.map((item) => (
            <CategoryCardItem key={item.id} />
          ))}
        </SliderComponent>
      ) : (
        <StyleCardList>
          {items.map((item) => (
            <CategoryCardItem key={item.id} />
          ))}
        </StyleCardList>
      )}
    </StyledCard>
  );
}

export default CategorySection;
