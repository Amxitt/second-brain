import { useRef } from "react"
import { Button } from "../components/Ui library/Button"
import { Input } from "../components/Ui library/Input"
import axios from "axios"
import { BACKEND_URL } from "./config"
import { useNavigate } from "react-router-dom"
export const Signup = ()=>{
    const usernameRef = useRef<HTMLInputElement | null>(null);
    const passwordRef = useRef<HTMLInputElement | null>(null);
    const navigate = useNavigate();

    async function signup(){
        const username = usernameRef.current?.value;
        const password = passwordRef.current?.value;
        console.log(username)
        await axios.post(BACKEND_URL + "/user/signup", {
            username, password
        })
        alert("You have signed up!")
        navigate("/signin")
    }

    return <div className="h-screen w-screen bg-gray-200 flex justify-center
    items-center ">
    <div className=" bg-white rounded-xl border min-w-48 p-10 ">
            <Input reference={usernameRef} placeholder="email" />
            <Input reference={passwordRef} placeholder="password" />
        <div className="pt-3 flex justify-center">
            <Button onClick = {signup} loading = {false} variant="primary" text="Sign Up" size="md" fullwidth ={true}/>
        </div>
    </div>
        

    </div>
}