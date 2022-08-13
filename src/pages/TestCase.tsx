import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { searchTestCases, fetchTestCases } from "../api/testCaseApi"


function TestCase() {
	const [tcase, setTCase] = useState({title: "", description: "", authorEmail: ""})
	let { caseNumber } = useParams()

	useEffect(() => {
		if (caseNumber) fetchTestCases(caseNumber).then(data => setTCase(data))
	}, [])

	return (
		<div className="section test-case">
			<div><span className="subtitle is-4">Title:</span> { tcase.title }</div>
			<div><span className="subtitle is-4">Description:</span> { tcase.description }</div>
			<div><span className="subtitle is-4">Creator:</span> { tcase.authorEmail }</div>
		</div>
	)
}

export default TestCase