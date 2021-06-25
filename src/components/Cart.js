import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import NavBar from './NavBar'
import Footer from './Footer'
import Counter, { count } from './Counter'
import { Container, Carousel, Image, Row, Col, Table, Form, Button } from 'react-bootstrap'
import ItemPic1 from '../img/item_pic1.jpg'
import { AiOutlinePlus, AiOutlineMinus, AiOutlineClose } from "react-icons/ai"
import CountrySelect from 'react-bootstrap-country-select';

function Cart (props) {
    const [ value, setValue ] = useState(null)
    const [cartItems, setCartItems] = useState([
        {id:1, pic:ItemPic1, name:"oversize sweatshirt", price:59.9,total:59.9}, 
        {id:2, pic:ItemPic1, name:"oversize sweatshirt", price:59.9,total:59.9},
        {id:3, pic:ItemPic1, name:"oversize sweatshirt", price:59.9,total:59.9}
    ])
    

    // useEffect(() => {
    //     setCartItems(...cartItems.concat(props.location.state.cartArr))
    //     console.log('cartArray', props.location.state.cartArr)
    //     console.log('cartItemssssss', cartItems)
    // }, [cartItems])

    const removeCartItem = (item) => {
        let itemIndex = cartItems.indexOf(item)
        setCartItems(cartItems.filter((i) => cartItems.indexOf(i) !== itemIndex))
        console.log('cartItems', cartItems)
        console.log('item', item)
        console.log('itemIndex', itemIndex)
    }

    // let cartItems = [
    //     {id:1, pic:ItemPic1, name:"oversize sweatshirt", price:59.9}, 
    //     {id:2, pic:ItemPic1, name:"oversize sweatshirt", price:59.9},
    //     {id:3, pic:ItemPic1, name:"oversize sweatshirt", price:59.9}
    // ]
    const handleIncreaseCounter = ({idx,count})=>{

        let newValue = cartItems.map((item,index)=>{
            if(index !== idx) return item
            let newItemValue = {...item, total : item.price*count}
            
            return newItemValue
        })
        setCartItems(newValue)
        

    }
    const handleDecreaseCounter = ({idx,count})=>{

            let newValue = cartItems.map((item,index)=>{
                if(index !== idx) return item
    
                let newItemValue = {...item, total : item.price*count}

                return newItemValue
            })
            setCartItems(newValue)
            
    
        }
    return(
        <div fluid>
            <NavBar wish={false} />
            <br />
            <br />

            <Container fluid style={{width:"90%"}}>
                <h4 className="text-center">YOUR SHOPPING CART</h4>
                <br />
                <br />
                <Row>
                    <Col xs="12" sm="12" md="8">
                        <Table>
                            <thead style={{borderBottom:'1px solid grey'}}>
                                <tr>
                                    <th className="text-left"><span style={{marginLeft:'50px'}}>PRODUCT</span></th>
                                    <th>PRICE</th>
                                    <th>QUANTITY</th>
                                    <th>TOTAL</th>
                                </tr>
                            </thead>
                            <tbody>
                                {cartItems.map((item,index) => 
                                    <tr key={item.id}>
                                        <td className="text-left">
                                            <button 
                                                style={{backgroundColor:'white', border:'none', outline:'none'}}
                                                onClick={() => removeCartItem(item)}
                                            >
                                                <AiOutlineClose 
                                                    size="25px" 
                                                    className="mr-2"
                                                    // style={{cursor:'pointer'}} 
                                                    // onClick={() => removeCartItem(item)}
                                                /> 
                                            </button>
                                            <Image 
                                                className="d-inline-block p-2"
                                                src={item.pic}
                                                alt="Item Pic"
                                                id="item-pic-cart"
                                            />
                                            <h5 className="d-inline-block ml-3 text-center">{item.name}</h5>
                                        </td>
                                        <td>{`$${item.price}`}</td>
                                        <td>
                                            <Counter id={item.id} idx={index} handleIncreaseCounter={handleIncreaseCounter} handleDecreaseCounter={handleDecreaseCounter}/>
                                        </td>
                                        <td>{`$${item.total}`}</td>
                                    </tr>
                                )}
                            </tbody>
                        </Table>
                        {!cartItems.length && 
                            <div className="text-center h-25">
                                <h4 className="mb-n5" style={{marginTop:'120px'}}>Cart is empty</h4>
                            </div>}
                        
                        <br />
                        <br />
                        <Form>
                            <Row>
                                <Col xs="12" sm="12" md="6" >
                                    <Row id="coupon-block" className="mt-2">
                                        <Col>
                                            <Form.Control 
                                                placeholder="Coupon code"
                                                className="ml-n4"
                                                style={{boxShadow:'none', outline:'none'}}
                                            />
                                        </Col>
                                        <Col>
                                            <Button 
                                                variant="light" 
                                                className="ml-5 mr-n5"
                                                style={{backgroundColor:'white', border:'none', boxShadow:'none'}}
                                            >
                                                APPLY COUPON
                                            </Button>
                                        </Col>
                                    </Row>
                                </Col>
                                <Col xs="12" sm="12" md="6" >
                                    <Button 
                                        className="cartBtn w-50"
                                        style={{border:'none'}}
                                    >
                                        UPDATE CART
                                    </Button>
                                </Col>
                            </Row>
                        </Form>
                        <br />
                        <br />
                        <br />
                    </Col>
                    <Col xs="12" sm="12" md="4">
                        <div id="cart-form" className="text-left">
                            <h5>SHIPPING</h5>
                            <br />
                            <Form>
                                <Form.Group>
                                    <Form.Check 
                                        type="radio"
                                        label="Ground Shipping - 2 to 5 business days: FREE"
                                        name="shippingTime"
                                    />

                                    <Form.Check 
                                        type="radio"
                                        label="Expedite - 2 to 3 days: $50"
                                        name="shippingTime"
                                    />

                                    <Form.Check 
                                        type="radio"
                                        label="Overnight - Next Day: $140"
                                        name="shippingTime"
                                    />
                                </Form.Group>
                                <br />
                                
                                <h6>Calculate shipping</h6>
                                <br />
                                <Form.Group>
                                    <CountrySelect
                                        value={value}
                                        onChange={setValue}
                                        placeholder="State/Country"
                                        className="cartFormInputs"
                                    />
                                    <br />
                                    <Form.Control 
                                        placeholder="City"
                                        className="cartFormInputs"
                                    />
                                    <br />
                                    <Form.Control 
                                        placeholder="Postcode/ZIP"
                                        className="cartFormInputs"
                                    />
                                </Form.Group>

                                <Button variant="dark" type="submit" className="cartBtn">
                                    UPDATE
                                </Button>
                                <br />
                                <br />
                                <p>Tax &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; $112</p>
                                <p>Total &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; $1392</p>
                                <br />
                                <Link to='/checkout' >
                                    <Button variant="dark" type="submit" className="cartBtn">
                                        PROCEED TO CHECKOUT
                                    </Button>
                                </Link>
                            </Form>
                        </div>
                    </Col>
                </Row>
            </Container>

            <br />
            <br />
            <Footer />
        </div>
    )
}


export default Cart;