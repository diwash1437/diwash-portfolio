import { Main } from "../component/Main";
import { Header } from "./Header";
import '../index.css'

export function Homepage({isWhite, onToggleTheme })
{
    return(
     <div
        data-theme={isWhite ? "light" : "dark"}
      style={{
        backgroundColor: isWhite
          ? "var(--background-light)"
          : "var(--background-dark)",
        color: isWhite
          ? "var(--on-background-light)"
          : "var(--on-background-dark)",
        minHeight: "100vh",
        width: "100%",
      }}
     >
      <Header isWhite={isWhite} onToggleTheme={onToggleTheme}/>
      <Main isWhite={isWhite} onToggleTheme={onToggleTheme}/>
      </div>
    )
}