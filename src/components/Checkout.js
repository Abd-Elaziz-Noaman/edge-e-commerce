import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
// import { usePaymentInputs } from 'react-payment-inputs'
import { Container, Carousel, Image, Row, Col, Table, Form, Button } from 'react-bootstrap'
import { IoMdArrowRoundBack, IoIosHome } from 'react-icons/io'
import { FaCreditCard } from 'react-icons/fa'
import { GiMoneyStack } from 'react-icons/gi'


function Checkout () {

    let history = useHistory()

    const [paymentMethod, setpaymentMethod] = useState(false)

    // const { meta, getCardNumberProps, getExpiryDateProps, getCVCProps } = usePaymentInputs();

    return (
        <div>
            <section style={{backgroundColor:'black', color:'white', height:'80px'}}>
                <IoMdArrowRoundBack 
                    size="33" 
                    className="d-inline-block float-left ml-5 mt-3" 
                    style={{cursor:'pointer'}}
                    onClick={() => history.push('/cart')}
                />
                <h3 className="d-inline-block float-left ml-4 mt-3">Cart</h3>
                <h3 
                    className="d-inline-block float-right mr-5 mt-3"
                    style={{cursor:'pointer'}}
                    onClick={() => history.push('/')}
                >edge.</h3>
            </section>

            <br />
            <br />

            <Container>
                <Row>
                    <Col md="8" className="text-left">
                        <h2>Payment</h2>
                        <br />
                        <h3>PAYMENT METHOD</h3>
                        <Row>
                            <Col>
                                <Button className="paymentBtn float-left" onClick={() => setpaymentMethod(false)}>
                                    <h5>
                                        <FaCreditCard size="20" color="black" className="mr-2" />
                                        Pay with card
                                    </h5>
                                </Button>
                            </Col>
                            <Col>
                                <Button className="paymentBtn float-right" onClick={() => setpaymentMethod(true)}>
                                    <h5>
                                        <GiMoneyStack size="25" color="black" className="mr-2" />
                                        Pay with cash
                                    </h5>
                                </Button>
                            </Col>
                        </Row>
                        <br />
                        {!paymentMethod ? (
                            <section>
                                <Form>
                                    <section style={{padding:'15px', border:'1px solid black', backgroundColor:'whitesmoke'}}>
                                        <Form.Group>
                                            <Form.Label>CARD NUMBER</Form.Label>
                                            <Form.Control className="checkout-form" type="text" placeholder="**** **** **** ****" />
                                        </Form.Group>
                                        <Form.Group className="d-inline-block">
                                            <Form.Label>EXPIRY DATE</Form.Label>
                                            <Form.Control className="checkout-form" type="date" />
                                        </Form.Group>
                                        <Form.Group className="d-inline-block ml-4">
                                            <Form.Label>CVV</Form.Label>
                                            <Form.Control className="checkout-form" type="text" placeholder="Code" />
                                        </Form.Group>
                                    </section>
                                    <br />
                                    <h3>DELIVERY OPTIONS</h3>
                                    <Form.Group style={{padding:'15px'}}>
                                        <Row>
                                            <Col md="1">
                                                <Form.Check 
                                                    type="checkbox"
                                                    name="leaveAtMyDoor"
                                                    style={{zoom:'2'}}
                                                />
                                            </Col>
                                            <Col md="10">
                                                <section className="d-inline-block ml-n3">
                                                    <h5>
                                                        <IoIosHome size="30" />
                                                        Leave At My Door
                                                    </h5>
                                                    <p className="text-muted">Your delivery will be left at your door and a photo will be sent to you as confirmation. Valid on prepaid orders only.</p>
                                                </section>
                                            </Col>
                                        </Row>
                                    </Form.Group>
                                    <Button type="submit" className="placeorderBtn">
                                        PLACE ORDER
                                    </Button>
                                </Form>
                            </section>
                        ) : (
                            <Button className="placeorderBtn mt-2">PLACE ORDER</Button>
                        )
                        }
                        <br />
                        <br />
                        <h4>YOUR ORDER</h4>
                        <br />
                        <div style={{padding:'15px'}}>
                            <Row>
                                <Col md="2">
                                    <Image src="https://res.cloudinary.com/djtpiagbk/image/upload/v1624209433/Men/Summer/23/4470513800_2_3_8_dfbove.webp" style={{height:'150px'}} />
                                </Col>
                                <Col md="7">
                                    <p className="text-muted">Defacto</p>
                                    <h5>Black Shirt XL</h5>
                                    <p>Order now and get it by <span style={{color:'green'}}>Sun,Jun 27</span></p>
                                </Col>
                                <Col md="3">
                                    <h3>199 LE</h3>
                                    <h6 className="text-muted">QTY: 1</h6>
                                </Col>
                            </Row>
                        </div>
                        <br />
                        <br />
                    </Col>
                    <Col md="4">
                        <br />
                        <br />
                        <div className="text-left p-3" style={{border:'1px solid grey'}}>
                            <h3>ORDER SUMMARY</h3>
                            <br />
                            <p className="text-muted"><span>Subtotal</span><span className="float-right">199 LE</span></p>
                            <p className="text-muted"><span>Shipping Fee</span><span className="float-right">20 LE</span></p>
                            <p className="text-muted"><span>COD Fee</span><span className="float-right">10 LE</span></p>
                            <hr />
                            <p><span style={{fontSize:'12px',color:'grey'}}><strong style={{fontSize:'18px', color:'black'}}>Total</strong>(Estimated VAT included)</span> <span className="float-right">229 LE</span></p>
                            <p className="text-muted"><span>Estimated VAT</span><span className="float-right">28.35 LE</span></p>
                            <section style={{backgroundColor:'whitesmoke', color:'grey', height:'5vh', padding:'5px', marginBottom:'15px', width:'calc(100% + 32px)', marginLeft:'-16px'}}>
                                <h5 className="ml-2">SHIP TO</h5>
                            </section>
                            <h6>Zezo Noaman</h6>
                            <h6>Tanta Qism 2 - Gharbia - Egypt</h6>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Checkout;