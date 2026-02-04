import axios from "axios";
import { Button } from "../components/Ui library/Button"
import { Input } from "../components/Ui library/Input"
import { BACKEND_URL } from "./config";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";

export const Signin = ()=>{
      const usernameRef = useRef<HTMLInputElement | null>(null);
    const passwordRef = useRef<HTMLInputElement | null>(null);
    const navigate = useNavigate();

    async function signin(){
        const username = usernameRef.current?.value;
        const password = passwordRef.current?.value;
        

        console.log(username)
       const res =  await axios.post(BACKEND_URL + "/user/signin", {
            username, password
        },{withCredentials: true})
        console.log(res);
        alert(res.data.message)
        navigate("/dashboard")

    }

    return <div className="h-screen w-screen bg-gray-200 flex justify-center
    items-center ">
    <div className=" bg-white rounded-xl border min-w-48 p-10 ">
            <Input reference={usernameRef} placeholder="email" />
            <Input reference={passwordRef} placeholder="password" />
        <div className="pt-3 flex justify-center">
            <Button onClick = {signin} loading = {false} variant="primary" text="Sign in" size="md" fullwidth ={true}/>
        </div>
    </div>
        

    </div>
}