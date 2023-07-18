import React, { useEffect, useState } from 'react'
import { useCustomContext } from '../../ContextProvider/ContextProvider'
import { Footer, ProductCard } from '../../Components'
import './HomePage.css'


const HomePage = () => {
    const {products} = useCustomContext()
    const [searchProduct, setSearchProduct] = useState('')
    const [max, setMax] = useState(1000000)
    const [min, setMin] = useState(0)
    const [currentProducts, setCurrentProducts] = useState(products)
    
    useEffect(()=>{
        setCurrentProducts(products.filter(producto => producto.categoria.toLowerCase().includes(searchProduct.toLowerCase()) /* && producto.precio >= min && producto.precio <= max */
        ))
    },[searchProduct, max, min])
    return (        
        <main className='homePageContainer'>
            <div className='containerGibson'>
                <h1>Gibson Store</h1>
                <div className='containerInput'>
                    <i className="bi bi-search"></i>
                    {<input className='inputHomePage' type="text" placeholder='Search Products...' value={searchProduct} onChange={(e)=>setSearchProduct(e.target.value)} />}
                </div>
            </div>
            <div className='colorCardContainer'>
                <div className='colorCardInfo'>
                    {
                        currentProducts.length > 0
                        ?
                        currentProducts.map(producto => (
                        <ProductCard producto={producto} key={producto.id}/>
                        ))
                        :
                        <h2>No se encuentra ningun producto</h2>
                    }
                </div>
                <div className='filtrador'>
                    <div>
                        <h2>Precio</h2>
                        <div>
                            <input type="text" value={min} onChange={(e)=> setMin(Number(e.target.value))} />
                            <input type="text" value={max} onChange={(e)=> setMax(Number(e.target.value))} />
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>
        </main>    
    )
}

export default HomePage