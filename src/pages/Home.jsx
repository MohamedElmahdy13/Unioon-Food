import React from "react";
import AddsSection from "../ui/AddsSection.jsx";
import HomeSlider from "../ui/HomeSlider.jsx";
import CategoryList from "../ui/CategoryList.jsx";
import { Col, Container, Row } from "reactstrap";
import ProductSection from "../ui/ProductSection.jsx";

const Home = () => {
  return (
    <Container fluid>
      <Row className="gy-4">
        <Col sm={12}>
          <HomeSlider />
        </Col>{" "}
        <Col sm={12}>
          <CategoryList />
        </Col>{" "}
        <Col sm={12}>
          <AddsSection />
        </Col>{" "}
        <Col sm={12}>

          <ProductSection/>
        </Col>
      </Row>
    </Container>
  );
};

export default Home;
