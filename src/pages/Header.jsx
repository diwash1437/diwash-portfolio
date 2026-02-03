import './Header.css'
import './general.css'
import '../index.css'

export function Header({isWhite, onToggleTheme })
{


    return(
    <div className="header">
    <div className="left-section">
      <p>Diwash Sherma</p>
    </div>
    <div className="right-section">
      <button id="colorBtn" className="material-symbols-outlined" onClick={onToggleTheme}>{isWhite? "moon_stars" : "sunny_snowing"}</button>
    </div>
  </div>
    )
}