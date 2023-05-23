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

function TestCaseControls(props: any) {

	return (
		<div className="field is-grouped is-grouped-right">
			<div className="control">
				<Link 
					to={"create"} 
					className="button is-primary">
					New Test Case
				</Link>
			</div>
		</div>
	)
}

function TestCaseList(props: any) {
	return (
		<div className="testcases">
			<TestCaseControls />
			{ props.tcases.map((v: string, k: number) => (<TestCaseCard key={k} val={v} />)) }
		</div>
	)
}

export default TestCaseList