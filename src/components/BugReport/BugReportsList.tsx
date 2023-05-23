import { BaseSyntheticEvent, useEffect, useState } from "react"
import { fetchTestCases } from "../../api/testCaseApi"

function BugCard(props: any) {
	const [tcase, setTCase] = useState({title: ""})
	const [bug, setBug] = useState({ 
		description: "", 
		expectedOutcome: "", 
		authorEmail: "", 
		bugStatus: "", 
		testcaseId: ""
	})

	useEffect(() => {
		let caseNumber: string = props.val.testcaseId.toString()
		fetchTestCases(caseNumber)
			.then(data => setTCase(data))
		
		setBug({ 
			description: props.val.description, 
			expectedOutcome: props.val.expectedOutcome, 
			authorEmail: props.val.authorEmail, 
			bugStatus: props.val.bugStatus,
			testcaseId: props.val.testcaseId
		})
	}, [])

	return (
		<div className="card mb-3">
			<div className="card-content">
				<div><strong>Description:</strong> { bug.description }</div>
				<div><strong>Expected Outcome:</strong> { bug.expectedOutcome }</div>
				<div><strong>Creator:</strong> { bug.authorEmail }</div>
				<div>
					<strong>Status:</strong> { bug.bugStatus } |&nbsp;
					<strong>Related Test:</strong> (# {bug.testcaseId}) { tcase.title }
				</div>
			</div>
		</div>
	)
}

function BugReportsList(props: any) {

	return (
		<div className="bugslist">
			{ props.bugs
					.filter((v: any) => v["bugStatus"] == "ACTIVE")
					.map((v: any, k: number) => (<BugCard key={k} val={v} />)) }
		</div>
	)
}

export default BugReportsList