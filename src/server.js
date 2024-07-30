const mongoose = require('mongoose');
const express = require('express');
const cors = require('cors');
const app = express();
const bodyParser = require("body-parser");
app.use(bodyParser.json());
app.use(cors())

// app.post('./artDetails',((req,res)=>{
//     const formData = req.body;
//     const artFormDetails = new artDetails({
//         name:formData.name,
//         age:formData.age,
//         artDescription:formData.artDescription
//     })
//     artFormDetails.save().then((res)=>{
//         console.log(res)
//     })
// }))




mongoose.connect("mongodb://localhost:27017/myDataBase",{
    useNewUrlParser: true,
    useUnifiedTopology:true,
})

const ArtSchema = new mongoose.Schema({
    name:String,
    age:String,
    artDescription:String
})

const artDetails = mongoose.model("artDetails",ArtSchema);

app.post("/artDetails", async(req,res)=>{
    try{
        const {name, age, artDescription} =req.body;
        const newArtSchema = ArtSchema({
            name,
            age,
            artDescription
        })
        await newArtSchema.save();
        res.status(203).json({message:"Sadinchav captain"})
    }

    catch(error){
        console.error();
        res.status(500).json({message:"ekkado tappu jarigingi captain"})
    }
})

// const newDetails = artDetails({
//     name:"Narayana",
//     age:"24",
//     artDescription:"first time"
// })

// newDetails.save()

const PORT = 3002;
app.listen(PORT,()=>{
    console.log(`Server is running at ${PORT}`)
})