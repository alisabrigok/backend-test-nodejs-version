import mongoose from "mongoose";

const CurrencySchema = new mongoose.Schema({
    name: String,
    value: Number
});

export default mongoose.model("Currency", CurrencySchema);