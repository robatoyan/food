import React from "react";
import './style.css';
import { useSelector } from "react-redux";
import { selectEat } from "../../../features/eatSlice";
import { ToUseFoots } from "../../../app/type";

export const ToUseFoot: React.FC = (): JSX.Element => {
    const toUse = useSelector(selectEat)
    return (
        <div className="ToUseFoot">
            <h2>How does it work</h2>
            <div className="ToUseWork">
                {
                    toUse.touseFoot.map((e: ToUseFoots) => {
                        return (
                            <div className="ToUse" key={e.id}>
                                <img src={e.img}/>
                                <h3>{e.title}</h3>
                                <p>{e.text}</p>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}