import React from 'react'
import './ProductCartCard.css'
import { NavLink } from 'react-router-dom'
import { useCustomContext } from '../../ContextProvider/ContextProvider';

const ProductCartCard = ({producto}) => {
    const { removeProductFromCart } = useCustomContext();

    const handleRemoveClick = () => {
    removeProductFromCart(producto.id); // función para remover el producto del carrito
};
    return (
        <div className='productoCartCardContainer'>
            <NavLink className='productoCard' to={'/detail/' + producto.id}>
                <img src={producto.image} width={'150px'} alt={producto.nombre} />
                <div className='productoCartCardInfo'>
                    <h3>{producto.categoria}</h3>
                    <h2>{producto.nombre}</h2>
                    <h3>$ {producto.precio}</h3>
                    <p>Cantidad: {producto.quantity}</p>
                </div>
            </NavLink>
            <button className='btn-Remove' onClick={handleRemoveClick}>Remove</button>
        </div>
    );
};
export default ProductCartCard