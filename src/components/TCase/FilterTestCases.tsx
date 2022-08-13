
function FilterTestCases({ filterHandler }: any, props: any) {
	return (
		<div className="field">
			<div className="control">
				<div className="select">
					<select onChange={(ev) => filterHandler(ev)}>
						<option value="ACTIVE">Find By: </option>
						<option value="ACTIVE" >Active</option>
						<option value="INACTIVE" >Inactive</option>
					</select>
				</div>
			</div>
		</div>
	)
}

export default FilterTestCases