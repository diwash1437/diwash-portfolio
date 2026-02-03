import { useState } from 'react';
import { About } from './About';
import { ContactMe } from './ContactMe';
import './myInfo.css';
import { Portfolio } from './Portfolio';
export function MyInfo()

{

    const [activeSection, setActiveSection] = useState(null);
    return(
<div className="myinfo-container">

<div className='info-container'>
  <div className={`tab ${activeSection === "portfolio" ? "active" : ""}`}>
    <button onClick={() => setActiveSection("portfolio")}>
      <span className='tab-text'>Portfolio</span>
    </button>
  </div>

  <div className={`tab ${activeSection === "about" ? "active" : ""}`}>
    <button  onClick={() => setActiveSection("about")}>
      <span className='tab-text'>About </span>
    </button>
   
  </div>
  </div>
  <div className='myinfo-display'>
    {activeSection === "portfolio" && <Portfolio />}
    {activeSection === "about" && <About />}
  </div>
</div>

    )
}