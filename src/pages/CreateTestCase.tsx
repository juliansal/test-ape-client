import React from "react"
import { useNavigate, Link } from "react-router-dom"
import CreateTestCaseForm from "../components/TCase/CreateTestCaseForm"
import { createTestCase } from "../api/testCaseApi"

function CreateTestCase(props: any) {
	const navigate = useNavigate()

	const handleNewTestCase = (ev: React.SyntheticEvent) => {
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
			<h2 className="title is-2 has-text-white">Create a New Test Case</h2>
			<div className="field is-grouped is-grouped-right">
				<div className="control">
					<Link 
						to={"/"} 
						className="button is-primary">
						Back
					</Link>
				</div>
			</div>
			<CreateTestCaseForm submitHandler={ (ev: any) => handleNewTestCase(ev) } />
		</div>
	)
}

export default CreateTestCase