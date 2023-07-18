import React from 'react'
import './Footer.css'

const Footer = () => {
    return (
        <footer className='containerFooter'>
            <div className='primerColumna'>
                <h2>Constructor</h2>
                <p>12 Water St. Vacouver, BC <br/>
                V6B 132 United States</p>
            </div>
            <div className='columnasMedio'>
                <p>Corporate sales</p>
                <p>Feedback</p>
                <p>Jobs</p>
                <p>News</p>
                <p>Sales Rules</p>
                <p>For partners</p>
            </div>
            <div className='columnasMedio'>
                <p>Bonus program</p>
                <p>Gift Сards</p>
                <p>Bill Payment Verification</p>
                <p>Loans</p>
                <p>Delivery</p>
                <p>Service centers</p>
            </div>
            <div className='columnasMedio'>
                <p>How to place an order</p>
                <p>Ways of payment</p>
                <p>Exchange and return of goods</p>
                <p>Warranty service</p>
                <p>Order status</p>
                <p>Knowledge base</p>
            </div>
            <div className='tercerColumna'>
                <p>2030 Comapny. All Rights Reserved.</p>
                <p>Terms & Conditions</p>
                <p>Privacy Policy</p>
            </div>
        </footer>
    )
}

export default Footer