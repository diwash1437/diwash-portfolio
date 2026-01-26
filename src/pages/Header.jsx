import './Header.css'
import './general.css'
import '../index.css'

export function Header({isWhite, onToggleTheme })
{


    return(
    <div className="header" style={{
        backgroundColor: isWhite
          ? "var(--background-light)"
          : "var(--background-dark)",
        color: isWhite
          ? "var(--on-background-light)"
          : "var(--on-background-dark)",
    }}>
    <div className="left-section">
      <p>Diwash Sherma</p>
    </div>
    <div className="right-section">
      <button id="colorBtn" className="material-symbols-outlined" onClick={onToggleTheme}>{isWhite? "moon_stars" : "sunny_snowing"}</button>
    </div>
  </div>
    )
}