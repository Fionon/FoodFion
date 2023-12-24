import "./sideBar.css"
import foodHero from "../../images/foodHero.jpg"

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarItem">
        <span className="sidebarTitle">ABOUT ME</span>
        <img
          src={foodHero} alt="sidebar image"/>
        <p>Laboris sunt aute cupidatat velit magna velit ullamco dolore mollitamet ex esse.Sunt eu ut nostrud id quis proident.</p>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">CATEGORIES</span>
        <ul className="sidebarList">
          <li className="sidebarListItem">Sports</li>
          <li className="sidebarListItem">Food</li>
          <li className="sidebarListItem">Green</li>
          <li className="sidebarListItem">Yellow</li>
          <li className="sidebarListItem">Poop</li>
          <li className="sidebarListItem">Banana</li>
        </ul>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">FOLLOW US</span>
        <div className="sidebarSocial">
          <i className="sidebarIcon fab fa-facebook-square"></i>
          <i className="sidebarIcon fab fa-instagram-square"></i>
          <i className="sidebarIcon fab fa-pinterest-square"></i>
          <i className="sidebarIcon fab fa-twitter-square"></i>
        </div>
      </div>
    </div>
  );
}