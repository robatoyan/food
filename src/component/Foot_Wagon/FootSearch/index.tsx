import React from "react";
import './style.css';

export const FootSearch: React.FC = (): JSX.Element => {
    return (
        <div className="FootSearch">
            <div className="FootLogo">
                <img src="/imgLogo/imgLogo.jpg" />
                <h2>food<span>waGon</span></h2>
            </div>
            <div className="Deviler_to">
                <h3>Deliver to: </h3>
                <i className="fa fa-map-marker" aria-hidden="true"></i>
                <p>Current Location</p>
                <h4>Mohammadpur Bus Stand, Dhaka</h4>
            </div>
            <div className="SearchFoot">
                <label htmlFor="SearchFoot"><i className="fa fa-search" aria-hidden="true"></i></label>
                <input placeholder="Search Food" id="SearchFoot" />
                <button> <i className="fa fa-user" aria-hidden="true"></i>Login</button>
            </div>
        </div>
    )
}