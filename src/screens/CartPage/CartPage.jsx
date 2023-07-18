import React from 'react'
import { useCustomContext } from '../../ContextProvider/ContextProvider'
import { ProductCard, ProductCartCard } from '../../Components'
import './CartPage.css'

const CartPage = () => {
  const {cart, getTotal} = useCustomContext()
  console.log(getTotal())
  return (
    <>
      {cart.length > 0 ? (
        <div className='containerCartPage'>
          <div className='tituloCart'>
            <h2 >Shopping Cart</h2>
          </div>
          <div className='containerCarrito'>
            <div className='productosCarrito'>
              {cart.map((product) => (
                <ProductCartCard producto={product} key={product.id} />
              ))}
            </div>
            <div className='containerTotal'>
              <div className='subtotalInfo'>
                <div>
                  <h3>Subtotal</h3>
                </div>
                <div>
                  $ 
                  {getTotal()
                    .toFixed(2)
                    .replace('.', '#')
                    .replace(',', '.')
                    .replace('#', ',')}
                </div>
              </div>
              <div className='btn-Checkout'>
                <p>
                  This order is in USD. Applicable taxes, shipping, coupons or special offers will be applied at Checkout.
                </p>
                <button>Checkout</button>
              </div>
            </div>            
          </div>
          
        </div>
      ) : (
        <h2>No has comprado nada aún</h2>
      )}
    </>
  );
};



export default CartPage