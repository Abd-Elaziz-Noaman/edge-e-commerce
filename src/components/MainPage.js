import React, { useState, useEffect } from 'react'
import { Link, withRouter } from 'react-router-dom'
import { connect, useSelector } from 'react-redux'
import { handleInitialData } from '../actions/shared'
import { Container, Carousel, Image, Row, Col, Card, Spinner } from 'react-bootstrap'
import NavBar from './NavBar'
import Item from './Item'
// import Footer from './Footer'
import Footer from './Footer'
// import Banner_1 from '../img/banner1.jpg'
// import Banner_2 from '../img/banner2.PNG'
// import Banner_3 from '../img/banner3.PNG'

let Items = [1, 2, 3, 4]

function MainPage(props) {

    const [items, setitems] = useState([])

    useEffect(() => {
                      // props.handleInitialData()
                      //     .then((items) => {
                     //         setitems(items.items)
                     //         console.log('items Main Page', items)
                     //     })
        const fetchItems = async () => {
          const items = await props.handleInitialData()
          setitems(items.items)
          console.log('items fetched', items)
          return {items}
        }
    
        fetchItems()
    },[])

    // const {items} = props
    console.log('items Main Page', items)

    // useEffect(() => {

    // },[items])

    return (
        <div>
            {items.length ? (
                <div>
                    <NavBar wish={false}/>
                    <div>
                        <Carousel className="mt-3">
                            <Carousel.Item>
                                <Image style={{height:"650px",maxWidth:"100%", objectFit:'cover'}}
                                    className="d-block w-100"
                                    src="https://res.cloudinary.com/djtpiagbk/image/upload/v1622331736/Canvas/White_Simple_We_Are_Open_Instagram_Post_aqgcur.png"
                                    alt="First slide"
                                />

                            </Carousel.Item>
                            <Carousel.Item >
                                <Image style={{height:"650px",maxWidth:"100%", objectFit:'cover'}}
                                    className="d-block w-100"
                                    src="https://res.cloudinary.com/djtpiagbk/image/upload/v1622332517/Canvas/New_Collection_Instagram_Post_1_sqfaat.png"
                                    alt="Second slide"
                                />

                            </Carousel.Item>
                            <Carousel.Item>
                                <Image style={{height:"650px",maxWidth:"100%", objectFit:'cover'}}
                                    className="d-block w-100"
                                    src="https://res.cloudinary.com/djtpiagbk/image/upload/v1622332415/Canvas/logo_1_sedqvu.gif"
                                    alt="Third slide"
                                />

                            </Carousel.Item>
                            <Carousel.Item>
                                <Image style={{height:"650px",maxWidth:"100%", objectFit:'cover'}}
                                    className="d-block w-100"
                                    src="https://res.cloudinary.com/djtpiagbk/image/upload/v1622333549/Canvas/Copy_of_Shop_New_Arrivals_Collage_Instagram_Post_kjbci5.png"
                                    alt="Third slide"
                                />

                            </Carousel.Item>
                            <Carousel.Item>
                                <Image style={{height:"650px",maxWidth:"100%", objectFit:'cover'}}
                                    className="d-block w-100"
                                    src="https://res.cloudinary.com/djtpiagbk/image/upload/v1622331707/Canvas/Orange_and_Green_Geometric_Apparel_Store_Flyer_vhw2cm.png"
                                    alt="Third slide"
                                />

                            </Carousel.Item>
                        </Carousel>
                    </div>

                    <br />
                    <br />
                    <h3 style={{fontWeight:"bold"}}>CATEGORIES</h3>
                    <br />

                    <Container className="text-center" >
                        <Row className="text-left">

                            <Col md="6" className="mr-n3">
                                <Link to="/orders">
                                    <Card className="bg-white text-dark p-2" style={{height:'320px'}}>
                                    <Card.Img  style={{objectFit:"cover"}}
                                    
                                    src="https://res.cloudinary.com/djtpiagbk/image/upload/v1624209297/Men/Summer/19/4241932250_2_3_8_uhogxg.jpg" alt="Card image"/>
                                    <Card.ImgOverlay>
                                        <Card.Title>T-SHIRT</Card.Title>
                                        <Card.Text style={{textDecoration:"underline"}}>
                                         SHOP NOW
                                        </Card.Text>
                                    
                                    </Card.ImgOverlay>
                                    </Card>
                                </Link>


                                <Link>
                                    <Card className="bg-white text-dark p-2" style={{height:'270px'}}>
                                    <Card.Img style={{objectFit:"cover"}}
                                    src="https://res.cloudinary.com/djtpiagbk/image/upload/v1618873404/Women/Straight%20Jean%20Trousers/Screenshot_647_gqwewr.png" alt="Card image"/>
                                    <Card.ImgOverlay>
                                        <Card.Title>PANTS</Card.Title>
                                        <Card.Text style={{textDecoration:"underline"}}>
                                        SHOP NOW
                                        </Card.Text>
                                    
                                    </Card.ImgOverlay>
                                    </Card>
                                </Link>
                            </Col>



                            <Col md="6" className="ml-n3">
                                <Link>
                                    <Card className="bg-white text-dark p-2" style={{height:'270px'}}>
                                    <Card.Img  style={{objectFit:"cover"}}
                                    src="https://res.cloudinary.com/djtpiagbk/image/upload/v1624209420/Men/Summer/23/4470513401_2_1_8_owrmmi.webp" alt="Card image"/>
                                    <Card.ImgOverlay>
                                        <Card.Title>SHIRTS</Card.Title>
                                        <Card.Text style={{textDecoration:"underline"}} >
                                        SHOP NOW
                                        </Card.Text>
                                    
                                    </Card.ImgOverlay>
                                    </Card>
                                </Link>


                                <Link>
                                    <Card className="bg-white text-dark p-2" style={{height:'320px'}}>
                                    <Card.Img  style={{objectFit:"cover"}}
                                    src="https://res.cloudinary.com/djtpiagbk/image/upload/v1624209179/Men/Summer/24/4685511407_2_3_8_od7lsp.webp" alt="Card image"/>
                                    <Card.ImgOverlay>
                                        <Card.Title>JEANS</Card.Title>
                                        <Card.Text style={{textDecoration:"underline"}} >
                                        SHOP NOW
                                        </Card.Text>
                                    
                                    </Card.ImgOverlay>
                                    </Card>
                                    {/* <div style={{height:"45%"}}>
                                        <Image src="https://res.cloudinary.com/trunk-club/image/upload/f_auto,q_auto,w_1280/v1560201871/Blog/19034_JuneTrendReport_Blog_Header_TCM_01.jpg" className="w-100 p-1 pl-2 h-100" style={{zIndex:'1'}}   />
                                        <div style={{color:"black", position:'relative', zIndex:'2', display:'flex', alignItems:'flex-start' }}>
                                            <h1>Men</h1>
                                        </div>
                                    </div> */}
                                </Link>
                            </Col>
                        </Row>
                    </Container>

                    <br />
                    <br />
                    <br />
                    <br />

                    <Container fluid>
                        <h4 className="text-center">MEN CLOTHES</h4>
                        <br />
                        <br />
                        <div>
                            <Row className="ml-2 mr-2">
                                {Items.map((item) => {
                                    item = items[Math.floor(Math.random() * items.length)]
                                    return (
                                        <Col key={item._id} className="ml-3"> 
                                            <Link to={`/item/${item._id}`} style={{color:"inherit", textDecoration:"none", cursor:"pointer"}}>
                                                <Item itemName={item.itemName} price={item.Price} image={item.images[0]} />
                                            </Link>
                                        </Col>
                                    )
                                })}
                            </Row>
                        </div>
                    </Container>

                    <br />
                    <br />
                    <br />

                    <Container fluid>
                        <h4 className="text-center">WOMEN CLOTHES</h4>
                        <br />
                        <br />
                        <div>
                            <Row className="ml-2 mr-2">
                                {Items.map((item) => {
                                    item = items[Math.floor(Math.random() * items.length)]
                                    return (
                                        <Col key={item._id} className="ml-3"> 
                                            <Link to={`/item/${item._id}`} style={{color:"inherit", textDecoration:"none", cursor:"pointer"}}>
                                                <Item itemName={item.itemName} price={item.Price} image={item.images[0]} />
                                            </Link>
                                        </Col>
                                    )
                                })}
                            </Row>
                        </div>
                    </Container>
                    
                    <br />
                    <br />

                    {/* <Container className="text-center h-75">
                        <Row className="text-left">
                            <Col md="6" className="mr-n3">
                                <Link>
                                    <div style={{height:"100%"}} >
                                        <Image src='https://res.cloudinary.com/djtpiagbk/image/upload/v1618873404/Women/Straight%20Jean%20Trousers/Screenshot_647_gqwewr.png' className="w-100 p-2 h-100" style={{zIndex:'1', objectFit:'cover'}}/>
                                    </div>
                                </Link>
                                        
                                </Col>
                                <Col md="6" className="ml-n3">
                                <Link>
                                    <div style={{height:"100%"}}>
                                        <Image src='https://res.cloudinary.com/djtpiagbk/image/upload/v1618873404/Women/Straight%20Jean%20Trousers/Screenshot_647_gqwewr.png' className="w-100 p-2 h-100" style={{zIndex:'1', objectFit:'cover'}}/>
                                    </div>
                                </Link>
                                        
                            </Col>
                        </Row>
                    </Container>   */}

                    <br />
                    <br />

                    <Container className="text-center">
                        <Row className="text-left">
                            <Col md="7" className="mr-n3">
                                <Link>
                                   <Card className="bg-white text-dark p-2" style={{height:'320px'}}>
                                    <Card.Img  style={{objectFit:"cover"}}
                                    
                                    src="https://res.cloudinary.com/djtpiagbk/image/upload/v1624209091/Men/Summer/13/8240526400_2_3_8_bnd5rc.webp" alt="Card image"/>
                                    <Card.ImgOverlay>
                                        <Card.Title >
                                            TERNDS <br/>

                                              
                                             <h3 className="mt-2"> TIE DYE  </h3>
                                        </Card.Title>
                                        <Card.Text style={{textDecoration:"underline", fontSize:'18px'}}>
                                         SEE NOW
                                        </Card.Text>
                                    
                                    </Card.ImgOverlay>
                                    </Card>
                                </Link>
                                        
                                </Col>
                                <Col md="5" className="ml-n3">
                                <Link>
                                  <Card className="bg-white text-dark p-2" style={{height:'280px'}}>
                                    <Card.Img  style={{objectFit:"cover"}}
                                    
                                    src="https://res.cloudinary.com/djtpiagbk/image/upload/v1618873501/Women/WOMAN%20LONG%20SLEEVE%20SHIRT/Screenshot_619_cjnqie.png" alt="Card image"/>
                                    <Card.ImgOverlay>
                                        <Card.Title>
                                             NEW COLLECTION <br>
                                              </br>
                                           <h3 className="mt-2">TEES AND TOPS </h3> 
                                            </Card.Title>
                                        <Card.Text style={{textDecoration:"underline", fontSize:'18px'}}>
                                         SEE NOW
                                        </Card.Text>
                                    
                                    </Card.ImgOverlay>
                                    </Card>
                                </Link>
                                        
                            </Col>
                        </Row>
                    </Container> 
                    <br />
                    <br />
                    <br />
                    <br />
                    <Footer />
                </div>
            ) : (
                <Spinner animation="border" style={{marginTop:"400px"}} />
            )}
        </div>
    )
}

// function mapStateToProps ({items}) {

//     return {
//         items
//     }
// }

export default withRouter(connect(null, {handleInitialData})(MainPage))
