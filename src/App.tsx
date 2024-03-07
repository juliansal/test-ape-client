import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"
import './App.css'
import Home from './pages/Home'
import TestCase from './pages/TestCase'
import CreateTestCase from "./pages/CreateTestCase"
import BugReports from "./pages/BugReports"
import CreateBugReport from "./pages/CreateBugReport"
import Bug from "./pages/Bug"
import TestCaseBugs from "./pages/TestCaseBugs"
import Login from "./pages/Login"
import { useContext } from "react"
import { AuthContext } from "./context/AuthContext"

function App() {
	const {currentUser} = useContext(AuthContext)

	const RequireAuth = (props: any) => {
		return currentUser ? (props.children) : <Navigate to="/login"/>
	}

  return (
    <div className="App">
			<BrowserRouter>
				<Routes>
					<Route path="/" element={
						<RequireAuth>
							<Home />
						</RequireAuth>} 
					/>
					<Route path="/testcase/:caseNumber" element={
						<RequireAuth>
							<TestCase />
						</RequireAuth>} 
					/>
					<Route path="/create" element={
						<RequireAuth>
							<CreateTestCase />
						</RequireAuth>} 
					/>
					<Route path="/bugs" element={
						<RequireAuth>
							<BugReports />
						</RequireAuth>} 
					/>
					<Route path="/bug/:id/:testcaseId" element={
						<RequireAuth>
							<Bug />
						</RequireAuth>} 
					/>
					<Route path="/bugs/create" element={
						<RequireAuth>
							<CreateBugReport />
						</RequireAuth>} 
					/>
					<Route path="/bugs/:testcaseId" element={
						<RequireAuth>
							<TestCaseBugs />
						</RequireAuth>} 
					/>
					<Route path="/login" element={<Login />} />
				</Routes>
			</BrowserRouter>
    </div>
  )
}

export default App



