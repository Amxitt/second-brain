
import { BrainIcon } from "../icons/BrainIcon";
import { Button } from "../components/Ui library/Button";
import { useNavigate } from "react-router-dom";

export const LandingPage = ()=>{
const navigate = useNavigate();

    return<div className="w-full h-screen bg-gray-200 flex justify-center items-center">
   
         <div className="h-96 w-96 bg-white shadow-md rounded-xl ">
            <div className= "flex justify-center bg-white rounded-md pt-2 ">
                <div className="flex justify-center  w-fit h-fit items-center gap-1">
                    <div className="text-purple-800 ">
                        <BrainIcon size="lg"/>
                    </div>
                    <div className="font-bold text-4xl">
                        Second Brain
                    </div>
                </div>    
               
            </div>
             <div className="ml-20 p-4 flex justify-center w-56 h-28 text-xl text-purple-800">
                    <p>Save links, notes, videos, tweets. Find them later.</p>
                </div>
            <div className=" mt-5 text-gray-500 flex justify-center">
                <p>Start building your second brain.</p>
                </div>
                <div className="justify-center flex p-2">
                    <Button variant="primary" size="md" text="Signup" onClick={()=> navigate("/signup")} />
                </div>
            <div className=" mt-5 text-gray-500 flex justify-center">
                <p>Signin if old user</p>
                </div>
                <div className="justify-center flex p-2">
                    <Button variant="secondary" size="md" text="Signin" onClick={()=> navigate("/signin")} />
                </div>
        </div>
    
        
    </div>
}


