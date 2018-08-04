interface IRestaurantLocation {
    address: string,
    locality: string,
    city: string,
    latitude: string,
    longitude: string,
    zipcode: string
}

interface IRestaurantRating {
    aggregate_rating: string,
    votes: string
}

export interface IRestaurant {
    id: string,
    name: string,
    url: string,
    location: IRestaurantLocation,
    priceRange: string,
    rating: IRestaurantRating,
    thumb: string,
    featured_image: string,
    cusinies: string[]
}