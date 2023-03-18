import React, { createContext, useReducer } from 'react'
import Header from '../src/components/Header'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Weather from './components/Weather';
import Login from './components/Login';
import Signup from './components/Signup';
import Eror from './components/Eror';
import Footer from './components/Footer';
import Home from './components/Home';
// import Protected from './components/Protected';
import Logout from './components/Logout';
import {reducer, initialState} from '../src/Reducer/Reducer'


export const UserContext = createContext();
const App = () => {
const  [state, dispatch] = useReducer(reducer, initialState);

  return (
    <>
      <div>
      <UserContext.Provider value={{state, dispatch}}>
        <Router>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/weather" element={<Weather />} />
            <Route path="/logout" element={<Logout />} />
            <Route path="*" element={<Eror />} />
          </Routes>
          <Footer /> 
        </Router>
        </UserContext.Provider>
      </div>
    </>
  )
}

export default App
