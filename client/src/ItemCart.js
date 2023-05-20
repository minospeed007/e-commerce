import React from 'react'
import{ useCart } from 'react-use-cart'
const ItemCard=(props)=>{
    const {addItem} = useCart()
return(<>
<div className="cart">
<div className="app-div">
<img className="img" src={props.img} alt=""/>
</div>
<div>
<h5> {props.title}</h5>
<h5> {props.desc}</h5>

<h5> ${props.price}</h5>

<button type="button" onClick={()=>addItem(props.item)}>Add to cart</button>
</div>
    
</div>
</>)
}
export default ItemCard