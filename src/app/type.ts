
export type Remainings = {
    id: number,
    img: string,
    discount: number,
    daysRemining: number
}
export type ToUseFoots = {
    id: number,
    img: string,
    title: string,
    text: string
}
export type FeaturedRestauran = {
    id: number,
    img: string,
    resturanimgs: string,
    resturanTitle: string,
    discount: number,
    wisheli: number,
    btn: boolean
}
export type SearchByFoots = {
    id: number,
    img: string,
    title: string
}
export type PopularItems = {
    id: number,
    img: string,
    name: string,
    place: string,
    mony: number,
}
export type OurTopCiti = {
    cities: string[]
}
export type Contactss={
    title:string
    contacts:string[]
}