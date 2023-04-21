import React, { useState } from 'react'

import { Row, Card, Form, Button, Dropdown } from 'react-bootstrap';

import "../styles/contactPage.css"

const ContactPage = () => {
    const [info, setInfo] = useState({})

    const onChange = (e) => {
        setInfo({...info, [e.target.id]: e.target.value})
      }

    const onSubmit = (e) => {
        e.preventDefault()
        console.log(info)
    }
    return (
        <Row className="justify-content-md-center info-page">
            <Card className="mb-4 p-0 info-card">
                <Card.Body>
                    <h5 className="info-card-title">Please Fill In Your Contact Information</h5>
                    <Dropdown.Divider style={{color: "grey"}}/>

                    <Form onSubmit={e => onSubmit(e)}>
                        <Form.Group onChange={e => onChange(e)}>
                            <Form.Label className="info-card-text">Name</Form.Label>
                            <Form.Control required className="info-card-form-item" id="firstName" type="text" placeholder="Name" />
                        </Form.Group>
                    
                        <Form.Group onChange={e => onChange(e)}>
                            <Form.Label className="info-card-text">Surename</Form.Label>
                            <Form.Control required className="info-card-form-item" id="lastName" type="text" placeholder="Surename" />
                        </Form.Group>          
                        
                        <Form.Group onChange={e => onChange(e)}>
                            <Form.Label className="info-card-text">Email</Form.Label>
                            <Form.Control required className="info-card-form-item" id="email" type="email" placeholder="name@mail.com" />
                        </Form.Group>
                        
                        <Form.Group onChange={e => onChange(e)}>
                            <Form.Label className="info-card-text">Phone Number</Form.Label>
                            <Form.Control required className="info-card-form-item" id="phone" type="number" placeholder="+30 0000000000" />
                        </Form.Group>
                
                        <h5 className="info-card-title">Write your Message Below </h5>
                        <Dropdown.Divider style={{color: "grey"}}/>

                        <Form.Group onChange={e => onChange(e)}>
                            <Form.Label className="info-card-text">Message</Form.Label>
                            <Form.Control required className="info-card-form-item info-card-text-area" as="textarea" id="message" type="text" placeholder="Type your Message" />
                        </Form.Group>
                        
                        <div className="mt-3">
                            <Button variant="primary" type="submit">Submit</Button>
                        </div>
                    </Form>
                </Card.Body>
            </Card>
        </Row>
    )
}

export default ContactPage