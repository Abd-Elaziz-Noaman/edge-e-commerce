import React, { useState, useEffect } from 'react'
import { Container, Carousel, Image, Row, Col, Card , Button , Form } from 'react-bootstrap'
import NavBar from './NavBar'
import Footer from './Footer'
import Item from './Item'
import { withRouter } from 'react-router-dom'
import { IoMdArrowRoundBack, IoShirtSharp } from 'react-icons/io'
import {FaClipboardList} from "react-icons/fa"
import {FaTshirt} from "react-icons/fa"




function Orders(props) {
    

    

    return (
        <div id="form-block" style={{backgroundColor:'white'}}>

            <NavBar wish={false}/>
            <br />
            <Container>
            <h1 style={{fontWeight:"bold", textAlign:'left'}}>
                Orders
                <FaClipboardList size="35" className="ml-2 mt-n2" />
            </h1>
            <br>
            </br>


            <div style={{  borderRadius:"0.5 rem" , mb:"1", boxShadow:'0px 2px 10px grey'}}>
            <Card  style={{ width: '100%',textAlign:'left' }}>
                <Card.Header>
                <h5>
                    ORDER ZACD51600623478
                    <FaTshirt size="25" className="ml-2 mt-n2 " />
                </h5>
                <span className="text-muted ml-2">
                    Placed on JUN 21.2021
                </span>
                </Card.Header>
                <Card.Body>
                <Image style={{height:"200px", display:'inline-block'}}
                    src='https://res.cloudinary.com/djtpiagbk/image/upload/v1624208944/Men/Summer/02/2382987300_2_4_1_vylaiu.jpg'
                    />
                    <p style={{width:"200px", wordWrap:'break-word',display:'inline-block',marginLeft:"10px"}}>
                    Men Printed Graphic Slogan t-Shirt 
                    </p>
                </Card.Body>
            </Card>
            </div>
            <br />
            <br />
            
            
            
            <div style={{  borderRadius:"0.5 rem" , mb:"1", boxShadow:'0px 2px 10px grey'}}>
            <Card border="secondary" style={{ width: '100%',textAlign:'left' }}>
            <Card.Header>
                 <h5>
                    ORDER NAED60062388478
                    <FaTshirt size="25" className="ml-2 mt-n2 " />
                </h5>
                <span className="text-muted ml-2">
                    Placed on May 19.2021
                </span>
                </Card.Header>
            <Card.Body>
            <Image style={{height:"200px", display:'inline-block'}}
            src='https://res.cloudinary.com/djtpiagbk/image/upload/v1624208944/Men/Summer/02/2382987300_2_4_1_vylaiu.jpg'
            />
            <p style={{width:"200px", wordWrap:'break-word',display:'inline-block',marginLeft:"10px"}}>
             Men Printed Graphic Slogan t-Shirt 
            </p>


            <Image style={{height:"200px", display:'inline-block'}}
            src='https://res.cloudinary.com/djtpiagbk/image/upload/v1624209433/Men/Summer/23/4470513800_2_3_8_dfbove.webp'
            />
            <p style={{width:"200px", wordWrap:'break-word',display:'inline-block',marginLeft:"10px"}}>
             Men Black Jaket 
            </p>
            </Card.Body>
            </Card>
            </div>
            <br />
            <br />
            
            


            <div style={{ borderRadius:"0.5 rem" , mb:"1", boxShadow:'0px 2px 10px grey'}}>
            <Card border="secondary" style={{ width: '100%',textAlign:'left' }}>
            <Card.Header>
                <h5>
                    ORDER TASD90098623478
                    <FaTshirt size="25" className="ml-2 mt-n2 " />
                </h5>
                <span className="text-muted ml-2">
                    Placed on FEB 16.2021
                </span>

            </Card.Header>
            <Card.Body>
            <Image style={{height:"200px"}}
            src='https://res.cloudinary.com/djtpiagbk/image/upload/v1624208944/Men/Summer/02/2382987300_2_4_1_vylaiu.jpg'
            />
            <p style={{width:"200px", wordWrap:'break-word',display:'inline-block',marginLeft:"10px"}}>
             Men Printed Graphic Slogan t-Shirt 
            </p>
            </Card.Body>
            </Card>
            </div>
            <br />
            <br />
           </Container>
           <br>
           </br>
           <Footer />
           </div>

    )
}

export default withRouter(Orders);

