import styled from "styled-components";
import SliderComponent from "./SliderComponent.jsx";
import { Col, Row } from "reactstrap";

const StyledSItem = styled.div`
  img {
    width: 100%;
  }
`;

const SliderComponentWrapper = styled.div`
  direction: ${({ dir }) => dir}; /* Dynamically set direction */
  //overflow: hidden;
`;

const HomeSlider = () => {
  const settings = {
    slidesToShow: 2,
    slidesToScroll: 1,
    swipeToSlide: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const dir = document.documentElement.dir || "ltr"; // Detect current direction

  return (
    <Row className={"home-slider"}>
      <Col xl={12}>
        <SliderComponentWrapper dir={dir}>
          <SliderComponent settings={settings}>
            <StyledSItem>
              <img src="../../public/images/Zayed_Rashid_905x310.webp" alt="" />
            </StyledSItem>
            <StyledSItem>
              <img src="../../public/images/Zayed_Rashid_905x310.webp" alt="" />
            </StyledSItem>
            <StyledSItem>
              <img src="../../public/images/Zayed_Rashid_905x310.webp" alt="" />
            </StyledSItem>
          </SliderComponent>
        </SliderComponentWrapper>
      </Col>
    </Row>
  );
};

export default HomeSlider;
