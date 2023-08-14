import React, { useCallback, useRef } from "react";
import { FootSearch } from "./FootSearch";
import { YourAddRes } from "./YourAddRes";
import { Remaining } from "./Remaining";
import { ToUseFoot } from "./ToUseFoot-Wagon";
import { Popular_Items } from "./Popular_items";
import { FeaturedRestaurants } from "./Featured_Restaurants";
import { SearchByFood } from "./SearchByFood";
import { TheDaysWork } from "./Theday'sWork";
import { InstalTheApp } from "./InstallTheApp";
import { MyContext } from "../../app/myContext";
import { TheBestDishes } from "./TheBestDishes";
import { ProceedToOrder } from "./ProceedToOrder";
import { Contacts } from "./Contacts";

export const FootWagon: React.FC = (): JSX.Element => {
    const sliderRef = useRef<any>(null);

    const handlePrev = useCallback(() => {
        if (!sliderRef.current) return;
        sliderRef.current.swiper.slidePrev();
    }, []);

    const handleNext = useCallback(() => {
        if (!sliderRef.current) return;
        sliderRef.current.swiper.slideNext();
    }, []);
    const sliderRefSearch = useRef<any>(null);

    const handlePrevs = useCallback(() => {
        if (!sliderRefSearch.current) return;
        sliderRefSearch.current.swiper.slidePrev();
    }, []);

    const handleNexts = useCallback(() => {
        if (!sliderRefSearch.current) return;
        sliderRefSearch.current.swiper.slideNext();
    }, []);
    return (
        <div>
            <MyContext.Provider value={{ handlePrev, handleNext, sliderRef, sliderRefSearch, handlePrevs, handleNexts }}>
                <FootSearch />
                <YourAddRes />
                <Remaining />
                <ToUseFoot />
                <Popular_Items />
                <FeaturedRestaurants />
                <SearchByFood />
                <TheDaysWork />
                <InstalTheApp />
                <TheBestDishes />
                <ProceedToOrder />
                <Contacts />
            </MyContext.Provider>
        </div>
    )
}