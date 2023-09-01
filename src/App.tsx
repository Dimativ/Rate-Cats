import './App.css'
import {Routes, Route} from "react-router-dom";
import MainLayout from "./layouts/mainLayout.tsx";
import Home from "./pages/home/home.tsx";
import Voting from "./pages/voting/voting.tsx";
import Likes from "./pages/likes/likes.tsx";

function App() {

  return (
    <Routes>
      <Route path="/" element={<MainLayout/>}>
          <Route index element={<Home/>}/>
          <Route path="voting" element={<Voting/>}/>
          <Route path="likes" element={<Likes/>}/>
      </Route>
    </Routes>
  )
}

export default App
