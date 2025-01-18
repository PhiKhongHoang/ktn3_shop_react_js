import { Col, Row } from "antd";

const GridPage = ({ columns = 4, children }) => {
    return (
        <Row gutter={[16, 16]}>
            {
                Array.isArray(children)
                    ?
                    children.map((child, index) => (
                        <Col key={index} span={24 / columns} className="grid-col">
                            {child}
                        </Col>
                    ))
                    :
                    children
            }
        </Row>
    );
};

export default GridPage;
