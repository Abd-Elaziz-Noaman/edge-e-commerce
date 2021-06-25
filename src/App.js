import React, { useEffect } from 'react'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import { handleInitialData } from './actions/shared'
import { connect, useSelector } from 'react-redux'
import MainPage from './components/MainPage'
import ItemPage from './components/ItemPage'
import Cart from './components/Cart'
import SearchBar from './components/SearchBar'
import SignUp from './components/SignUp'
import Checkout from './components/Checkout'
import OrdersList from './components/Orderlistfr'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import jwt_decode from "jwt-decode";
import { setAuthedUser } from './actions/authedUser'
// import Item from './components/Item'



function App(props) {

  // useEffect(() => {
  //   const fetchItems = async () => {
  //     const items = await props.handleInitialData()
  //     console.log('items fetched', items)
  //     return {items}
  //   }

  //   fetchItems()
  // },[])

  useEffect(() => {
    const autoLogin = async () => {
      const userToken = await localStorage.getItem('token')
      if (!userToken) {
          return false
      }

      const currentTime = await Date.now() / 1000

      if (currentTime > jwt_decode(userToken).exp) {
          return false
      }

      const userId = await jwt_decode(userToken).id
      await props.setAuthedUser(userId)

      return true
    }

    autoLogin()
  })

  return (
    <Router>
      <div className="App">
        <Route exact path='/' component={ MainPage }/>
        <Route path='/item/:id' component={ ItemPage }/>
        <Route path='/cart' component={ Cart }/>
        <Route path='/search' component={ SearchBar }/>
        <Route path='/signup' component={ SignUp } />
        <Route path='/checkout' component={ Checkout } />
        <Route path='/orders' component={OrdersList} />
      </div>
    </Router>
  );
}

// function mapStateToProps ({items}) {
//   console.log('items App', items)
//   return {
//     items
//   }
// }

function mapDispatchToProps (dispatch) {
  return {
    setAuthedUser: (data) => dispatch(setAuthedUser(data))
  }
}

export default connect(null, mapDispatchToProps)(App);
