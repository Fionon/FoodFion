import { Link } from "react-router-dom";
import "./header.css"
import foodHero from "../../images/foodHero.jpg"

export default function Header() {
  return (
    <div className="header">
        <div className="headerImgContainer">
            <div className="headerImgItem">
              <Link to = "/food">
                <img className="headerImg" src={foodHero} alt="foodHero" />
              </Link>
              <span className="imgText">food</span>
            </div>

            <div className="headerImgItem">
              <Link to = "/travel">
                <img className="headerImg" src={foodHero} alt="foodHero" />
              </Link>
              <span className="imgText">travel</span>
            </div>

            <div className="headerImgItem">
              <Link to = "/hobby">
                <img className="headerImg" src={foodHero} alt="foodHero" />
              </Link>
              <span className="imgText">hobby</span>
            </div>

        </div>
    </div>
  )
}
