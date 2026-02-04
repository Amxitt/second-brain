export function Input ({onChange, placeholder, reference}: {onChange?: ()=> void,
    placeholder: string,
    reference?: any
}){
    return <div className="">
        <input ref = {reference} placeholder={placeholder} type = "text" className="px-4 py-2 border rounded m-2" onChange={onChange}></input>
    </div>
}