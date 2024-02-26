export interface IStep {
	stepOrder: number,
	stepId: number,
	testCaseNumber: number,
	action: string | null,
	expectedResult: string | null,
	actualResult: string | null,
	hasBug: boolean
}