import React, { useState } from 'react'
import { useCustomContext } from '../../ContextProvider/ContextProvider'
import { ProductCard, ProductCartCard } from '../../Components'
import './CartPage.css'

const CartPage = () => {
  const { cart, getTotal, clearCart } = useCustomContext();
  const [cartIsEmpty, setCartIsEmpty] = useState(false);

  const onClickAddProduct = () => {
    // Mostrar el mensaje de éxito al realizar la compra
    Swal.fire(
      '¡Thanks for your Purchase!',
      '¡Enjoy!',
      'success'
    );

    // Vaciar el carrito al hacer clic en el botón de checkout
    clearCart();

    // Actualizar el estado para mostrar el mensaje "Tu carrito está vacío"
    setCartIsEmpty(true);
  };

  return (
    <>
      {cart.length > 0 ? (
        <div className='containerCartPage'>
          <div className='tituloCart'>
            <h2>Shopping Cart</h2>
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
                <button onClick={onClickAddProduct}>Checkout</button>
              </div>
            </div>            
          </div>
          
        </div>
      ) : (
        <div className='emptyCart'><h2>Your cart is empty</h2></div>
      )}
    </>
  );
};


export default CartPage