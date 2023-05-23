import { useEffect } from "react"

function CreateStepForm({ submitHandler }: any, props: any) {

	useEffect(() => {
		const inputs = document.querySelectorAll("form input")
		Array
				.from(inputs)
				.filter((input: any) => input["type"] != "submit")
				.forEach((input: any) => {
					if (input["type"] == "checkbox") {
						input["checked"] = false
					} else {
						input["value"] = ""
					}
				})
	})

	return (
		<>
			<form onSubmit={(ev) => submitHandler(ev)} className="field is-horizontal">
				<div className="field-body">
					<div className="field">
						<div className="control">
							<input
								name="stepaction"
								className="input"
								type="text" placeholder="Action" />
						</div>
					</div>
					<div className="field">
						<div className="control">
							<input
								name="expectedResult"
								className="input"
								type="text" placeholder="Expected Result" />
						</div>
					</div>
					<div className="field">
						<div className="control">
							<input
								name="actualResult"
								className="input"
								type="text" placeholder="Actual Result" />
						</div>
					</div>
					<div className="field">
						<div className="control">
							<label className="checkbox has-text-white">
								<input
									name="hasBug"
									type="checkbox"
								/> Has Bug
							</label>
						</div>
					</div>
					<div className="field">
						<div className="control">
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

export default CreateStepForm