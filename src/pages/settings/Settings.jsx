import Sidebar from "../../components/sideBar/SideBar"
import foodHero from "../../images/foodHero.jpg"
import "./settings.css"

export default function Settings() {
  return (
    <div className="settings">
        <div className="settingsWrapper">
            <div className="settingsTitle">
                <span className="settingsUpdateTitle">Update Your Account</span>
                <span className="settingsDeleteTitle">Delete Your Account</span>
            </div>
            <form className="settingsForm">
                <label>Profile Picture</label>
                <div className="settingsPP">
                    <img 
                      src={foodHero} 
                      alt="Profile pic image" 
                    />
                    <label htmlFor="fileInput">
                        <i className="settingsPPIcon fa-solid fa-circle-user"></i>
                    </label>
                    <input type="file" id="fileInput" style={{display: "none"}} />
                </div>
                <label>Username</label>
                <input type="text" placeholder="FionUserName"/>
                <label>Email</label>
                <input type="email" placeholder="fion@email.com"/>
                <label>Password</label>
                <input type="password" />
                <button className="settingSubmit">Update</button>
            </form>
        </div>
        <Sidebar/>
    </div>
  )
}
