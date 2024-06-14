import Home from "./pages/home/Home"
import Single from "./pages/archive/single/Single"
import NavBar from "./components/NavBar/NavBar";
import Write from "./pages/archive/write/Write";
import Login from "./pages/archive/login/Login";
import Register from "./pages/archive/register/Register"
import Food from "./pages/food/Food";
import Travel from "./pages/travel/Travel";
import Hobby from "./pages/hobby/Hobby";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

function App() {

  const user = false;

  return (
    <Router>
      <NavBar/>
      <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route exact path="/register" element={user ? <Home/> : <Register/>}/>
        <Route exact path="/login" element={user ? <Home/> :<Login/>}/>
        <Route exact path="/write" element={user ? <Write/> : <Register/>}/>
        <Route exact path="/food" element={<Food/>}/>
        <Route exact path="/travel" element={<Travel/>}/>
        <Route exact path="/hobby" element={<Hobby/>}/>
        <Route exact path="/post/:postId" element={<Single/>}/>
      </Routes>

    </Router>
    
  );
}

export default App;
