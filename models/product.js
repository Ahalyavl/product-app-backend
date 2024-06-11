

const mongoose = require("mongoose")
const schema = mongoose.Schema(
    {
        
       
        "productId": String,
        "productName":String,
        "category":String,
       " price":String
    }
)

let productmodel=mongoose.model("producss",schema);
module.exports={productmodel}