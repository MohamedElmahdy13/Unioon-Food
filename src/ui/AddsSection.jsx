import { Col, Row } from "reactstrap";
import styled from "styled-components";

const StyledAdd = styled.div`
  padding-inline: 15px;
  @media only screen and (max-width: 500px) {
    padding-inline: 6px;
  }
`;
const AddsSection = () => {
  return (
    <Row className="gx-0 gy-3">
      <Col xl={6} sm={12}>
        <StyledAdd>
          <img src="../../public/images/Tamayaz.webp" alt="" />
        </StyledAdd>
      </Col>
      <Col xl={6} sm={12}>
        <StyledAdd>
          <img src="../../public/images/click-collect.webp" alt="" />
        </StyledAdd>
      </Col>
    </Row>
  );
};

export default AddsSection;
