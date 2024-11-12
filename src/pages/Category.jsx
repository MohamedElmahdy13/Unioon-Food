import { Col, Container, Row } from "reactstrap";
import Filters from "../ui/Filters.jsx";
import FiltersCategoryBar from "../ui/FiltersCategoryBar.jsx";
import CategoryProducts from "../ui/CategoryProducts.jsx";
import NavTabs from "../ui/NavTabs.jsx";
import { StyledTitle } from "./../ui/headers";

const Category = () => {
  return (
    <Container fluid>
      <Row>
        <Col sm={12}>
          <NavTabs />
        </Col>
        <Col sm={12}>
          <StyledTitle>Best Deals On Fresh Food</StyledTitle>
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
