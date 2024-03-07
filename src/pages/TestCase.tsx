import { BaseSyntheticEvent, useEffect, useState, createContext, useContext } from "react"
import { useParams, Link } from "react-router-dom"
import { fetchTestCases } from "../api/testCaseApi"
import { createStep, fetchSteps } from "../api/stepApi"
import { fetchBugReportsByTestcase } from "../api/bugReportApi"
import StepsTable from "../components/Step/StepsTable"
import CreateStepForm from "../components/Step/CreateStepForm"
import { IStep } from "../models/IStep"
import { ITestCase } from "../models/ITestCase"
import { TestCaseControls } from "../components/TCase/TestCaseList"
import TestCaseSummary from "../components/TCase/TestCaseSummary"
import { IBug } from "../models/IBug"


function TestCase() {
	const [tcase, setTCase] = useState({} as ITestCase)
	const [steps, setSteps] = useState([] as IStep[])
	const [bugs, setBugs] = useState([] as IBug[])
	let { caseNumber } = useParams()

	useEffect(() => {
		if (caseNumber) {
			fetchTestCases(caseNumber)
				.then(data => setTCase(data))
			fetchSteps(caseNumber)
				.then(data => setSteps(data))
			fetchBugReportsByTestcase(caseNumber)
				.then(data => setBugs(data))
		}
	}, [])

	const handleCreateStep = (ev: BaseSyntheticEvent) => {
		ev.preventDefault()
		const form = new FormData(ev.target as HTMLFormElement)
		const highestStep = steps.length
		const stepParams = { 
			stepOrder: highestStep,
			testCaseNumber: caseNumber,
			action: form.get("stepaction"), 
			expectedResult: form.get("expectedResult"), 
			actualResult: form.get("actualResult")
		}

		return createStep(stepParams)
			.then(data => setSteps([...steps, data]))
	}

	return (
		<div data-testid="test-case" className="section test-case container is-max-desktop">
			<TestCaseControls />
			<TestCaseSummary tcase={ tcase } hasBugs={ bugs.length > 0 } bugs={ bugs } />
			<StepsTable steps={ steps } />
			<CreateStepForm submitHandler={ (ev: any) => handleCreateStep(ev) } />
		</div>
	)
}

export default TestCase