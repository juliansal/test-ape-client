import { SyntheticEvent } from "react"
import { useNavigate, Link } from "react-router-dom"
import CreateTestCaseForm from "../components/TCase/CreateTestCaseForm"
import { createTestCase } from "../api/testCaseApi"
import { TestCaseControls } from "../components/TCase/TestCaseList"

function CreateTestCase(props: any) {
	const navigate = useNavigate()

	const handleNewTestCase = (ev: SyntheticEvent) => {
		ev.preventDefault()
		const form = new FormData(ev.target as HTMLFormElement)
		const testCaseDetails = {
			"title": form.get("title"),
			"description": form.get("description"),
			"authorEmail": form.get("authorEmail"),
			"preConditions": form.get("preConditions")
		}

		createTestCase(testCaseDetails)
			.then(data => navigate(`/testcase/${data.caseNumber}`))
	}

	return (
		<div data-testid="create-testcase" className="section container is-max-desktop">
			<TestCaseControls />
			<h2 className="title is-2 has-text-white">Create a New Test Case</h2>
			<CreateTestCaseForm submitHandler={ (ev: any) => handleNewTestCase(ev) } />
		</div>
	)
}

export default CreateTestCase