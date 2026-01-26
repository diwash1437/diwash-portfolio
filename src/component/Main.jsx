import { Profile } from "./Profile";
import '../index.css'
export function Main({isWhite})
{
    return(
        
        
        <div className="main" style={{
 backgroundColor: isWhite
          ? "var(--background-light)"
          : "var(--background-dark)",
        color: isWhite
          ? "var(--on-background-light)"
          : "var(--on-background-dark)",
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
       
        </article>
        </div>
        
    )

}