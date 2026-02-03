import { Profile } from "./Profile";
import { AboutMe } from "./AboutMe";
import './Main.css'
import { MyInfo } from "./MyInfo";
import '../index.css'

export function Main({isWhite, onToggleTheme})
{
    return(
        
        
        <div className="main" style={{
         backgroundColor: isWhite
          ? "var(--bg)"
          : "var(--bg)",
        color: isWhite
          ? "var(--text)"
          : "var(--text)",
        }}>
        <article style={{
            maxWidth: 1128,
            marginInline: "auto",       
        }}>

        <section style={{
            padding: "var(--section-padding)"
        }}>
            <Profile/>
        </section>

        {/* main section  */}
        <div className="article">
            <AboutMe isWhite={isWhite} onToggleTheme={onToggleTheme}/>
            <MyInfo isWhite={isWhite}/>
            {/* end of right side className */}

        </div>
        <div>diwash</div>
        </article>
       
        </div>
        
    )

}