import React, { useContext } from "react";
import { useSwiper } from "swiper/react";
import { MyContext } from "../../../app/myContext";

export const SlideSwipers: React.FC = (): JSX.Element => {
    const { handlePrevs, handleNexts } = useContext(MyContext)
    const swiper = useSwiper()

    return (
        <div className="SipersSlidess">
            <h2>Search by Food</h2>
            <div>
                <h3>View All<i className="fa fa-chevron-right" aria-hidden="true"></i></h3>
                <button onClick={handlePrevs}><i className="fa fa-chevron-left" aria-hidden="true"></i></button>
                <button onClick={handleNexts}><i className="fa fa-chevron-right" aria-hidden="true"></i></button>
            </div>
        </div>
    )
}