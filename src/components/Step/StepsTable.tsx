import Step from "./Step"
import { IStep } from "../../models/IStep"

function StepsTable(props: any) {

	return (
		<table className="table is-hoverable steps-table">
			<thead>
				<tr>
					<th>Step</th>
					<th>Action</th>
					<th>Expected Result</th>
					<th>Actual Result</th>
					<th>Bug</th>
				</tr>
			</thead>
			<tbody>
			{ props.steps.map((v: IStep, k: number) => (<Step key={k} val={v} />)) }
			</tbody>
		</table>
	)
}

export default StepsTable