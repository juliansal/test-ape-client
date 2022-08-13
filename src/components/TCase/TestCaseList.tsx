import { Link } from "react-router-dom"

function TestCaseCard(props: any) {
	return (
		<Link to={ "testcase/" + props.val.caseNumber }>
			<div className="card mb-3">
				<div className="card-content">
					<div><strong>Title:</strong> { props.val.title }</div>
					<div><strong>Description:</strong> { props.val.description }</div>
					<div><strong>Creator:</strong> { props.val.authorEmail }</div>
				</div>
			</div>
		</Link>
	)
}

function TestCaseList(props: any) {
	return (
		<div className="section testcases">
			{ props.tcases.map((v: string, k: string) => (<TestCaseCard key={k} val={v} />)) }
		</div>
	)
}

export default TestCaseList