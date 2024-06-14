import HomeBody from "../../components/HomeBody/HomeBody"
import Header from "../../components/header/Header"
import "./home.css"

export default function Home() {
  return (
    <>
      <Header/>
      <div className="home"> 
      <HomeBody/>
      </div>
    </>
    
  )
}
