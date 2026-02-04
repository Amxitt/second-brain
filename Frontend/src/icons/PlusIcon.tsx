interface iconProp{
  "size": "sm" | "md" | "lg"
}
const sizes = {
  "sm": "h-4 w-4",
  "md": "h-6 w-6",
  "lg": "h-8 w-8"
}

export const PlusIcons = (prop: iconProp)=>{
    return <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className={sizes[prop.size]}>
  <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
</svg>

}