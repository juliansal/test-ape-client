import { BaseSyntheticEvent, useEffect, useState } from "react"
import { useParams, Link } from "react-router-dom"
import { fetchTestCases } from "../api/testCaseApi"
import { createStep, fetchSteps } from "../api/stepApi"
import StepsTable from "../components/Step/StepsTable"
import CreateStepForm from "../components/Step/CreateStepForm"
import { IStep } from "../models/IStep"

function TestCase() {
	const [tcase, setTCase] = useState({title: "", description: "", authorEmail: ""})
	const [steps, setSteps] = useState([] as IStep[])
	let { caseNumber } = useParams()

	useEffect(() => {
		if (caseNumber) {
			fetchTestCases(caseNumber)
				.then(data => setTCase(data))
			fetchSteps(caseNumber)
				.then(data => setSteps(data))
		}
	}, [])

	const handleCreateStep = (ev: BaseSyntheticEvent) => {
		ev.preventDefault()
		const form = new FormData(ev.target as HTMLFormElement)
		const highestStep = steps.length
		console.log(form.get("hasBug"))
		const bugCheck = (form.get("hasBug") == "on") ? true : false
		const stepParams = { 
			stepOrder: highestStep,
			testCaseNumber: caseNumber,
			action: form.get("stepaction"), 
			expectedResult: form.get("expectedResult"), 
			actualResult: form.get("actualResult"),
			hasBug: bugCheck
		}

		return createStep(stepParams)
			.then(data => setSteps([...steps, data]))
	}

	return (
		<div data-testid="test-case" className="section test-case">
			<Link 
				to={"/"} 
				className="button is-primary">
				Back
			</Link>
			<div className="testcase-info">
				<div><span className="subtitle is-4">Title:</span> { tcase.title }</div>
				<div><span className="subtitle is-4">Description:</span> { tcase.description }</div>
				<div><span className="subtitle is-4">Creator:</span> { tcase.authorEmail }</div>
			</div>
			<StepsTable steps={ steps } />
			<CreateStepForm submitHandler={ (ev: any) => handleCreateStep(ev) } />
		</div>
	)
}

export default TestCase