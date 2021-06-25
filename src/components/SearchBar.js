import React, { useState } from 'react'
import { withRouter } from 'react-router-dom';
import { Form, Button, Row, Col } from 'react-bootstrap'
import { IoMdArrowRoundBack } from 'react-icons/io'


function SearchBar(props) {

    return (
        <div id="form-block">
            <Row>
                <Col sm='2' xs='2' md='1' >
                    <Button variant='dark' id='back-btn' onClick={() => props.history.goBack()}>
                        <IoMdArrowRoundBack size='35px' />
                    </Button>
                </Col>
                <Col sm='10' xs='10' md='11' >
                    <Form>
                        <Form.Control type="text" id="search-bar" placeholder="What are you looking for ?" className="text-left" />
                    </Form>
                </Col>
            </Row>
        </div>
    )
}

export default withRouter(SearchBar);