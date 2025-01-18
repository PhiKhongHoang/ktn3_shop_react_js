import React from "react";
import { CheckCircleTwoTone, CloseCircleTwoTone, PlusCircleTwoTone, ShoppingCartOutlined } from "@ant-design/icons";
import { Col, Row } from "antd";

const ProductComponent = ({ sale, hot, imageUrl, title, list_price, price, tag }) => {
    return (
        <div style={{ border: "1px solid #ddd", borderRadius: "8px", padding: "10px", position: "relative", maxWidth: "300px" }}>
            {/* Phần ảnh và biểu tượng */}
            <div style={{ position: "relative", textAlign: "center" }}>
                <img
                    src={imageUrl}
                    alt={title}
                    style={{ width: "auto", height: "160px", objectFit: "cover", borderRadius: "8px" }}
                />
                {/* Biểu tượng sale */}
                {sale && (
                    <span
                        style={{
                            position: "absolute",
                            top: "10px",
                            left: "10px",
                            backgroundColor: "red",
                            color: "white",
                            padding: "5px 10px",
                            borderRadius: "5px",
                            fontSize: "12px",
                        }}
                    >
                        SALE
                    </span>
                )}
                {/* Biểu tượng hot */}
                {hot && (
                    <span
                        style={{
                            position: "absolute",
                            top: "10px",
                            right: "10px",
                            backgroundColor: "orange",
                            color: "white",
                            padding: "5px 10px",
                            borderRadius: "5px",
                            fontSize: "12px",
                        }}
                    >
                        HOT
                    </span>
                )}
            </div>

            {/* Phần thông tin sản phẩm */}
            <div style={{ marginTop: "10px" }}>
                <p style={{ marginBottom: "5px" }}>{title}</p>
                <p>
                    <span style={{ textDecoration: "line-through", marginRight: "10px", color: "#888" }}>Giá niêm yết: {list_price}</span>
                    <br />
                    <b style={{ color: "red", fontSize: "18px" }}>Giá bán: {price}</b>
                </p>
            </div>

            {/* Phần biểu tượng chức năng */}
            <Row style={{ marginTop: "15px", textAlign: "center" }}>
                <Col span={8}>
                    {tag ? <CheckCircleTwoTone twoToneColor="#52c41a" /> : <CloseCircleTwoTone twoToneColor="#eb2f96" />}
                    <div>{tag ? "Hàng có sẵn" : "Hết hàng"}</div>
                </Col>
                <Col span={8}>
                    <ShoppingCartOutlined style={{ fontSize: "18px", color: "#1890ff" }} />
                    <div>Giỏ hàng</div>
                </Col>
                <Col span={8}>
                    <PlusCircleTwoTone twoToneColor="#1890ff" style={{ fontSize: "18px" }} />
                    <div>So sánh</div>
                </Col>
            </Row>
        </div>
    );
};

export default ProductComponent;
