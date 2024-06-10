const mongoose=require("mongoose")
const schema=mongoose.Schema({
    "proname":String,
    "proid":String,
    "price":String,
    "mfd":String
})
let productmodel=mongoose.model("products",schema);
module.exports={productmodel}