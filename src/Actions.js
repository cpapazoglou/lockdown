import { Container, Row , Col, Button } from 'react-bootstrap';

const Actions = ({noDataSet, smsNumber, name, address}) => {
return (
    <section className="actions">
    <Container fluid>
      <Row>
        <Col><Button disabled={noDataSet} href={`sms:${smsNumber}?&body=1 ${name} ${address}`}>ΦΑΡΜΑΚΕΙΟ</Button></Col>
      </Row>
      <Row></Row>
      <Row>
        <Col><Button disabled={noDataSet}  href={`sms:${smsNumber}?&body=2 ${name} ${address}`}>SUPER MARKET</Button></Col>
      </Row>
      <Row>
        <Col><Button disabled={noDataSet}  href={`sms:${smsNumber}?&body=3 ${name} ${address}`}>ΤΡΑΠΕΖΑ</Button></Col>
      </Row>
      <Row>
        <Col><Button disabled={noDataSet}  href={`sms:${smsNumber}?&body=4 ${name} ${address}`}>ΠΑΡΟΧΗ ΒΟΗΘΕΙΑΣ</Button></Col>
      </Row>
      <Row>
        <Col><Button disabled={noDataSet}  href={`sms:${smsNumber}?&body=5 ${name} ${address}`}>ΤΕΛΕΤΗ</Button></Col>
      </Row>
      <Row>
        <Col><Button disabled={noDataSet}  href={`sms:${smsNumber}?&body=6 ${name} ${address}`}>ΑΣΚΗΣΗ</Button></Col>
      </Row>
    </Container>
  </section>

)}

export default Actions;