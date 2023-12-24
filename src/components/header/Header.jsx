import "./header.css"
import foodHero from "../../images/foodHero.jpg"

export default function Header() {
  return (
    <div className="header">
        <div className="headerTitles">
            <span className="headerTitleSm">React & Node</span>
            <span className="headerTitleLg">Blog</span>
        </div>
        <img className="headerImg" src={foodHero} alt="foodHero" />
    </div>
  )
}
