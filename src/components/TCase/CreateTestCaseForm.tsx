
function CreateTestCaseForm({ submitHandler }: any, props: any) {
	return (
		<>
			<form onSubmit={(ev) => submitHandler(ev)} className="columns is-0">
				<div className="column">
					<div className="field">
						<label className="label has-text-white">Title</label>
						<div className="control">
							<input
								name="title"
								className="input"
								type="text" placeholder="Title" />
						</div>
					</div>
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
						<label className="label has-text-white">Email Address</label>
						<div className="control">
							<input
								name="authorEmail"
								className="input"
								value="kay@mail.com"
								readOnly
								type="text" placeholder="Email Address" />
						</div>
					</div>
					<div className="field">
						<label className="label has-text-white">Pre-Conditions</label>
						<div className="control">
							<textarea
								name="preConditions"
								className="textarea has-fixed-size"
								placeholder="Pre-Conditions" />
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

export default CreateTestCaseForm