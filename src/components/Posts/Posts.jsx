import "./posts.css"
import PostSnippet from "../postSnippet/PostSnippet"

export default function Posts() {
  return (
    <div className='posts'>
      <ul className="postGallery">
        <div className="galleryItem"><PostSnippet/></div> 
        <div className="galleryItem"><PostSnippet/></div> 
        <div className="galleryItem"><PostSnippet/></div> 
      </ul>
    </div>
  )
}
