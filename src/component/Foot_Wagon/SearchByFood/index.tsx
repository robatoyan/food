import React, { useContext } from "react";
import './style.css';
import { Swiper, SwiperSlide } from "swiper/react";
import { useSelector } from "react-redux";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "react-multi-carousel/lib/styles.css";
import { Pagination, Navigation } from "swiper";
import { useSwiper } from "swiper/react";
import { selectEat } from "../../../features/eatSlice";
import { SlideSwipers } from "./slideSwipers";
import { SearchByFoots } from "../../../app/type";
import { MyContext } from "../../../app/myContext";
//aziz npm install react-multi-carousel es em arel

export const SearchByFood: React.FC = (): JSX.Element => {
    const searchByFoods = useSelector(selectEat)
    const {sliderRefSearch}=useContext(MyContext)
    return (
        <div className="SearchByFood">
            <div className="Slider">
                <SlideSwipers />
                <Swiper
                    ref={sliderRefSearch}
                    breakpoints={{
                        0: {
                            slidesPerView: 1,
                            spaceBetween: 10
                        },
                        480: {
                            slidesPerView: 2,
                            spaceBetween: 10
                        },
                        768: {
                            slidesPerView: 3,
                            spaceBetween: 15
                        },
                        1024: {
                            slidesPerView: 4,
                            spaceBetween: 15
                        },
                        1280: {
                            slidesPerView: 5,
                            spaceBetween: 30
                        }

                    }}
                    autoHeight={true}
                    pagination={{
                        clickable: true,
                    }}
                    modules={[Navigation]}
                    className="mySwiper"
                >
                    {
                        searchByFoods.searchByFoots.map((e: SearchByFoots) => {
                            return (
                                <SwiperSlide key={e.id}>
                                    <div className="divSearchByFoods">
                                        <img src={e.img} />
                                        <h2>{e.title}</h2>
                                    </div>
                                </SwiperSlide>
                            )
                        })
                    }
                </Swiper>
            </div>
        </div >
    )
}