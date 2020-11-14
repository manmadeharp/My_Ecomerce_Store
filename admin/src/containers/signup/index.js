import React from 'react'
import Layout from '../../components/layout'
import {Container, Form, Row, Col, Button} from 'react-bootstrap'
import Input from '../../components/UI/input'
const Signup = (props) => {
    return (
        <>
            <Layout>
                <Row style={{marginTop: '50px'}}>
                    <Col md={{span: 6, offset: 3}}>
                        <Form>
                            <Row>
                                <Col md={6}>
                                    <Input
                                        label="First Name"
                                        placeholder="First Name"
                                        value=""
                                        type="text"
                                        onChange={() => {}}
                                    /> 
                                </Col>
                                <Col md={6}>
                                    <Input
                                        label="Last Name"
                                        placeholder="Last Name"
                                        value=""
                                        type="text"
                                        onChange={() => {}}
                                    />  
                                </Col>
                            </Row>
                            <Form.Group controlId="formBasicEmail">
                                    <Input
                                        label="Email"
                                        placeholder="Email"
                                        value=""
                                        type="text"
                                        onChange={() => {}}
                                    /> 
                            </Form.Group>

                                    <Input
                                        label="password"
                                        placeholder="password"
                                        value=""
                                        type="password"
                                        onChange={() => {}}
                                    />
                            <Form.Group controlId="formBasicCheckbox">
                                <Form.Check type="checkbox" label="Check me out" />
                            </Form.Group>
                            <Button variant="primary" type="submit">
                                Submit
                            </Button>
                        </Form>
                    </Col>
                </Row>
                
            </Layout>
        </>
    )
}
export default Signup