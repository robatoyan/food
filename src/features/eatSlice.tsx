import { createSlice } from "@reduxjs/toolkit"
import { RootState } from "../app/store"
import { Contactss, FeaturedRestauran, OurTopCiti, PopularItems, Remainings, SearchByFoots, ToUseFoots } from "../app/type"

const initialState: {
    remining: Remainings[],
    touseFoot: ToUseFoots[],
    featuresRestorans: FeaturedRestauran[],
    searchByFoots: SearchByFoots[],
    popularItems: PopularItems[],
    cities: OurTopCiti[],
    contacts: Contactss[]
} = {
    remining: [
        { id: 1, img: "/img/image1.jpg", discount: 15, daysRemining: 6 },
        { id: 2, img: "/img/image2.png", discount: 10, daysRemining: 6 },
        { id: 3, img: "/img/image3.png", discount: 25, daysRemining: 7 },
        { id: 4, img: "/img/image4.png", discount: 20, daysRemining: 8 },
    ],
    touseFoot: [
        { id: 1, img: "imgToUseFoot/img2.png", title: "Select location", text: "Choose the location where your food will be delivered." },
        { id: 2, img: "imgToUseFoot/img1.png", title: "Choose order", text: "Check over hundreds of menus to pick your favorite food" },
        { id: 3, img: "imgToUseFoot/img3.png", title: "Pay advanced", text: "It's quick, safe, and simple. Select several methods of payment" },
        { id: 4, img: "imgToUseFoot/img4.png", title: "Enjoy meals", text: "Food is made and delivered directly to your home." }
    ],
    featuresRestorans: [
        { id: 1, img: "imgRestoran/img1.png", resturanimgs: "imgRestoran/img11.png", resturanTitle: "Foodworld", discount: 20, wisheli: 46, btn: false },
        { id: 2, img: "imgRestoran/img2.png", resturanimgs: "imgRestoran/img22.png", resturanTitle: "Pizzahub", discount: 15, wisheli: 40, btn: false },
        { id: 3, img: "imgRestoran/img3.png", resturanimgs: "imgRestoran/img33.png", resturanTitle: "Donuts hut", discount: 10, wisheli: 20, btn: false },
        { id: 4, img: "imgRestoran/img4.png", resturanimgs: "imgRestoran/img44.png", resturanTitle: "Donuts hut", discount: 15, wisheli: 50, btn: false },
        { id: 5, img: "imgRestoran/img5.png", resturanimgs: "imgRestoran/img55.png", resturanTitle: "Ruby Tuesday", discount: 10, wisheli: 26, btn: false },
        { id: 6, img: "imgRestoran/img6.png", resturanimgs: "imgRestoran/img66.png", resturanTitle: "Kuakata Fried Chicken", discount: 25, wisheli: 53, btn: false },
        { id: 7, img: "imgRestoran/img77.png", resturanimgs: "imgRestoran/img7.png", resturanTitle: "Red Square", discount: 10, wisheli: 45, btn: false },
        { id: 8, img: "imgRestoran/img8.png", resturanimgs: "imgRestoran/img88.png", resturanTitle: "Taco Bell", discount: 10, wisheli: 35, btn: false }
    ],
    searchByFoots: [
        { id: 1, img: "/imgSearchByFoot/img1.png", title: "Pizza" },
        { id: 2, img: "/imgSearchByFoot/img2.png", title: "Burger" },
        { id: 3, img: "/imgSearchByFoot/img3.png", title: "Noodles" },
        { id: 4, img: "/imgSearchByFoot/img4.png", title: "Sub-sandiwch" },
        { id: 5, img: "/imgSearchByFoot/img5.png", title: "Chowmein" },
        { id: 6, img: "/imgSearchByFoot/img6.png", title: "Steak" },
        { id: 7, img: "/imgSearchByFoot/img1.png", title: "Pizza" },
        { id: 8, img: "/imgSearchByFoot/img2.png", title: "Burger" },
        { id: 9, img: "/imgSearchByFoot/img3.png", title: "Noodles" },
        { id: 10, img: "/imgSearchByFoot/img4.png", title: "Sub-sandiwch" },
    ],
    popularItems: [
        { id: 1, img: "imgPopularItem/img1.png", name: "Cheese Burger", place: "Burger Arena", mony: 3.88 },
        { id: 2, img: "imgPopularItem/img2.png", name: "Toffe’s Cake", place: "Top Sticks", mony: 4.01 },
        { id: 3, img: "imgPopularItem/img3.png", name: "Dancake", place: "Cake World", mony: 1.99 },
        { id: 4, img: "imgPopularItem/img4.png", name: "Crispy Sandwitch", place: "Fastfood Dine", mony: 3.20 },
        { id: 5, img: "imgPopularItem/img5.png", name: "Thai  Soup", place: "Foody man", mony: 2.79 },
        { id: 6, img: "imgPopularItem/img1.png", name: "Cheese Burger", place: "Burger Arena", mony: 3.88 },
        { id: 7, img: "imgPopularItem/img2.png", name: "Toffe’s Cake", place: "Top Sticks", mony: 4.01 },
        { id: 8, img: "imgPopularItem/img3.png", name: "Dancake", place: "Cake World", mony: 1.99 },
        { id: 9, img: "imgPopularItem/img4.png", name: "Crispy Sandwitch", place: "Fastfood Dine", mony: 3.20 },
        { id: 10, img: "imgPopularItem/img5.png", name: "Thai  Soup", place: "Foody man", mony: 3.88 }
    ],
    cities: [
        { cities: ["San Francisco", "Miami", "San Diego", "East Bay", "Long Beach"] },
        { cities: ["Los Angeles", "Washington DC", "Seattle", "Portland", "Nashville"] },
        { cities: ["New York City", "Orange County", "Atlanta", "Charlotte", "Denver"] },
        { cities: ["Chicago", "Phoenix", "Las Vegas", "Sacramento", "Oklahoma City"] },
        { cities: ["Columbus", "New Mexico", "Albuquerque", "Sacramento", "New Orleans"] }
    ],
    contacts: [
        {
            title: "Company", contacts: [
              "About us","Team","Careers","Blog"
            ]
        },
        {
            title: "Contact", contacts: [
                "Help & Support","Partner with us ","Ride with us"
            ]
        },
        {
            title: "Legal", contacts: [
                "Terms & Conditions","Refund & Cancellation","Privacy Policy","Cookie Policy"
            ]
        },
    ]
}

const eatSlice = createSlice({
    name: "eat",
    initialState,
    reducers: {
        btn: (state, action) => {
            let s = state.featuresRestorans.find((e: FeaturedRestauran) => e.id == action.payload)
            if (s) {
                s.btn = !s.btn
            }
        },
        wisheliPluce: (state, action) => {
            let s = state.featuresRestorans.find((e: FeaturedRestauran) => e.id == action.payload)
            if (s) {
                s.discount++
            }
        }
    }
})

export const { btn, wisheliPluce } = eatSlice.actions
export const selectEat = (state: RootState) => state.eat
export default eatSlice.reducer