import React from 'react';
import { Login } from './components/Login/Login';
import { HomePage } from './components/HomePage/HomePage';
import './App.css'

export const myBasket= React.createContext()

function App() {

  const [page,setPage] = React.useState('login')
 
  return (
   <myBasket.Provider value={{setMyPage: setPage}} >
    <div>
      {page==='login' && <Login/>}
      {page==='home' && <HomePage/>}
   </div>
   </myBasket.Provider>
   
  );
}

export default App;
