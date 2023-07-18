import React, { useState } from 'react'
import { useCustomContext } from '../../ContextProvider/ContextProvider';
import './Counter.css'

const Counter = ({initialValue, stock, id}) => {
    const {addProductCart} = useCustomContext()
    const [quantity, setQuantity] = useState(initialValue)
    const onClickAddProduct = () => {
        addProductCart(id, quantity)
        Swal.fire(
            'Well Done!',
            'Your product was added to the cart!',
            'success'
        )
    }
    return (
        <>
            <div className='containerBotonesCantidad'>
                <button className='btnMenosMas' onClick={()=>setQuantity(quantity>1 ? quantity - 1 : quantity)}>-</button>
                <span>{quantity}</span>
                <button className='btnMenosMas' onClick={()=>setQuantity(quantity === stock ? quantity  : quantity + 1)}>+</button>
            </div>
            <button className='btn-Comprar' onClick={onClickAddProduct}><span>Comprar</span></button>
        </>
    )
}

export default Counter