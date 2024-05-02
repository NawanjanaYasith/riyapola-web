import { useState } from 'react'
import './App.css'
import Navbar from "../components/navbar/Navbar.jsx";
import Admin from "../pages/admin/Admin.jsx";

function App() {
  const [count, setCount] = useState(0)

  return (
      <div>
          <Navbar/>
          <Admin/>
      </div>
  )
}

export default App
