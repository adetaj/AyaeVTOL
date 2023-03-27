import mongoose from "mongoose";
medicationSchema = new mongoose.schema(
    {
    
        name: {
            type: String,
            required: true,
        },
        medweight: {
            type: Number,
            required: true,
        },
        code: {
            type: String,
            required: true,
        },
        imageUrl: {
            type: String,
        },
        
    {
    timestamps: true,
   
    toJSON:{virtuals:true},
    }    
}
);

const MedicationModel = mongoose.model("MedicationModel", medicationSchema);
export default Medicationmodel;