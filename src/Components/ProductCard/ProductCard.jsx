import React from 'react'
import { Link } from 'react-router-dom'
import './ProductCard.css'


const ProductCard = ({producto}) => {
  return (
    <Link to={'/detail/' + producto.id}>
        <div className='productCardContainer'>
            <img src={producto.image} width={'100%'} height={'100%'} />
            <div className='containerInfo'>
              <h2>"{producto.nombre}"</h2>
              <h3 className='h3Categoria'>{producto.categoria}</h3>
              <h3 className='h3Precio'>$ {producto.precio}</h3>
            </div>
        </div>
    </Link>
  )
}

export default ProductCard