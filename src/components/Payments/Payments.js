import React from 'react';
import Styles from '../Payments/Styles/Payments.module.css';
const Payments = () => {
    return (
        <div className={Styles.payments}>
            <h2>Payment Method</h2>
            <p>Select Your Payment Method And proceed And The Withdrawals</p>

            <div className={Styles.paymentButton}>
                <button>Paystack</button>
                <button>Bank Transfer</button>                        
            </div>            
        </div>
    )
}

export default Payments
