import './AboutMe.css'
// import '../pages/general.css'
export function AboutMe({isWhite}) {
    return (
        <div className="about-card" style={{
             backgroundColor: isWhite
          ? "var(--bg)"
          : "var(--bg)"
        }}>
            <h2 className="cart-title title-large">About</h2>

            <p className="cart-text">
                With years of experience in graphic and web design I have mastered the skills of understanding client 
                requirements according to the latest trends.          </p>

            <ul className="about-list">
                <li className="list-item">
                    <span className="material-symbols-outlined" aria-hidden="true">
                        location_on
                    </span>
                    <span className="label-small">600-8331, Noah's Ark Kyoto, Shimogyō-ku, Kyoto Japan              </span>
                </li>
                <li className="list-item">
                    <span className="material-symbols-outlined" aria-hidden="true">
                        work
                    </span>
                    <a href="" target="_blank"><span className="label-small">Pound honten</span></a>
                </li>
                <li className="list-item">
                    <span className="material-symbols-outlined" aria-hidden="true" style={{height: "1em"}}>
                        captive_portal
                    </span>
                    <a href="http://localhost:5173/diwash-portfolio/" className="lebel-small">diwash-portfolio</a>
                </li>
            </ul>
        </div>
    )
}