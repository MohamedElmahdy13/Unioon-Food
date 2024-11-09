import { Col, Row } from "reactstrap";

import styled from "styled-components";
import SliderComponent from "./SliderComponent.jsx";

const StyledSItem = styled.div`
  img {
    width: 100%;
  }
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

  return (
    <Row className={"home-slider"}>
      <Col xl={12}>
        <SliderComponent settings={settings}>
          <StyledSItem>
            <img src="../../public/images/Zayed_Rashid_905x310.webp" alt="" />
          </StyledSItem>{" "}
          <StyledSItem>
            <img src="../../public/images/Zayed_Rashid_905x310.webp" alt="" />
          </StyledSItem>{" "}
          <StyledSItem>
            <img src="../../public/images/Zayed_Rashid_905x310.webp" alt="" />
          </StyledSItem>
        </SliderComponent>
      </Col>
    </Row>
  );
};

export default HomeSlider;
