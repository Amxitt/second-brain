import axios from "axios";
import { useEffect, useState } from "react"
import { BACKEND_URL } from "./config";
import { useParams } from "react-router-dom";
import { Card } from "../components/Ui library/Card";

export function PublicBrains(){
    const { share } = useParams();

    useEffect(() => {
        if (!share) return;
        fetchContent();
    }, [share]);

   
    const [content, setContent] = useState([]);

    async function fetchContent(){
        const res = await axios.get(BACKEND_URL + "/brain/" + share )

        setContent(res.data.content)
    }

    return <div className=" h-screen w-screen bg-gray-200">
       <div className="flex justify-center p-4 text-2xl text-purple-600"> <p>You are looking at your friends publically shared  brain.</p></div>
       <div className="flex flex-wrap gap-2 justify-center items-start bg-white">
      {content?.map(({type, link , title })=> <Card
       title={title} 
       link={link} 
       type={type}
      />)}
       </div>
    </div>
}