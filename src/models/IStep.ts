export interface IStep {
	stepOrder: number,
	testCaseNumber: number,
	action: string | null,
	expectedResult: string | null,
	actualResult: string | null,
	hasBug: boolean
}