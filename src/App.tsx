import './App.css'
import {Routes, Route} from "react-router-dom";
import MainLayout from "./layouts/mainLayout.tsx";
import Home from "./pages/home/home.tsx";
import Voting from "./pages/voting/voting.tsx";
import Likes from "./pages/likes/likes.tsx";
import Dislikes from "./pages/dislikes/dislikes.tsx";
import Favourite from "./pages/favourite/favourite.tsx";

function App() {

  return (
    <Routes>
      <Route path="/" element={<MainLayout/>}>
          <Route index element={<Home/>}/>
          <Route path="voting" element={<Voting/>}/>
          <Route path="likes" element={<Likes/>}/>
          <Route path="dislikes" element={<Dislikes/>}/>
          <Route path="favourite" element={<Favourite/>}/>
      </Route>
    </Routes>
  )
}

export default App
