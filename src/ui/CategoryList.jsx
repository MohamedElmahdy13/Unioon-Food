import CategorySection from "./CategorySection.jsx";
import { Col, Row } from "reactstrap";

const CategoryList = ({ list }) => {
  return (
    <Row className="gx-0 gy-3">
      <Col xl={6} sm={12} xs={12}>
        <CategorySection />
      </Col>
      <Col xl={6} sm={12} xs={12}>
        <CategorySection />
      </Col>{" "}
    </Row>
  );
};

export default CategoryList;
