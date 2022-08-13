

function SearchForm({ submitHandler }: any, props: any) {
	return (
		<>
			<form onSubmit={(ev) => submitHandler(ev)} className="columns is-0">
				<div className="column">
					<div className="field">
						<div className="control">
							<input
								name="title"
								className="input"
								type="text" placeholder="Title" />
						</div>
					</div>
				</div>
				<div className="column">
					<div className="field">
						<div className="control">
							<input
								name="status"
								className="input"
								type="text" placeholder="Status" />
						</div>
					</div>
				</div>
				<div className="column">
					<div className="field">
						<div className="control">
							<input
								name="author"
								className="input"
								type="text" placeholder="Author" />
						</div>
					</div>
				</div>
				<div className="column">
					<div className="field">
						<div className="control">
							<input
								className="button"
								type="submit" value="Search" />
						</div>
					</div>
				</div>
			</form>
		</>
	)
}

export default SearchForm