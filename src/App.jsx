import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Home } from "../src/pages/home/Home"
import { Metrics } from "./pages/metrics/Metrics"


function App() {

  return (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/home" element={<Home />}/>
            <Route path="/metrics" element={<Metrics />}/>
        </Routes>
    </BrowserRouter>
  )
}

export default App
