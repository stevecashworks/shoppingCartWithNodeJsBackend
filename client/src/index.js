
import reactDom  from 'react-dom';
import{BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import Home from './Pages/HomePage/home';
import SingleProduct from './Pages/SingleProduct/SingleProduct';
import {useState,useEffect} from 'react'
import Login from './Pages/Login/login';
import Cart from './Pages/Cart/cart'
import   state from './store'
import { Provider } from 'react-redux';

const root=document.getElementById('root')
const App=()=>{;
 
    return(
<Router>
    <Routes>
        <Route path='/' element={<Home/>} exact/>
        <Route path='/product/:id' element={<SingleProduct/>} />
        <Route path='/login' element={<Login/>}/>
        <Route path='/cart' element={<Cart/>}/>
    
    </Routes>
</Router>
         
    )
}

reactDom.render(
    <Provider store= {state}>
    <App/>
    </Provider>
, root
)
