import { Routes, Route } from "react-router-dom"
import Home from "./section/Home"
function App() {
 
  return (
   <Routes>
      <Route path="/" element={<Home/>}/>
   </Routes>
  )
}

export default App
