import { useContext } from "react"
import ThemeContext from "./themeContext"

function ThemeToggle() {
    const {theme,setTheme}=useContext(ThemeContext)
    return (
       <button onClick={()=>{
           setTheme(!theme)
       }} className={theme ?"mode-dark":"mode"}>
           {theme ?"Light":"Dark"}
       </button>
    )
}

export default ThemeToggle
