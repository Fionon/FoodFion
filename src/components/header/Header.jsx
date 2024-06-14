import "./header.css"
import foodHero from "../../images/foodHero.jpg"

export default function Header() {
  return (
    <div className="header">
        <div className="headerImgContainer">
            <div className="headerImgItem">
              <img className="headerImg" src={foodHero} alt="foodHero" />
              <span className="imgText">food</span>
            </div>

            <div className="headerImgItem">
              <img className="headerImg" src={foodHero} alt="foodHero" />
              <span className="imgText">travel</span>
            </div>

            <div className="headerImgItem">
              <img className="headerImg" src={foodHero} alt="foodHero" />
              <span className="imgText">hobby</span>
            </div>

        </div>
    </div>
  )
}
