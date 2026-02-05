export function Input ({onChange, placeholder, reference, value}: {onChange?: ()=> void,
    placeholder: string,
    reference?: any,
    value?: number | string
}){
    return <div className="">
        <input value={value} ref = {reference} placeholder={placeholder} type = "text" className="px-4 py-2 border rounded m-2" onChange={onChange}></input>
    </div>
}