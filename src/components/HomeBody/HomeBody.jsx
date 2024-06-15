import "./homeBody.css"
import foodHero from "../../images/cupcake.jpg"

export default function HomeBody() {
  return (
    <div className="homeBody">
        <span className="blogHeader">
            fionon
        </span>
        <p className="blogDesc">
            <span className="homeText">welcome to my house.</span>
            &nbsp; home to most things i love and am passionate about.
        </p>
        <div className="contactBlock">
            <div className="contact">
                <span className="contactInfo">Contact</span>
                <span className="contactInfo">Resume</span>
                <span className="contactInfo">LinkedIn</span>
            </div>
        </div>
        <img className="homeImg" src={foodHero} alt="postimage"/>
    </div>
  )
}
