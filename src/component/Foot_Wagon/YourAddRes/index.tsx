import React, { useState } from "react";
import './style.css';

export const YourAddRes: React.FC = (): JSX.Element => {
    const [drive, setDrive] = useState(1)
    return (
        <div className="YourAddRes">
            <div className="Addres">
                <h1>Are you starving?</h1>
                <p>Within a few clicks, find meals that are accessible near you</p>
                <div className="Addres_Write">
                    <div className="Deliver_Pickup">
                        <button onClick={() => setDrive(1)} className={drive == 1 ? "activ" : "noactiov"}><i className="fa fa-bicycle" aria-hidden="true"></i>Delivery</button>
                        <button onClick={() => setDrive(2)} className={drive == 2 ? "activ" : "noactiov"}><i className="fa fa-shopping-cart" aria-hidden="true"></i>Pickup</button>
                    </div>
                    <div className="Enter_Addres">
                        <div>
                            <label htmlFor="addres"><i className="fa fa-map-marker" aria-hidden="true" ></i></label>
                            <input placeholder="Enter Your Address" id="addres"/>
                        </div>
                        <button><i className="fa fa-search" aria-hidden="true"></i>Find Food</button>
                    </div>
                </div>
            </div>
            <div className="imgesBase">
                <img src="https://media-cdn.tripadvisor.com/media/photo-s/16/62/42/6c/caption.jpg"/>
            </div>
        </div>
    )
}