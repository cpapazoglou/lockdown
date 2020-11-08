import { Container, Row , Col, Form } from 'react-bootstrap';

const Profile = ({name,address,setName, setAddress}) => {
return (
    <section className="profile">
    <Container fluid>
        <Row>
            <Col>
            <Form>
                <Form.Group controlId="formBasicEmail">
                    <Form.Control type="text" placeholder="Ονοματεπώνυμο" defaultValue={name} onChange={(event)=>setName(event.target.value)} autoComplete="name" />
                </Form.Group>
                <Form.Group controlId="formBasicPassword">
                    <Form.Control type="text" placeholder="Οδός Αριθμός, Περιοχή" defaultValue={address} onChange={(event)=>setAddress(event.target.value)} autoComplete="street-address"/>
                </Form.Group>
            </Form>
            </Col>
        </Row>
    </Container>
    </section>
)}

export default Profile;