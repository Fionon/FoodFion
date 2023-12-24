import "./post.css"
import foodHero from "../../images/foodHero.jpg"

export default function Post() {
  return (
    <div className="post">
        <img className="postImg" src={foodHero} alt="postimage"/>

        <div className="postInfo">
            <div className="postCats">
                <span className="postCat">Music</span>
                <span className="postCat">Life</span>
            </div>
            <span className="postTitle">
                Lorem ipsum dolor sit ame
            </span>
            <hr/>
        <span className="postDate">1 hour ago</span>
        </div>
        <p className="postDesc">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
            Voluptate, explicabo ullam! Fuga, hic, dolorum, magnam est perferendis 
            velit reprehenderit eligendi impedit commodi incidunt deserunt beatae 
            consectetur vero iste libero placeat.Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
            Voluptate, explicabo ullam! Fuga, hic, dolorum, magnam est perferendis 
            velit reprehenderit eligendi impedit commodi incidunt deserunt beatae.
        </p>
    </div>
  )
}
