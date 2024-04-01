import axios from "axios";

export default async function handler(req,res){
    if(req.method== 'POST'){
        const {comment}=req.body;
        try{
            const response=await axios.post('https://nospam.onrender.com/webview/predict',{
                comment
            });
            res.status(200).json(response.data);
        } catch(error){
            console.error(error);
            res.status(500).json({error: 'An  error occured ! '});
        } 
    }else{
        res.status(405).json({ error: 'Method not allowed' });
   }
}