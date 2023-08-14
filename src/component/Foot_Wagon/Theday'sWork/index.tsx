import React from "react";
import './style.css';

export const TheDaysWork: React.FC = (): JSX.Element => {
    return (
        <div className="TheDaysWork">
            <div className="TheDays">
                <div className="Works Daily_Discounts">
                    <img src="/imgTheDaysWork/img1.png" />
                    <h2>Daily Discounts</h2>
                </div>
                <div className="line"></div>
                <div className="Works Live_Tracing">
                    <img src="/imgTheDaysWork/img1.png" />
                    <h2>Live Tracing</h2>
                </div>
                <div className="line"></div>
                <div className="Works Quick_Delivery">
                    <img src="/imgTheDaysWork/img1.png" />
                    <h2>Quick Delivery</h2>
                </div>
            </div>
        </div>
    )
}