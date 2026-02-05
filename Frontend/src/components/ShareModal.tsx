import { CrossIcon } from "../icons/CrossIcon"
import { Button } from "./Ui library/Button"
import { Input } from "./Ui library/Input"
import axios from "axios"
import { BACKEND_URL } from "../pages/config"
import { useEffect, useState } from "react"

interface propType{
    open: boolean,
    onclose: ()=> void
}

export function ShareModal({open, onclose}: propType){
    const [hash, setHash] = useState()


    useEffect(()=>console.log("hehe"),
[hash])

   async function getHash(){
        const res = await axios.post(BACKEND_URL + "/brain/share",{},
            {withCredentials: true}
        )
        if(res.data.hash){
             setHash(res.data.hash)
             console.log(hash)
        }
    }

    return <div>
    {open && <div>
        <div className="w-screen h-screen bg-gray-500 opacity-60 fixed top-0 left-0">
            
        </div> 
        <div className="flex justify-center w-screen h-screen fixed top-0 left-0">
            <div className="flex flex-col justify-center ">
                <span className="bg-white opacity-100 p-4 rounded-md shadow-md">
                    <div onClick={onclose} className="cursor-pointer flex justify-end">
                        <CrossIcon size="sm"/>
                    </div>
                    <div className="font-bold text-purple-800 pt-2">
                        <p>Do you want to share our brain with everyone?</p>
                    </div>
                    <div className="flex justify-center p-4">
                        <Button variant="primary" size = "md" text="Yes" onClick={getHash} />
                    </div>
                    <div className="justify-center flex">
                        <Input value = {hash} placeholder=" hash will appear here" />
                    </div>
                </span>
            </div>
        </div>
    </div>}
</div>
}