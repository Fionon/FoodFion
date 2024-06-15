import "./postSnippet.css"
import foodHero from "../../images/foodHero.jpg"

export default function PostSnippet() {
  return (
    <div className="post">
        <img className="postImg" src={foodHero} alt="postimage"/>

        <div className="postInfo">
            <span className="postTitle">
                This is an example post
            </span>
            <hr/>
        <span className="postDate">1 hour ago</span>
        </div>
    </div>
  )
}