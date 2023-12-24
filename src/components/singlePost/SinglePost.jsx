import "./singlePost.css"
import foodHero from "../../images/foodHero.jpg"

export default function SinglePost() {
  return (
    <div className="singlePost">
        <div className="singlePostWrapper">
            <img 
              src={foodHero} 
              alt="" 
              className="singlePostImg"
            />
            <h1 className="singlePostTitle">
                Lorem ipsum dolor sit amet
                <div className="singlePostEdit">
                    <i className="singlePostIcon fa-solid fa-pen-to-square"></i>
                    <i class="singlePostIcon fa-solid fa-trash"></i>
                </div>
            </h1>
            <div className="singlePostInfo">
                <span className="singlePostAuthor">Author: <b>Fion</b></span>
                <span className="singlePostDate">1 hour ago</span>
            </div>
            <p className="singlePostDesc">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis ullam ex voluptatum est laboriosam voluptate. 
                Dicta repellat id soluta unde pariatur placeat aperiam? Deserunt eius nisi quae vero, reiciendis cumque.
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis ullam ex voluptatum est laboriosam voluptate. 
                Dicta repellat id soluta unde pariatur placeat aperiam? Deserunt eius nisi quae vero, reiciendis cumque.
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis ullam ex voluptatum est laboriosam voluptate. 
                Dicta repellat id soluta unde pariatur placeat aperiam? Deserunt eius nisi quae vero, reiciendis cumque.
            </p>
        </div>
    </div>
  )
}
