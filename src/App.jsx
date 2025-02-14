import { Routes, Route } from "react-router-dom"
import Home from "./section/Home"
import Message from "./section/Message"
function App() {
 
  return (
   <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/message" element={<Message/>}/>

   </Routes>
  )
}

export default App
