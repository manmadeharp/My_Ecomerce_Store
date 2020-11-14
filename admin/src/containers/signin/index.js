import React from 'react'
import Layout from '../../components/layout'
import {Container, Form, Row, Col, Button} from 'react-bootstrap'
import Input from '../../components/UI/input'
const Signin = (props) => {
    return (
        <>
            <Layout>
                <Row style={{marginTop: '50px'}}>
                    <Col md={{span: 6, offset: 3}}>
                        <Form>
                                    <Input
                                        label="Email"
                                        placeholder="Email"
                                        value=""
                                        type="text"
                                        onChange={() => {}}
                                    /> 

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
export default Signin