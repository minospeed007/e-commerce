import React from 'react'
import {useCart} from 'react-use-cart'
const Cart=()=>{
    const {
        isEmpty,
        totalUniqueItems,
        totalItems,
        cartTotal,
        updateItemQuantity,
        removeItem,
        emptyCart,
        items
    }= useCart()
    if(isEmpty)return <h5 className='h'>Your cart is empty </h5>
return(<>
<div >
    Cart home
    <h4>cart ({totalUniqueItems})</h4>
    <h4>total ({totalItems})</h4>
    <div>
        {items.map((item,index)=>{
            return(
            <div key={index}>
                <img className="img" src={item.img}  alt=""/>
                <h5>{item.title}</h5>
                <h5>${item.price}</h5>
                <h5>quantity{item.quantity}</h5>
               <button type='button'
                onClick={()=>updateItemQuantity(item.id, item.quantity-1) }
               >-</button>
               <button type='button'
                onClick={()=>updateItemQuantity(item.id, item.quantity+1) }
               >+</button>
               <button type='button'
                onClick={()=>removeItem(item.id) }
               >Remove item</button>
            </div>
        )})}
    </div>
    <h5>total price: $ {cartTotal }</h5>
    <button type='button'
    onClick={()=>emptyCart()}
    >clear cart</button>
</div>
</>)
}
export default Cart