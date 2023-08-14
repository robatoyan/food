import React from 'react';
import './style.css';
import { useSelector } from 'react-redux';
import { selectEat } from '../../../features/eatSlice';
import { Remainings } from '../../../app/type';

export const Remaining: React.FC = (): JSX.Element => {
    const remaining = useSelector(selectEat)
    return (
        <div className='Remaining'>
            {
                remaining.remining.map((e: Remainings) => {
                    return (
                        <div className='Remaining-Data' key={e.id}>
                            <div className='imgRemaining'>
                                <img src={e.img} />
                                <div className='Discount'>
                                    <h2>{e.discount}</h2>
                                    <div>% off</div>
                                </div>
                            </div>
                            <div className='DaysRemaining'>
                                <h2>Greys Vage</h2>
                                <h3>6 Days Remaining</h3>
                            </div>

                        </div>
                    )
                })
            }
        </div>
    )
}