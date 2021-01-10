import { Container, Row , Col, Form } from 'react-bootstrap';

const AddressSelector = ( { profile, setProfile } ) => {
    const setSelected = ( index ) => {
        const oldAddresses = [...profile.addresses];
        oldAddresses.filter( address => address.selected )[0].selected = false;
        oldAddresses[index].selected = true;
        setProfile({ name: profile.name, addresses: oldAddresses });
        localStorage.setItem('profile', JSON.stringify( profile ));
    }

    return (    
        <Container fluid>
            <Row>
                <Col>
                    <Form.Group>
                        <Form.Label>Επιλέξτε Διεύθυνση</Form.Label>
                        <Form.Control as="select" size="sm" onChange={ (event) => setSelected(event.target.value) }>
                            { profile.addresses?.map( (address, index) => {
                                return <option key={ index } defaultValue={ address.selected } value={ index }>{address.address}</option>;
                            })}
                        </Form.Control>
                    </Form.Group>
                </Col>
            </Row>
        </Container>
)}

export default AddressSelector;