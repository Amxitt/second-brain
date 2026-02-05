import axios from "axios";

import { BACKEND_URL } from "../pages/config";
import { useState } from "react";

export function useContent(){
    const [contents , setContents] = useState([])

    function refresh(){
        axios.get(BACKEND_URL + "/content/content",{withCredentials: true}) 
            .then((res) => {
            setContents(res.data.content)
        })
    }

    return {contents, refresh}
}