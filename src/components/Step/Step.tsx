import { BaseSyntheticEvent, useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { fetchBugReportsByTestcase } from "../../api/bugReportApi"
import { updateStep } from "../../api/stepApi"
import { IBug } from "../../models/IBug"


function Step(props: any) {
	const [fieldVals, setFieldVals] = useState({ 
		testCaseNumber: 0,
		stepOrder: 0,
		stepId: 0,
		action: "", 
		expectedResult: "", 
		actualResult: ""
	})
	const [hasChanged, setHasChanged] = useState(false)

	useEffect(() => {
		setFieldVals((prev) => ({
			...prev,
			testCaseNumber: props.val.testCaseNumber,
			stepOrder: props.val.stepOrder,
			stepId: props.val.stepId,
			action: props.val.action,
			expectedResult: props.val.expectedResult,
			actualResult: props.val.actualResult
		}))
	}, [])

	const handleChange = (ev: BaseSyntheticEvent) => {
		ev.preventDefault()
		const { name, value } = ev.target
		setFieldVals((prev) => ({...prev, [name]: value}))
		setHasChanged(true)
	}

	const handleClick = (ev: BaseSyntheticEvent) => {
		ev.preventDefault()
		setHasChanged(false)
		updateStep({ 
			stepOrder: fieldVals.stepOrder,
			stepId: fieldVals.stepId,
			testCaseNumber: fieldVals.testCaseNumber,
			action: fieldVals.action,
			expectedResult: fieldVals.expectedResult,
			actualResult: fieldVals.actualResult,
			hasBug: props.val.hasBug })
	}

	const SaveButton = () => {
		return (
			<div 
				onClick={ (ev) => handleClick(ev) }
				className="button is-primary">Save</div>
		)
	}

	return (
		<tr>
			<td>{ hasChanged && <SaveButton/> || fieldVals.stepOrder + 1 }</td>
			<td>
				<input 
					onChange={ (ev) => handleChange(ev) }
					name="action"
					className="input"
					defaultValue={ fieldVals.action }
					type="text" />
			</td>
			<td>
				<textarea
					onChange={ (ev) => handleChange(ev) }
					name="expectedResult"
					className="textarea has-fixed-size"
					defaultValue={ fieldVals.expectedResult } />
			</td>
			<td>
				<textarea
					onChange={ (ev) => handleChange(ev) }
					name="actualResult"
					className="textarea has-fixed-size"
					defaultValue={ fieldVals.actualResult } />
			</td>
			<td>{ props.val.hasBug ? <BugIcon val={props.val}/> : <NoBug val={props.val} /> }</td>
		</tr>
	)
}

function BugIcon(props: any) {
	const navigate = useNavigate()
	const [bugIds, setBugIds] = useState([] as IBug[])

	useEffect(() => {
		fetchBugReportsByTestcase(props.val.testCaseNumber)
			.then(data => setBugIds(data))
	}, [])

	const handleBugRequest = (ev: BaseSyntheticEvent) => {
		ev.preventDefault()
		navigate(`/bugs/${props.val.testCaseNumber}`)
	}

	const bugIdList = () => {
		let list = bugIds.map((bug) => `Bug #: ${bug.id}`)
		return list.toString()
	}

	return (
		<span className="icon has-text-warning" data-tooltip={ bugIdList() } onClick={ (ev) => handleBugRequest(ev) }>
			<i className="fa-solid fa-bug" style={{color: "#ff0000"}}></i>
		</span>
	)
}

function NoBug(props: any) {
	const navigate = useNavigate()

	const handleReportBug = (ev: BaseSyntheticEvent) => {
		ev.preventDefault()
		navigate("/bugs/create", { state: props.val })
	}

	return (
		<span className="icon has-text-warning" data-tooltip="Report New Bug" onClick={ (ev) => handleReportBug(ev) }>
			<i className="fa-regular fa-square" style={{color: "#000000"}}></i>
		</span>
	)
}

export default Step