import { useRef, useState } from "react"
import { CrossIcon } from "../icons/CrossIcon"
import { Button } from "./Ui library/Button"
import { Input } from "./Ui library/Input"
import { BACKEND_URL } from "../pages/config"
import axios from "axios"
import type { sizes } from "../icons/size"

enum ContentType {
     Youtube = "Youtube",
     Twitter = "Twitter"
}

export const ContentModal = ({open , onClose}:{
    open: boolean,
    onClose: ()=> void
})=>{
        const titleRef = useRef<HTMLInputElement | null>(null);
        const linkRef = useRef<HTMLInputElement | null>(null);
        const [type, setType] = useState(ContentType.Youtube)

       async function addContent(){
            const title = titleRef.current?.value
            const link = linkRef.current?.value
            const tag = "lala"
            const res = await axios.post(BACKEND_URL + "/content/content" ,{
                title, link, type, tag
            },{withCredentials: true})

            alert(res.data.message)
            onClose()
        }

    return <div>
        {open && <div>
        <div className="w-screen h-screen bg-gray-500 fixed top-0 left-0 opacity-60 
        flex justify-center">

        </div>
        <div className="w-screen h-screen fixed top-0 left-0
        flex justify-center">
            <div className="flex flex-col justify-center ">
                <span className=" bg-white opacity-100 p-4 rounded">
                    <div className="flex justify-end cursor-pointer" onClick={onClose}>
                        <CrossIcon size={"sm"}/>
                    </div>
                    <div >
                        <Input reference={titleRef} placeholder = {"Title"} />
                        <Input reference={linkRef} placeholder = {"Link"}/>
                    </div>
                <div>
                    <h1>Type:</h1>
                    <div className="flex justify-center gap-2">
                        <Button size="sm" text="Youtube" variant={type === ContentType.
                            Youtube ? "primary": "secondary"} onClick={()=> {setType(ContentType.Youtube)}}
                        />
                        <Button size="sm" text="Twitter" variant={type === ContentType.
                            Twitter ? "primary": "secondary"} onClick={()=> {setType(ContentType.Twitter)}}
                        />
                    </div>
                </div>
                    <div className="flex justify-center pt-4">
                        <Button onClick={addContent} variant="primary" text="Submit" size="md"/>
                    </div>
                    
                </span>
                
            </div>
            </div>
        </div>}
    </div>
}


