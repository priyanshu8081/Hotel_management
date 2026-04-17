import mongoose, { set } from "mongoose";

const listingSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: String,
    image: {
            type: String,
            default: "https://images.unsplash.com/photo-1584132967334-10e028bd69f7?fm=jpg&q=60&w=3000",
            set: (v) => v === "" ? undefined : v   
    },
    price: Number,
    location: String,
    country: String
})

export const listingModel = mongoose.model("Listings", listingSchema);