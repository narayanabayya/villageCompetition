import { useEffect, useState } from "react";

const FetchingData = () => {
    const [data, setData] = useState([])
    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/todos").then((response) => {
            return response.json();
        }).then((json) => {
            return setData(json);
        });
    }, []);
    return(
        <div>
            <h1>Data Fetching Api</h1>

            <div>
                {data.map((items)=>{
                    return(<li>{items.title}</li>)
                })}
            </div>
        </div>
        
    );
}

export default FetchingData