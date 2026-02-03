import { Main } from "../component/Main";
import { Header } from "./Header";
import './general.css'
import './homepage.css'

export function Homepage({isWhite, onToggleTheme })
{
    return(
     <div
        data-theme={isWhite ? "light" : "dark"}
        className="app"
     >
      <Header  onToggleTheme={onToggleTheme}/>
      <Main isWhite={isWhite} onToggleTheme={onToggleTheme}/>
      </div>
    )
}