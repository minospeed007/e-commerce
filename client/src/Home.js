import React from 'react'
import ItemCard from './ItemCart'
import data from './data'
const Home=()=>{
return(<>
<div >
{data.productData.map((item, index)=>{
return(
    <ItemCard img={item.img}
        title={item.title}
        desc={item.desc}
        price={item.price}
        item={item}
       key={index}
    />
)
})}
    
</div>
</>)
}
export default Home