import { Route, Routes } from "react-router-dom"
import Drivers from "./pages/Drivers";
import Favorites from "./pages/Favorites";
import Navbar from "./components/Navbar";

function App() {
  

  return (
    <>
    <Navbar/>
     <Routes>
      <Route path="/" element={<Drivers/>} />
      <Route path="/favorites" element={<Favorites />} />
     </Routes>
    </>
  )
}

export default App
