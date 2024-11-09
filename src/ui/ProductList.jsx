import styled from "styled-components";
import useShowSlider from "../hooks/useShowSlider.js";
import SliderComponent from "./SliderComponent.jsx";
import ProductCard from "./ProductCard.jsx";

const StyledCard = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding-inline: 15px;
`;
const StyledProductList = styled.div`
  display: flex;
  justify-content: center;
  gap: 30px;
  flex-wrap: wrap;
`;
const products = [
  {
    name: "Vileda Dustpan Set / Floor Cleaning Dust pan with Brush",
    price: "AED 17.95",
    imageUrl: "../../public/images/4003790703591_rd.webp",
    isExpressDelivery: false,
  },
  {
    name: "Pril Multi Power Dishwashing Liquid - 500 ml",
    price: "AED 9.00",
    imageUrl: "../../public/images/4003790703591_rd.webp",
    isExpressDelivery: true,
  },
  {
    name: "DAC Lavender Super Disinfection - 3 l",
    price: "AED 39.50",
    imageUrl: "../../public/images/4003790703591_rd.webp",
    isExpressDelivery: true,
  },
  {
    name: "Vimto Fruit Cordial - 710 ml",
    price: "AED 11.95",
    imageUrl: "../../public/images/4003790703591_rd.webp",
    isExpressDelivery: false,
  },
  {
    name: "Olay Total Effects 7inOne Anti-Ageing Day Moisturiser - 50 ml",
    price: "AED 67.00",
    imageUrl: "../../public/images/4003790703591_rd.webp",
    isExpressDelivery: true,
  },
  {
    name: "Olay Total Effects 7inOne Anti-Ageing Day Moisturiser - 50 ml",
    price: "AED 67.00",
    imageUrl: "../../public/images/4003790703591_rd.webp",
    isExpressDelivery: true,
  },
  {
    name: "Olay Total Effects 7inOne Anti-Ageing Day Moisturiser - 50 ml",
    price: "AED 67.00",
    imageUrl: "../../public/images/4003790703591_rd.webp",
    isExpressDelivery: true,
  },
  {
    name: "Olay Total Effects 7inOne Anti-Ageing Day Moisturiser - 50 ml",
    price: "AED 67.00",
    imageUrl: "../../public/images/4003790703591_rd.webp",
    isExpressDelivery: true,
  },
  {
    name: "Olay Total Effects 7inOne Anti-Ageing Day Moisturiser - 50 ml",
    price: "AED 67.00",
    imageUrl: "../../public/images/4003790703591_rd.webp",
    isExpressDelivery: true,
  },
  {
    name: "Olay Total Effects 7inOne Anti-Ageing Day Moisturiser - 50 ml",
    price: "AED 67.00",
    imageUrl: "../../public/images/4003790703591_rd.webp",
    isExpressDelivery: true,
  },

  {
    name: "Vileda Dustpan Set / Floor Cleaning Dust pan with Brush",
    price: "AED 17.95",
    imageUrl: "../../public/images/4003790703591_rd.webp",
    isExpressDelivery: false,
  },
  {
    name: "Pril Multi Power Dishwashing Liquid - 500 ml",
    price: "AED 9.00",
    imageUrl: "../../public/images/4003790703591_rd.webp",
    isExpressDelivery: true,
  },
  {
    name: "DAC Lavender Super Disinfection - 3 l",
    price: "AED 39.50",
    imageUrl: "../../public/images/4003790703591_rd.webp",
    isExpressDelivery: true,
  },
  {
    name: "Vimto Fruit Cordial - 710 ml",
    price: "AED 11.95",
    imageUrl: "../../public/images/4003790703591_rd.webp",
    isExpressDelivery: false,
  },
  {
    name: "Olay Total Effects 7inOne Anti-Ageing Day Moisturiser - 50 ml",
    price: "AED 67.00",
    imageUrl: "../../public/images/4003790703591_rd.webp",
    isExpressDelivery: true,
  },
  {
    name: "Olay Total Effects 7inOne Anti-Ageing Day Moisturiser - 50 ml",
    price: "AED 67.00",
    imageUrl: "../../public/images/4003790703591_rd.webp",
    isExpressDelivery: true,
  },
  {
    name: "Olay Total Effects 7inOne Anti-Ageing Day Moisturiser - 50 ml",
    price: "AED 67.00",
    imageUrl: "../../public/images/4003790703591_rd.webp",
    isExpressDelivery: true,
  },
  {
    name: "Olay Total Effects 7inOne Anti-Ageing Day Moisturiser - 50 ml",
    price: "AED 67.00",
    imageUrl: "../../public/images/4003790703591_rd.webp",
    isExpressDelivery: true,
  },
  {
    name: "Olay Total Effects 7inOne Anti-Ageing Day Moisturiser - 50 ml",
    price: "AED 67.00",
    imageUrl: "../../public/images/4003790703591_rd.webp",
    isExpressDelivery: true,
  },
  {
    name: "Olay Total Effects 7inOne Anti-Ageing Day Moisturiser - 50 ml",
    price: "AED 67.00",
    imageUrl: "../../public/images/4003790703591_rd.webp",
    isExpressDelivery: true,
  },
];

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
        slidesToShow: 2,
        slidesToScroll: 2,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        className: "slider-phone",
      },
    },
  ],
};

const ProductList = () => {
  const { containerRef, useSlider } = useShowSlider(products);

  return (
    <StyledCard ref={containerRef}>
      {useSlider ? (
        <SliderComponent settings={settings}>
          {products.map((item) => (
            <ProductCard key={item.name} />
          ))}
        </SliderComponent>
      ) : (
        <StyledProductList>
          {products.map((item) => (
            <ProductCard key={item.name} />
          ))}
        </StyledProductList>
      )}
    </StyledCard>
  );
};

export default ProductList;
