import { BrowserRouter, Routes, Route } from "react-router-dom"
import './App.css'
import Home from './pages/Home'
import TestCase from './pages/TestCase'
import CreateTestCase from "./pages/CreateTestCase"
import BugReports from "./pages/BugReports"
import CreateBugReport from "./pages/CreateBugReport"
import Bug from "./pages/Bug"
import TestCaseBugs from "./pages/TestCaseBugs"

function App() {

  return (
    <div className="App">
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/testcase/:caseNumber" element={<TestCase />} />
					<Route path="/create" element={<CreateTestCase />} />
					<Route path="/bugs" element={<BugReports />} />
					<Route path="/bug/:id/:testcaseId" element={<Bug />} />
					<Route path="/bugs/create" element={<CreateBugReport />} />
					<Route path="/bugs/:testcaseId" element={<TestCaseBugs />} />
				</Routes>
			</BrowserRouter>
    </div>
  )
}

export default App
