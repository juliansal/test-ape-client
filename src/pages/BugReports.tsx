import React, { BaseSyntheticEvent, useEffect, useState } from "react"
import { fetchBugReports } from "../api/bugReportApi"
import BugReportsList from "../components/BugReport/BugReportsList"

function BugReports() {
	const [bugs, setBugs] = useState([])

	useEffect(() => {
		fetchBugReports("ACTIVE")
			.then(data => {
				console.log(data)
				setBugs(data)})
	}, [])

	return (
		<div data-testid="bug-reports" className="section container is-max-desktop">
			<BugReportsList bugs={bugs} />
		</div>
	)

}

export default BugReports