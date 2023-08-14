import React from "react";
import './style.css';
import { useSelector } from "react-redux";
import { btn, selectEat, wisheliPluce } from "../../../features/eatSlice";
import { FeaturedRestauran } from "../../../app/type";
import { useDispatch } from "react-redux";

export const FeaturedRestaurants: React.FC = (): JSX.Element => {
    const dispach = useDispatch()
    const resturan = useSelector(selectEat)

    return (
        <div className="FeaturedRestaurants">
            <h2>Featured Restaurants</h2>
            <div className="Features">
                {
                    resturan.featuresRestorans.map((e: FeaturedRestauran) => {
                        return (
                            <div className="Resturan" key={e.id}>
                                <div className="imgesFeatures">
                                    <img src={e.img} className="imgEat" />
                                    <div className="discountResturan">
                                        <div className="diuscontOff"><i className="fa fa-tag" aria-hidden="true"></i><h4>{e.discount}%</h4> <h4>off</h4></div>
                                        <div className="Fast"><i className="fa fa-clock-o" aria-hidden="true"></i><h4>Fast</h4></div>
                                    </div>
                                </div>
                                <div className="resturanimgs">
                                    <img src={e.resturanimgs} />
                                    <div className="resturanTitle">
                                        <h3>{e.resturanTitle}</h3>
                                        <div className="wisheli">
                                            <i className="fa fa-star" aria-hidden="true" onClick={() => dispach(wisheliPluce(e.id))}></i>
                                            <p>{e.wisheli}</p>
                                        </div>
                                    </div>
                                </div>
                                {
                                    e.btn ?
                                        <button className="btn now" onClick={() => dispach(btn(e.id))}>Open Now</button>
                                        :
                                        <button className="btn tomorrow" onClick={() => dispach(btn(e.id))}>Opens tomorrow</button>
                                }
                            </div>
                        )
                    })
                }
            </div>
            <button className="ViewAll">View All<i className="fa fa-angle-right" aria-hidden="true"></i></button>
        </div >
    )
}