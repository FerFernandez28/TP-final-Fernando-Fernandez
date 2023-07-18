import React from 'react'
import './ProductCartCard.css'

const ProductCartCard = ({producto}) => {
    return (
        <div className='productoCartCardContainer'>
            <img src={producto.image} width={'150px'} />
            <div className='productoCartCardInfo'>
                <h3>{producto.categoria}</h3>
                <h2>{producto.nombre}</h2>
                <h3>$ {producto.precio}</h3>
                <p>Cantidad: {producto.quantity}</p>
            </div>
        </div>
    )
}

export default ProductCartCard