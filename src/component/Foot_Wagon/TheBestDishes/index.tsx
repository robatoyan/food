import React from 'react';
import './style.css';

export const TheBestDishes: React.FC = (): JSX.Element => {
    return (
        <div className='TheBestDishes'>
            <div className='TheBest'>
                <div className='DisesData'>
                    <h2>
                        Best deals <span> Crispy<br />
                            Sandwiches</span>
                    </h2>
                    <p>
                        Enjoy the large size of sandwiches. Complete<br />
                        perfect slice of sandwiches.
                    </p>
                    <button>Proceed to order<i className="fa fa-chevron-right" aria-hidden="true"></i></button>
                </div>
                <img src='imgTheBestDishes/img1.png' />
            </div>
            <div className='TheBest'>
                <img src='imgTheBestDishes/img2.png' />
                <div className='DisesData'>
                    <h2>
                        Celebrate  parties<br />
                        with<span> Fried Chicken</span>
                    </h2>
                    <p>
                        Get the best fried chicken smeared with a<br />
                        lip smacking lemon chili flavor. Check out<br />
                        best deals for fried chicken.
                    </p>
                    <button>Proceed to order<i className="fa fa-chevron-right" aria-hidden="true"></i></button>
                </div>
            </div>
            <div className='TheBest'>
                <div className='DisesData'>
                    <h2>
                        Wanna eat hot<br />
                        & spicy <span>Pizza?</span>
                    </h2>
                    <p>
                        Pair up with a friend and enjoy the<br />
                        hot and crispy pizza pops. Try it<br />
                        with the best deals.
                    </p>
                    <button>Proceed to order<i className="fa fa-chevron-right" aria-hidden="true"></i></button>
                </div>
                <img src='imgTheBestDishes/img3.png' />
            </div>
        </div>
    )
}