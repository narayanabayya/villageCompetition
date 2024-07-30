import { useState } from "react";

const Playground = () => {
    const [count, setCount] = useState(0);
    const [artistName, setArtistName] = useState("Narayana");

    const handleChangeText = (e) => {
        setArtistName(e.target.value)
    }

    const ScoreIncrement = () => {
        setCount(count + 1)
    }

    const ScoreDecrement = () => {
        if (count > 0) {
            setCount(count - 1)
        }
    }

    return (
        <div style={{
            color: "red",
            textAlign: "center",
            display:"flex",
            flexDirection:"column",
            justifyContent:"center",
            alignItems:"center"
        }}>
            <input type="text" onChange={handleChangeText} />
            <h1>Artist Name:{artistName}</h1>
            Score:{count}
            <div>
                <button onClick={ScoreIncrement}>Increase Score</button>
                <button onClick={ScoreDecrement}>Decrease Score</button>
            </div>
        </div>
    );
}

export default Playground