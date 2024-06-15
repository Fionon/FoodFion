import { Link } from "react-router-dom";
import "./header.css"
import tsujiri from "../../images/tsujiri.jpg"
import inari from "../../images/inari.jpg"
import cat from "../../images/cat1.jpg"

export default function Header() {
  return (
    <div className="header">
        <div className="headerImgContainer">
            <div className="headerImgItem">
              <Link to = "/food">
                <img className="headerImg" src={tsujiri} alt="foodHero" />
              </Link>
              <div className="imgText">food</div>
            </div>

            <div className="headerImgItem">
              <Link to = "/travel">
                <img className="headerImg" src={inari} alt="foodHero" />
                <div className="imgText">travel</div>
              </Link>
              
            </div>

            <div className="headerImgItem">
              <Link to = "/hobby">
                <img className="headerImg" src={cat} alt="foodHero" />
              </Link>
              <div className="imgText">hobby</div>
            </div>

        </div>
    </div>
  )
}
