import { SyntheticEvent, useEffect, useState } from "react"

function CreateBugReportForm({ submitHandler, fields }: any, props: any) {
	const [values, setValues] = useState({} as any)

	useEffect(() => {
		if (fields) {
			console.log(fields)
			setValues({ 
				actualResult: fields.actualResult || "",
				expectedResult: fields.expectedResult || "", 
				testCaseNumber: fields.testCaseNumber || "" 
			})
		}
	}, [])

	return (
		<>
			<form onSubmit={(ev) => submitHandler(ev)} className="columns is-0">
				<div className="column">
					<div className="field">
						<label className="label has-text-white">Description</label>
						<div className="control">
							<input
								name="description"
								className="input"
								type="text" placeholder="Description" />
						</div>
					</div>
					<div className="field">
						<label className="label has-text-white">Expected Outcome</label>
						<div className="control">
							<textarea
								name="expected-outcome"
								className="textarea has-fixed-size"
								defaultValue={ values.expectedResult } />
						</div>
					</div>
					<div className="field">
						<label className="label has-text-white">Actual Outcome</label>
						<div className="control">
							<textarea
								name="actual-outcome"
								className="textarea has-fixed-size"
								defaultValue={ values.actualResult } />
						</div>
					</div>
					<div className="field">
						<label className="label has-text-white">Creator</label>
						<div className="control">
							<input
								name="creator"
								className="input"
								type="text" placeholder="Creator" />
						</div>
					</div>
					<div className="field">
						<label className="label has-text-white">Related Test</label>
						<div className="control">
							<input
								name="related-test"
								className="input"
								defaultValue={ values.testCaseNumber }
								type="text"	/>
						</div>
					</div>
					<div className="field">
						<div className="control mt-5">
							<input
								className="button"
								type="submit" value="Submit" />
						</div>
					</div>
				</div>
			</form>
		</>
	)
}

export default CreateBugReportForm