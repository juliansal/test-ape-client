import { BaseSyntheticEvent, useEffect, useState } from "react"
import { useNavigate, Link } from "react-router-dom"

function TestCaseSummary({tcase, hasBugs, bugs}: any) {

	return (
		<table className="table is-narrow testcase-info">
				<tbody>
					<tr>
						<th>Title</th>
						<td>({ tcase.caseNumber }) { tcase.title }</td>
					</tr>
					<tr>
						<th>Description</th>
						<td>{ tcase.description }</td>
					</tr>
					<tr>
						<th>Creator</th>
						<td>{ tcase.authorEmail }</td>
					</tr>
					{ hasBugs && <BugsRow tcase={ tcase } bugs={ bugs } /> }
				</tbody>
			</table>
	)
}

function BugsRow({tcase, bugs}: {tcase: any; bugs: any[]}) {
	const navigate = useNavigate()

	const handleBugRequest = (ev: BaseSyntheticEvent) => {
		ev.preventDefault()
		console.log(tcase)
		navigate(`/bugs/${tcase.caseNumber}`)
	}

	const getBugIds = () => {
		return bugs.map(b => `Bug #: ${b.id}`).toString()
	}

	return (
		<tr>
			<th>Bugs</th>
			<td>
				<span className="icon has-text-warning" data-tooltip={ getBugIds() } onClick={ (ev) => handleBugRequest(ev) }>
					<i className="fa-solid fa-bug" style={{color: "#ff0000"}}></i>
				</span>
			</td>
		</tr>
	)
}

export default TestCaseSummary