import styled from "styled-components";
import SliderComponent from "./SliderComponent.jsx";
import CategoryCardItem from "./CategoryCardItem.jsx";

const StyleCardList = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  justify-content: end;
`;

const CardList = ({ items, useSlider }) => {
  const settings = {
    slidesToShow: 7,
    slidesToScroll: 4,
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

  if (useSlider > 7)
    return (
      <SliderComponent settings={settings}>
        <CategoryCardItem />
        <CategoryCardItem />
        <CategoryCardItem />
        <CategoryCardItem />
        <CategoryCardItem />
        <CategoryCardItem />
        <CategoryCardItem />
        <CategoryCardItem />
      </SliderComponent>
    );

  if (useSlider >= 7)
    return (
      <StyleCardList>
        <CategoryCardItem />
        <CategoryCardItem />
        <CategoryCardItem />
      </StyleCardList>
    );
};

export default CardList;
