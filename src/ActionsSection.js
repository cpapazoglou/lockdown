import { Container, Row , Col, Button } from 'react-bootstrap';
import { Actions, smsNumber } from './Constants'

const ActionsSection = ({ dataSet, profile }) => {
return (
    <section className="actions">
      <Container fluid>
      { Actions.map((action) => {
        return (
        <Row key={ action.id }>
          <Col><Button disabled={!dataSet} href={`sms:${smsNumber}?&body=${ action.id } ${ profile.name } ${ profile.address }`}>{ action.title} </Button></Col>
        </Row>)
      }) }
    </Container>
  </section>

)}

export default ActionsSection;