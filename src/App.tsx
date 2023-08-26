import './App.css'
import {Routes, Route} from "react-router-dom";
import MainLayout from "./layouts/mainLayout.tsx";
import Home from "./pages/home/home.tsx";

function App() {

  return (
    <Routes>
      <Route path="/" element={<MainLayout/>}>
          <Route index element={<Home/>}/>
      </Route>
    </Routes>
  )
}

export default App
