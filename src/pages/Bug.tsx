import { BaseSyntheticEvent, useEffect, useState } from "react"
import { useParams, Link } from "react-router-dom"
import { fetchBugReport, updateBugReport } from "../api/bugReportApi"
import { TestCaseControls } from "../components/TCase/TestCaseList"
import { IBug } from "../models/IBug"
import { fetchTestCases } from "../api/testCaseApi"


function Bug() {
	const [bug, setBug] = useState({} as IBug)
	const [tcase, setTCase] = useState({title: "", caseNumber: ""})
	const [hasChanged, setHasChanged] = useState(false)
	let { id, testcaseId } = useParams()

	useEffect(() => {
		if (id && testcaseId) {
			fetchBugReport(id, testcaseId)
				.then(data => setBug(data))
			
			fetchTestCases(testcaseId)
				.then(data => setTCase(data))
		}
	}, [])

	const handleChange = (ev: BaseSyntheticEvent) => {
		ev.preventDefault()
		const { name, value } = ev.target
		setBug((prev) => ({...prev, [name]: value}))
		setHasChanged(true)
	}

	const handleClick = (ev: BaseSyntheticEvent) => {
		ev.preventDefault()
		setHasChanged(false)
		updateBugReport({ 
			id: bug.id,
			testcaseId: bug.testcaseId,
			bugStatus: bug.bugStatus,
			description: bug.description,
			expectedOutcome: bug.expectedOutcome,
			authorEmail: bug.authorEmail
		})
	}

	const SaveButton = () => {
		return (
			<div 
				onClick={ (ev) => handleClick(ev) }
				className="button is-primary">Save</div>
		)
	}

	const BugStatusSelect = () => {
		const statues = ["ACTIVE", "CANCELLED", "RESOLVED"]
		const options = statues.map((opt, i) => {
			return (<option key={i}>{opt}</option>)
		})

		return (
			<select 
				name="bugStatus"
				onChange={ (ev) => handleChange(ev) }
				defaultValue={ bug.bugStatus || "" } id="bugStatus">
				{options}
			</select>
		)
	}

	const RelatedTest = () => {
		return (
			<div>{ `(# ${bug.testcaseId}) ${tcase.title}` }</div>
		)
	}

	return (
		<div data-testid="bug-report" className="section bug-report container is-max-desktop">
			<TestCaseControls />
			<div className="columns">
				<div className="column is-one-fifth">
					<div className="subtitle is-4 has-text-light">Bug ID:</div>
				</div>
				<div className="column">
					<div>{ bug.id }</div>
				</div>
			</div>
			<div className="columns">
				<div className="column is-one-fifth">
					<div className="subtitle is-4 has-text-light">Creator:</div>
				</div>
				<div className="column">
					<div>{ bug.authorEmail }</div>
				</div>
			</div>
			<div className="columns">
				<div className="column is-one-fifth">
					<div className="subtitle is-4 has-text-light">Status:</div>
				</div>
				<div className="column">
					<div className="select is-small">{ <BugStatusSelect/> }</div>
				</div>
			</div>
			<div className="columns">
				<div className="column is-one-fifth">
					<div className="subtitle is-4 has-text-light">Related Test:</div>
				</div>
				<div className="column">
					<RelatedTest />
				</div>
			</div>
			<div className="columns">
				<div className="column is-one-fifth">
					<div className="field is-horizontal">
						<span className="subtitle is-4 has-text-light">Description: </span>
					</div>
				</div>
				<div className="column">
					<div className="field is-horizontal">
						<div className="field-body">
							<div className="field">
								<div className="control">
									<input
										onChange={ (ev) => handleChange(ev) }
										name="description"
										className="input"
										type="text" 
										defaultValue={ bug.description || "" } />
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="columns">
				<div className="column is-one-fifth">
					<div className="field is-horizontal">
						<span className="subtitle is-4 has-text-light">Expected Outcome: </span>
					</div>
				</div>
				<div className="column">
					<div className="field is-horizontal">
						<div className="field-body">
							<div className="field">
								<div className="control">
									<textarea
										onChange={ (ev) => handleChange(ev) }
										name="expectedOutcome"
										className="input"
										defaultValue={ bug.expectedOutcome || "" } />
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div>{ hasChanged && <SaveButton/> }</div>
		</div>
	)
}

export default Bug