import "./homeBody.css"
import foodHero from "../../images/foodHero.jpg"

export default function HomeBody() {
  return (
    <div className="post">
        <span className="postTitle">
            fionon
        </span>
        <p className="postDesc">
            <span className="postDate">welcome to my house.</span>
            &nbsp; home to most things i love and am passionate about.
        </p>
        <div className="postInfo">
            <div className="postCats">
                <span className="postCat">Contact</span>
                <span className="postCat">Resume</span>
                <span className="postCat">LinkedIn</span>
            </div>
        </div>
        <img className="postImg" src={foodHero} alt="postimage"/>
    </div>
  )
}
