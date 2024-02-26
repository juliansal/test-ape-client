import { SyntheticEvent, useEffect, useState } from "react"
import { useNavigate, Link, useLocation } from "react-router-dom"
import CreateBugReportForm from "../components/BugReport/CreateBugReportForm"
import { createBugReport } from "../api/bugReportApi"
import { fetchTestCases } from "../api/testCaseApi"
import { updateStep } from "../api/stepApi"
import { TestCaseControls } from "../components/TCase/TestCaseList"
import { IBug } from "../models/IBug"

function CreateBugReport(props: any) {
	const [step, setStep] = useState({} as any)
	const navigate = useNavigate()
	const { state } = useLocation()

	useEffect(() => {
		setStep(state)
	}, [])

	const handleNewTestCase = async (ev: SyntheticEvent) => {
		ev.preventDefault()
		const form = new FormData(ev.target as HTMLFormElement)
		const relateTest = form.get("related-test") as string
		const getTestCase = await fetchTestCases(relateTest)
		const stepId = (step != null) ? step["stepId"] : null

		let bugDetails = {
			"authorEmail": form.get("creator")?.toString(),
			"description": form.get("description")?.toString(),
			"expectedOutcome": form.get("expected-outcome")?.toString(),
			"testcaseId": getTestCase["caseNumber"]?.toString(),
			"stepId": stepId
		} as any
		
		createBugReport(bugDetails)
			.then(() => {
				if (step != null) {
					step["hasBug"] = true
					updateStep(step)
				}
			})
			.then(() => navigate(`/bugs`))
	}

	return (
		<div data-testid="bug-reports-form" className="section container is-max-desktop">
			<TestCaseControls />
			<CreateBugReportForm submitHandler={ (ev: any) => handleNewTestCase(ev) } fields={state} />
		</div>
	)
}

export default CreateBugReport