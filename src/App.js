import React,{useEffect} from 'react';
import './App.css';
import Header from'./Header';
import Home from './Home';
import{ BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Checkout from "./Checkout";
import Login from "./Login"
import {auth} from './firebase'
import {useStateValue} from "./StateProvider";//react context api

function App() {
  const [{}, dispatch] = useStateValue();

  useEffect(() => {
    auth.onAuthStateChanged(authUser => {
      console.log('userrrrr', authUser)
      if (authUser){
        //if user was logged in or log in
        dispatch({
          type:"SET_USER",
          user: authUser
        })
      }else {
        //if user has logged out
        dispatch(
              { type:"SET_USER", user:null }
            )
      }
    })
  }, [])
  return (
    <Router>
       <div className="app">
       
         <Switch>
           <Route path="/login">
             <Login />
           </Route>
           <Route path="/checkout">
              <Header />
              <Checkout />
           </Route> 
           <Route path="/payment">
             
           </Route>

           <Route path="/">
              <Header />
              <Home />
           </Route>
         </Switch>
          
       </div>
    </Router>
    
  
    

  );
}

export default App;
