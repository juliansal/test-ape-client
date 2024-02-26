export interface IBug {
	id: number,
	stepId: number,
	testcaseId: number,
	authorEmail: string | null,
	description: string | null,
	expectedOutcome: string | null,
	createdAt: string | null,
	bugStatus: string | null
}