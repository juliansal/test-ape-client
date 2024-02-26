import React, { BaseSyntheticEvent, useEffect, useState } from "react"
import { useParams, Link } from "react-router-dom"
import { fetchBugReportsByTestcase } from "../api/bugReportApi"
import BugReportsList from "../components/BugReport/BugReportsList"
import { TestCaseControls } from "../components/TCase/TestCaseList"

function TestCaseBugs(props: any) {
	let { testcaseId } = useParams()
	const [bugs, setBugs] = useState([])

	useEffect(() => {
		if (testcaseId) {
			fetchBugReportsByTestcase(testcaseId)
				.then(data => setBugs(data))
		}
	}, [])

	return (
		<div data-testid="bug-reports" className="section container is-max-desktop">
			<TestCaseControls />
			<BugReportsList bugs={bugs} />
		</div>
	)
}

export default TestCaseBugs