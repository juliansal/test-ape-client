import { BrowserRouter, Routes, Route } from "react-router-dom"
import './App.css'
import Home from './pages/Home'
import TestCase from './pages/TestCase'
import Dev from './pages/Dev'

function App() {

  return (
    <div className="App">
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/testcase/:caseNumber" element={<TestCase />} />
					<Route path="/dev" element={<Dev />} />
				</Routes>
			</BrowserRouter>
    </div>
  )
}

export default App
