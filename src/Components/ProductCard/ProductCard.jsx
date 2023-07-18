import React from 'react'
import { Link } from 'react-router-dom'
import './ProductCard.css'


const ProductCard = ({producto}) => {
  return (
    <Link className='linkDetalle' to={'/detail/' + producto.id}>
      <div className='productCardContainer'>
          <img src={producto.image} width={'150px'} />
          <h3 className='h3Categoria'>{producto.categoria}</h3>
          <h2>{producto.nombre}</h2>
          <h3 className='h3Precio'>$ {producto.precio}</h3>
          {/* <p>Descripccion: {producto.descripcion}</p> */}
          {/* <Link  to={'/detail/' + producto.id}>Ver Detalle</Link> */}
      </div>
    </Link>
  )
}

export default ProductCard