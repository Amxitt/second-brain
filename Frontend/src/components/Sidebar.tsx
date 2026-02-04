import { BrainIcon } from "../icons/BrainIcon";
import { TwitterIcon } from "../icons/Twitter";
import { YoutubeIcon } from "../icons/YoutubeIcon";
import { SidebarItem } from "./Ui library/SidebarItem";

export function Sidebar(){
    return <div className="h-screen bg-white border-r border-2 w-72
    position-fixed left-0 top-0">
        <div className="flex gap-2 text-bold items-center text-2xl pl-2 pt-4">
           <div className="text-purple-800"> <BrainIcon/></div> 
            Second Brain
        </div>
        <div className="flex flex-col gap-2 pt-4 pl-5 pr-10">
            <SidebarItem icon={<TwitterIcon/>} text="Tweets"/>
            <SidebarItem icon={<YoutubeIcon/>} text="Videos" />
        </div>
        
    </div>
}