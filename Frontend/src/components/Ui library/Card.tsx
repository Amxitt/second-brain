import { DeleteIcon } from "../../icons/Deleteicon"
import { ShareIcon } from "../../icons/ShareIcon"
interface CardProps{
    title: string,
    link: string,
    type: "Twitter" | "Youtube"
}

export const Card = ({title ,link,  type }: CardProps)=>{
    return <div className="bg-white rounded-md border border-gray-100 w-72">
        <div className="justify-between flex items-center p-2">
            <div className="flex gap-2 items-center">
                <ShareIcon size = "sm"/>
                {title}
            </div>
        <div className="flex gap-2">
            <div className=" items-center">
                <a href={link} target="_blank"></a>
                <ShareIcon size="sm"/>
            </div>
            <div className=" items-center">
                <DeleteIcon />
            </div>
        </div>
    </div>
        <div className="pt-2">
          {type ==="Youtube" &&  <iframe className="w-full h-48 " width="560" height="315" src={link.replace("watch", "embed").replace("?v=", "/")} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>}
        {type === "Twitter" && (
          <blockquote className="twitter-tweet">
            <a href= {link.replace("x.com", "twitter.com")}></a>
          </blockquote>
        )}
        </div>
    </div>
}