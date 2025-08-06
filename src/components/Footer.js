import React from 'react'
import { Col, Row } from 'react-bootstrap'

export default function Footer() {
  return (
    <div>
      <Row className="my-5 mx-5">
        <Col md={4}>
          <Row>Copyright &copy; 2025 Genie L.</Row>
          <Row>Portfolio project</Row>
        </Col>
        <Col md={4}>
          <Row className="fw-semibold">Contacts</Row>
          <Row>xxxx@xxxxx.com</Row>
          <Row>+x(xx)-xxx-xxx-xx</Row>
        </Col>
        <Col md={4}>
          <Row className="fw-semibold">Adress</Row>
          <Row>XXXX,st.XXXXXXX,XX</Row>
        </Col>
      </Row>
    </div>
  )
}
