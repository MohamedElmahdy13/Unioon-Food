import styled from "styled-components";
import { Col, Row } from "reactstrap";
import ProductCard from "./ProductCard.jsx";

const StyledCategoryProducts = styled.div``;

const CategoryProducts = () => {
  return (
    <StyledCategoryProducts>
      <Row className={"gx-4 gy-xl-0 gy-sm-4"}>
        <Col xl={2} lg={3} md={4} sm={1}>
          <ProductCard />
        </Col>{" "}
        <Col xl={2} lg={3} md={4} sm={1}>
          <ProductCard />
        </Col>{" "}
        <Col xl={2} lg={3} md={4} sm={1}>
          <ProductCard />
        </Col>{" "}
        <Col xl={2} lg={3} md={4} sm={1}>
          <ProductCard />
        </Col>{" "}
        <Col xl={2} lg={3} md={4} sm={1}>
          <ProductCard />
        </Col>{" "}
        <Col xl={2} lg={3} md={4} sm={1}>
          <ProductCard />
        </Col>{" "}
        <Col xl={2} lg={3} md={4} sm={1}>
          <ProductCard />
        </Col>{" "}
        <Col xl={2} lg={3} md={4} sm={1}>
          <ProductCard />
        </Col>{" "}
        <Col xl={2} lg={3} md={4} sm={1}>
          <ProductCard />
        </Col>{" "}
        <Col xl={2} lg={3} md={4} sm={1}>
          <ProductCard />
        </Col>{" "}
        <Col xl={2} lg={3} md={4} sm={1}>
          <ProductCard />
        </Col>{" "}
        <Col xl={2} lg={3} md={4} sm={1}>
          <ProductCard />
        </Col>{" "}
        <Col xl={2} lg={3} md={4} sm={1}>
          <ProductCard />
        </Col>{" "}
        <Col xl={2} lg={3} md={4} sm={1}>
          <ProductCard />
        </Col>{" "}
        <Col xl={2} lg={3} md={4} sm={1}>
          <ProductCard />
        </Col>{" "}
        <Col xl={2} lg={3} md={4} sm={1}>
          <ProductCard />
        </Col>{" "}
        <Col xl={2} lg={3} md={4} sm={1}>
          <ProductCard />
        </Col>{" "}
        <Col xl={2} lg={3} md={4} sm={1}>
          <ProductCard />
        </Col>{" "}
        <Col xl={2} lg={3} md={4} sm={1}>
          <ProductCard />
        </Col>
      </Row>
    </StyledCategoryProducts>
  );
};

export default CategoryProducts;
