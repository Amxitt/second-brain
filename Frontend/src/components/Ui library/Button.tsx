interface ButtonProps {
    variant: "primary"| "secondary"
    size: "sm" | "md" | "lg"
    text: string;
    startIcon?: any;
    endIcon? : any;
    fullwidth? : boolean
    loading? : boolean
    onClick? : ()=> any
}
const defaultStyles = " flex font-light text-base"; 
const variantStyle = {
    "primary": "bg-purple-800 text-white",
    "secondary": "bg-purple-200 text-purple-800"
}

const sizeStyle = {
    "sm": "py-1 px-2 rounded-sm",
    "md": "py-2 px-4 rounded-md",
    "lg": "py-4 px-6 rounded-xl"
}

export const Button = (props: ButtonProps)=> {
    console.log(7)
    return <button onClick={props.onClick} className={` ${variantStyle[props.variant]} ${defaultStyles} ${sizeStyle[props.size]} ${props.fullwidth? " w-full flex justify-center items-center" : ""}
    ${props.loading? "opacity-40": ""} `} disabled = {props.loading}>
      <div className= "flex items-center gap-2" >
        {props.startIcon}
        {props.text}
      </div>
      
    </button>
}