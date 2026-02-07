
import { useNavigate } from "react-router-dom"
import { CrossIcon } from "../icons/CrossIcon"
import { Button } from "./Ui library/Button"
import axios from "axios"

export const LogoutModal = ({open , onClose}:{
    open: boolean,
    onClose: VoidFunction
})=>{
    const navigate = useNavigate();
    async function logout(){
        await axios.post("http://localhost:3000/api/v1/user/logout",{},
            {withCredentials: true}
        )

        navigate("/")
    }


    return <div>
    {open && <div>
    <div className="h-screen w-screen bg-gray-500 opacity-60 fixed left-0 ">
        </div>
        <div className="flex justify-center items-center h-screen w-screen fixed top-0 left-0"> 
        <div className="h-26 w-72 p-4 bg-white rounded-md shadow-md flex justify-center" >
           <div className="flex flex-col w-full  items-center"> 
            <div className="flex justify-end w-full" onClick={onClose}> <CrossIcon size="sm"/></div>
                <div className="font-bold p-2 text-sm text-purple-800">
                    Are you sure you want to logout?
                </div>
                <div> 
                    < Button variant="primary" size="md" text="confirm" onClick={logout} />
                </div>
            </div>
        </div>
      </div>  
    </div>}
</div>
}