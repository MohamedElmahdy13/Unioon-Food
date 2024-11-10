import { Col, Container, Row } from "reactstrap";
import styled from "styled-components";
import Filters from "../ui/Filters.jsx";
import FiltersCategoryBar from "../ui/FiltersCategoryBar.jsx";
import CategoryProducts from "../ui/CategoryProducts.jsx";
import NavTabs from "../ui/NavTabs.jsx";

const StyledCategoryTitle = styled.h1`
  font-size: 20px;
  font-weight: 700;
`;

const Category = () => {
  return (
    <Container fluid>
      <Row>
        <Col sm={12}>
          <NavTabs />
        </Col>
        <Col sm={12}>
          <StyledCategoryTitle>Best Deals On Fresh Food</StyledCategoryTitle>
        </Col>
        <Col xl={3}>
          <Filters />
        </Col>
        <Col xl={9}>
          <Row className="gy-5">
            <Col sm={12}>
              <FiltersCategoryBar />
            </Col>
            <Col sm={12}>
              <CategoryProducts />
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default Category;
