import React, { useEffect, useState } from 'react'
import './Header.css'
import { NavLink, Route, Routes } from 'react-router-dom'
import { useCustomContext } from '../../ContextProvider/ContextProvider'
import LogoImg from '../../Assets/Img/LogoImg.png'

const NavBar = () => {
    const {products} = useCustomContext()
    const [searchProduct, setSearchProduct] = useState('')
    const [currentProducts, setCurrentProducts] = useState(products)
    
    useEffect(()=>{
        setCurrentProducts(products.filter(producto => producto.nombre.toLowerCase().includes(searchProduct.toLowerCase())))
    },[searchProduct])
    return (
        <header className='containerHeader'>
            <div className='brandHeader'>
                <img src={LogoImg}/>
            </div>
            <div className='contenedorBtn'>
                <NavLink to='/'><button className='btn-Home'><i className="bi bi-house-door-fill"></i></button></NavLink>   
            </div>
            <nav className='navBarHeader'>
                <NavLink to='/contact/' className='contactNavLink' data='contacto'>Contact</NavLink>
                <NavLink to='/cart'><i className="bi bi-cart-fill"></i></NavLink>
                
            </nav>
        </header>
    )
}


export default NavBar