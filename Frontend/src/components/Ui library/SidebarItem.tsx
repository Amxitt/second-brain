import type { ReactElement } from "react"


export const SidebarItem = ({text, icon}: {
    text: string,
    icon: ReactElement
})=>{
    return <div className="flex gap-2 items-center text-gray-700 cursor-pointer rounded-md hover:bg-gray-200  ">
        {icon} {text}
    </div>
}