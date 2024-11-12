import { Container, Row, Col } from "reactstrap";
import NavTabs from "./../ui/NavTabs";
import { useParams } from "react-router-dom";
import ImageZoom from "../ui/ImageZoom";
import ProductInfo from "../features/ProductDetails/ProductInfo.jsx";
import ProductDetailsFooter from "../features/ProductDetails/ProductDetailsFooter";

function ProductsDetails() {
  const params = useParams();
  return (
    <Container fluid>
      <Row>
        <Col sm={12}>
          <NavTabs />
        </Col>
      </Row>
      <Row className="gy-5">
        <Col xl={6}>
          <Col sm={12} className="d-flex justify-content-center">
            <ImageZoom src={"../../public/images/6291056001002-n.jpg"} />
          </Col>
        </Col>
        <Col xl={6}>
          <ProductInfo />
        </Col>

        <Col xl={12}>
          <ProductDetailsFooter />
        </Col>
      </Row>
    </Container>
  );
}

export default ProductsDetails;
