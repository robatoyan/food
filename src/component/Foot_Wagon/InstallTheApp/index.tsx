import React from 'react';
import './style.css';

export const InstalTheApp: React.FC = (): JSX.Element => {
    return (
        <div className='InstalTheApp'>
            <div className='instalAppReducer'>
                <div className='installAppIpone'>
                    <div className='imgIpone'>
                        <img src='imginstallApp/iPhone.png' className='ipone' />
                        <img src='imginstallApp/img11.png' className='ipone1' />
                    </div>
                    <div className='download'>
                        <h2>Install the app</h2>
                        <p>
                            It's never been easier to order food. Look for the<br />
                            finest discounts and you'll be lost in a world<br />
                            of delectable food.
                        </p>
                        <div className='downoladsImg'>
                            <img src='imginstallApp/GooglePlay.png' />
                            <img src='imginstallApp/AppStore.png' />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}