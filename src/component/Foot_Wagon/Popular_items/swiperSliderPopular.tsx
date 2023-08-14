import React, { useContext } from "react";
import { useSwiper } from "swiper/react";
import { MyContext } from "../../../app/myContext";

export const SwiperSliderPopular: React.FC = (): JSX.Element => {
    const swiper = useSwiper()
    const { handlePrev, handleNext } = useContext(MyContext)

    return (
        <div className="SwiperSliderPopular">
            <button onClick={handlePrev}><i className="fa fa-chevron-left" aria-hidden="true"></i></button>
            <button onClick={handleNext}><i className="fa fa-chevron-right" aria-hidden="true"></i></button>
        </div>
    )
}