import { useState, useEffect } from 'react';
import { Container, Row , Col, Form, Modal, Button } from 'react-bootstrap';

import './Profile.css'

const Profile = ({ dataSet, profile, setProfile }) => {
    const [ showModal, setShowModal ] = useState( ! dataSet );
    const [ name, setName] = useState( '' );
    const [ address, setAddress] = useState( '' );

    const handleClose = () => {
        setName( profile.name );
        setAddress( profile.address );
        setShowModal( false );
    }
    const handleShow = () => setShowModal( true );
    const handleSave = () => {
        setProfile({ name: name, address: address });
        setShowModal( false );
    }

    // Save Profile Data to browser local storage
    useEffect( () => {
        localStorage.setItem('name', profile.name);
        localStorage.setItem('address', profile.address);
    },[ profile.name, profile.address ])

    return (
        <section className="profile">
            <Modal show={ showModal } onHide={ handleClose }>
                <Modal.Header closeButton={ dataSet ? true : false }>
                    <Modal.Title>{ 'Στοιχεία' }</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group>
                            <Form.Control type="text" placeholder="Ονοματεπώνυμο" defaultValue={ profile.name } name="name" autoComplete="name" onChange={(event)=>setName(event.target.value)} />
                        </Form.Group>
                        <Form.Group>
                            <Form.Control type="text" placeholder="Οδός Αριθμός, Περιοχή" defaultValue={ profile.address } name="address" autoComplete="street-address" onChange={(event)=>setAddress(event.target.value)}/>
                        </Form.Group>
                    </Form>        
                </Modal.Body>
                <Modal.Footer>
                    <Button type="submit" disabled={ name === '' || address === '' } variant="primary" onClick={ handleSave }>Αποθήκευση</Button>
                </Modal.Footer>
            </Modal>
            <Container fluid>
                <Row>
                    <Col>{ dataSet && 
                        <div className="profile__data" onClick={ handleShow }>
                            <div className="profile__data-title"><i className="material-icons">edit</i>Στοιχεία</div>
                            <div className="profile__data-set">{ profile.name } { profile.address } </div>
                        </div> }
                    </Col>
                </Row>
            </Container>
        </section>
)}

export default Profile;