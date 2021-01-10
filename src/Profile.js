import { useState, useEffect, Fragment } from 'react';
import { Container, Row , Col, Form, Modal, Button } from 'react-bootstrap';

import './Profile.css'

const Profile = ({ dataSet, profile, setProfile }) => {
    const [ showModal, setShowModal ] = useState( ! dataSet );
    const [ name, setName] = useState( profile.name );
    const [ addresses, setAddresses] = useState( profile.addresses );

    const handleClose = () => {
        setName( profile.name );
        setAddresses( profile.addresses );
        setShowModal( false );
    }
    const handleShow = () => setShowModal( true );
    const handleSave = () => {
        setProfile({ name: name, addresses:addresses });
        setShowModal( false );
    }

    // Save Profile Data to browser local storage
    useEffect( () => {
        localStorage.setItem('profile', JSON.stringify(profile));
    },[ profile ])

    const addAddressButton = () => {
        return <Button variant="secondary" onClick={ () => addAddress() }>Νέα Διεύθυνση</Button>
    }

    const addressField = ( address,index ) => {
        return (
            <Fragment key={ index } >
                <Form.Control type="text" placeholder="Οδός Αριθμός, Περιοχή" defaultValue={ address.address !=='' ? address.address : '' } name="address" autoComplete="street-address" onChange={ (event)=> {
                    const oldAddresses = [...addresses];
                    oldAddresses[index].address = event.target.value
                    setAddresses( oldAddresses );
                }}/>
                <Button variant="third" onClick={ () => removeAddress(index) }>Αφαίρεση Διεύθυνσης</Button>
            </Fragment>
        )
    }

    const addAddress = () => {
        const oldAddresses = [...addresses];
        oldAddresses.push( { address: '', selected: false } );
        setAddresses( oldAddresses );
    }

    const removeAddress = ( index ) => {
        const oldAddresses = [...addresses];
        oldAddresses.splice( index,1 );
        setAddresses( oldAddresses );
    }

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
                            { addresses.map( ( address, index ) => addressField( address,index ) ) }
                        </Form.Group>
                        <Form.Group>
                            { addAddressButton() }
                        </Form.Group>
                    </Form>        
                </Modal.Body>
                <Modal.Footer>
                    <Button type="submit" disabled={ name === '' || addresses[0]?.address === '' } variant="primary" onClick={ handleSave }>Αποθήκευση</Button>
                </Modal.Footer>
            </Modal>
            <Container fluid>
                <Row>
                    <Col>{ dataSet && 
                        <div className="profile__data" onClick={ handleShow }>
                            <div className="profile__data-title"><i className="material-icons">edit</i>Στοιχεία</div>
                            <div className="profile__data-set">{ profile.name } { profile.addresses.filter( address => address.selected )[0]?.address || profile.addresses[0]?.address } </div>
                        </div> }
                    </Col>
                </Row>
            </Container>
        </section>
)}

export default Profile;