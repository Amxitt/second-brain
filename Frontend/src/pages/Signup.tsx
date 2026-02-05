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

        if(!username){
            usernameRef.current?.focus()
            return 
        }
        if(!password){
            passwordRef.current?.focus() 
            return
        }
        console.log(username)
        try{
            const res = await axios.post(BACKEND_URL + "/user/signup", {
                username, password
            })
            if(res.data.success){
                alert(res.data.message)
            navigate("/signin")
            return
            }
        } catch(e){
             alert("please set valid username and ensure your password inlcudes a uppercasee, a number and should be 8 letters in length to proceed.")
        }
   
    }

    return <div className="h-screen w-screen bg-gray-200 flex justify-center
    items-center ">
      
    <div className=" bg-white rounded-xl border min-w-48 p-10 ">
          <div className="">Set up with your email and password.</div>
            <Input reference={usernameRef} placeholder="email" />
            <Input reference={passwordRef} placeholder="password" />
        <div className="pt-3 flex justify-center">
            <Button onClick = {signup} loading = {false} variant="primary" text="Sign Up" size="md" fullwidth ={true}/>
        </div>
    </div>
        

    </div>
}