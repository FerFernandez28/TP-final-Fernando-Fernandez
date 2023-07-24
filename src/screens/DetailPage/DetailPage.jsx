import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useCustomContext } from '../../ContextProvider/ContextProvider'
import './DetailPage.css'
import { Counter } from '../../Components'

const DetailPage = () => {
    const {id} = useParams()
    const {getProductById, addProductCart, isInCart, getProductCartById} = useCustomContext()
    const [productDetail, setProductDetail] = useState(isInCart(id) ? getProductCartById(id) : getProductById(id))

  return (
    <div className='detailPageContainer'>
      <div className='productInfo'>
        <h2>{productDetail.nombre}</h2>
        <h3>{productDetail.categoria}</h3>
      </div>
      <div className='detailProductContainer'>
        <div className='detailPageProduct'>
          <img src={productDetail.image} width={'225px'} />
          <h2>$ {productDetail.precio}</h2>
        </div>
        <div className='descriptionProduct'>
          <div className='containerDescriptionInfo'>
            <h2>Description :</h2>
            <p>{productDetail.descripcion}</p>
          </div>
          <div className='cajaDeColores'>
            <div className='tituloColors'>
              <h3 >Colors:</h3>
            </div>
            <div className='contenedorDeColores'>
              <div className='primerColor'>
                <i className="bi bi-circle-fill"></i>
                <p>Black</p>
              </div>
              <div className='segundoColor'>
                <i className="bi bi-circle-fill"></i>
                <p>Orange</p>
              </div>
              <div className='tercerColor'>
                <i className="bi bi-circle-fill"></i>
                <p>Green</p>
              </div>
            </div>
          </div>
          <div>
            {
                isInCart(id)
                ?
                <Counter initialValue={productDetail.quantity} stock={productDetail.stock} id={productDetail.id} />
                :
                <Counter initialValue={1} stock={productDetail.stock} id={productDetail.id} />
            }
          </div>
        </div>
      </div>
    </div>
  )
}

export default DetailPage