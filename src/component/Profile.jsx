 import './profile.css'
 import '../index.css'
 export function Profile({isWhite})
{
    return(
            // <!-- Profile information  -->
    <div className="profile-info-flex">
      <div className="left-profile-info">
           <img src={'./diwash.jpg'} alt="" />
        </div>
      <div className="right-profile-info">
        <h3>Web developer</h3>
        <h2>Diwash Sherma</h2>
        <p className="body-large">A passionate web developer from Nepal, now creating beautiful and responsive websites from
          the heart of Kyoto, Japan.</p>

        <div className="btn-wrapper">
          <a href="mailto:chhetrivision@gmail.com" className="chip">
            <span className="material-symbols-outlined">mail</span>
            <span className="label-large">diwashlimbu47@gmail.com</span>
            <div className="state-layer"></div>
          </a>
          <a href="tel:+" className="chip">
            <span className="material-symbols-outlined">call</span>
            <span className="label-large">*** ***** *****</span>
            <div className="state-layer"></div>
          </a>
        </div>
      </div>
    </div>
    )
}