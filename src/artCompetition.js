import './artCompetition.css';
import axios from 'axios';

const ArtCompetition = () => {
    const handleSubmit = async(event) => {
        const formData = {
            name: event.target.name.value,
            age: event.target.age.value,
            artDescription: event.target.artDescription.value
        };
        event.preventDefault();
        console.log(formData);
        try{
            await axios.post("http://localhost:3002/artDetails",{
                    method:"POST",
                    headers:{
                        "Content-Type":"application/json"
                    },
                    body:JSON.stringify(formData)
                }).then((result)=>{
                    console.log(result,"Form submitted successfully")
                }).catch((err)=>{
                    console.log(err)
                })
            console.log("completed succesfully")
        }
        catch(error){
            console.error("failed",error)
        }

        // fetch('http://localhost:3002/artDetails',{
        //     method:"POST",
        //     headers:{
        //         "Content-Type":"application/json"
        //     },
        //     body:JSON.stringify(formData)
        // }).then((result)=>{
        //     console.log(result,"Form submitted successfully")
        // }).catch((err)=>{
        //     console.log(err)
        // })

        event.preventDefault();
        event.target.name.value=" ";
        event.target.age.value="";
        event.target.artDescription.value="";
    }


    return (
        <div className='formData'>
            <form onSubmit={handleSubmit}>
                <h1>Art Competition Form</h1>
                <label>Name:</label>
                <input type="text" name='name' />
                <label>Age:</label>
                <input type="number" name='age' />
                <label>Art Description</label>
                <textarea name="artDescription"></textarea>
                <button type="submit" >submit</button>
            </form>
        </div>

    );
}

export default ArtCompetition;