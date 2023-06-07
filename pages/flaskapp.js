import React, { useState } from "react";
import axios from "axios";

export default function Flask() {
    const [comment, setComment] = useState('');
    const [prediction, setPrediction] = useState('');

    const handleSubmit= async(e)=>{
        e.preventDefault();

        try{
            const response= await axios.post('/api/flaskapi', {comment});
            setPrediction(response.data.prediction);
        } catch(error){
            console.error(error);
        }
    }

    
    return (
        <div>
            <h1 className=" text-4xl font-bold text-green-800">Spam comment detection</h1>
            <form onSubmit={handleSubmit}>
                <input type="text"
                value={comment} onChange={(e)=>setComment(e.target.value)} placeholder="Enter the comment"/>
                <button className=" p-4 bg-slate-600 text-white" type="submit">Predict</button>
            </form>
            <h2 className="text-2xl">Prediction: </h2>
            {prediction && (
                <div> 
                    <p>{prediction}</p>
                </div>
            )}
        </div>
    );
}
