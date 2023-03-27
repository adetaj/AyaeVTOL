import mongoose from "mongoose";
evtolSchema = new mongoose.schema(
    {
            serial_no: {
            type: String,
            required: true,
        },
        model: {
            type: String,
            enum: ["Lightweight", "Middleweight", "Cruiserweight", "Heavyweight"],
            default: "Lightweight",
        },
        evtolweight: {
            type: Number,
            default: 500,
        },
        battery: {
            type: Number,
            default: 100,
        },
        state: {
            type: String,
            enum: [
                "IDLE",
                "LOADING",
                "LOADED",
                "DELIVERING",
                "DELIVERED",
                "RETURNING",
            ],
            default: "IDLE",
        },
        timeRemaininng: {
            type: Number,
            default: 0,
        },
        currentSpeed: {
            type: Number,
            default: 0,
        },
        totalDistance: {
            type: Number,
            default: 0,
        },

    {
    timestamps: true,
   
    toJSON:{virtuals:true},
    }    
}
);

const Evtolmodel = mongoose.model("Evtolmodel", evtolSchema);
export default Evtolmodel;