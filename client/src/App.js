import React from 'react'
import Home  from './Home'
import Cart from './Cart'
import {CartProvider} from 'react-use-cart'
import './App.css'
const App=()=>{
return(<>
<CartProvider>
    <Home/>
    <Cart/>
</CartProvider>
</>)
}
export default App