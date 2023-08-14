import React, { useRef, useCallback, useContext } from "react";
import './style.css';
import { useSelector } from "react-redux";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { selectEat } from "../../../features/eatSlice";
import { PopularItems } from "../../../app/type";
import { SwiperSliderPopular } from "./swiperSliderPopular";
import { MyContext } from "../../../app/myContext";


export const Popular_Items: React.FC = (): JSX.Element => {
    const popularItem = useSelector(selectEat)
    const { sliderRef } = useContext(MyContext)


    const swiper = useSwiper()
    return (
        <div className="Popular_Items">
            <h2>Popular items</h2>
            <Swiper
                ref={sliderRef}
                breakpoints={{
                    0: {
                        slidesPerView: 1,
                        spaceBetween: 10
                    },
                    480: {
                        slidesPerView: 2,
                    },
                    768: {
                        slidesPerView: 3,
                    },
                    1024: {
                        slidesPerView: 3,
                    },
                    1280: {
                        slidesPerView: 3,
                    }

                }}
                autoHeight={true}
                pagination={{
                    clickable: true,
                }}
                modules={[Navigation]}
                className="mySwiperPopular"
            >
                {
                    popularItem.popularItems.map((e: PopularItems) => {
                        return (
                            <SwiperSlide key={e.id}>
                                <div className='swiperPopular'>
                                    <img src={e.img} />
                                    <h3>{e.name}</h3>
                                    <div><i className="fa fa-map-marker" aria-hidden="true"></i><h4>{e.place}</h4></div>
                                    <h4 className="PopularMony">${e.mony}</h4>
                                    <button>Order Now</button>
                                </div>
                            </SwiperSlide>
                        )
                    })
                }
            </Swiper>
            <SwiperSliderPopular/>
        </div >
    )
}