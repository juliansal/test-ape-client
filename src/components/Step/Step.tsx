
function Step(props: any) {

	return (
		<tr>
			<td>{ props.val.stepOrder + 1 }</td>
			<td>{ props.val.action }</td>
			<td>{ props.val.expectedResult }</td>
			<td>{ props.val.actualResult }</td>
			<td>{ props.val.hasBug }</td>
		</tr>
	)
}

export default Step