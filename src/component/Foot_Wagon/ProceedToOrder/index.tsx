import React from 'react';
import './style.css';

export const ProceedToOrder: React.FC = (): JSX.Element => {
    return (
        <div className='ProceedToOrder'>
            <img src='imgProceedToOrder/img.png' />
            <div className='Proceed'>
                <h2>Are you ready to order with<br /> the best deals?</h2>
                <button>Proceed to order<i className="fa fa-chevron-right" aria-hidden="true"></i></button>
            </div>
        </div>
    )
}