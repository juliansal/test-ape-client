const TEST_CASES = [{
	id: "00001",
	caseNumber: 1,
	title: "First Testcase",
	description: "Boggarts lavender robes, Hermione Granger Fantastic Beasts and Where to Find Them.",
	creator: "Harry",
	steps: [
		{order: 1, action: "Slytherin’s Heir mewin", expected: "", hasBug: false},
		{order: 2, action: "", expected: "Grim knitted hats", hasBug: false},
		{order: 3, action: "Bred in captivity fell", expected: "", hasBug: false},
		{order: 4, action: "Yer a wizard", expected: "Muggle-Born", hasBug: true}
	],
	bugs: [
		{caseNumber: 1}
	],
	type: "TESTCASE"
},{
	id: "00002",
	caseNumber: 2,
	title: "Second Testcase",
	description: "Pumpkin juice Trevor wave.",
	creator: "Ron",
	steps: [
		{order: 1, action: "Slytherin’s Heir mewin", expected: "", hasBug: false},
		{order: 2, action: "", expected: "Grim knitted hats", hasBug: false},
		{order: 4, action: "Yer a wizard", expected: "Muggle-Born", hasBug: true}
	],
	bugs: [
		{caseNumber: 1}
	],
	type: "TESTCASE"
}
]