/**
 * @jest-environment jsdom
 */
import { render, fireEvent, waitFor, screen } from "@testing-library/react"
import { test, expect, beforeAll } from "vitest"
import { BrowserRouter } from "react-router-dom"
import TestCase from "../../pages/TestCase"

let underTestEl: HTMLElement

beforeAll(() => {
	const { getByTestId } = render(
	<BrowserRouter>
		<TestCase/>
	</BrowserRouter>
	)
	underTestEl = getByTestId("test-case")
})

test("should display information about the test case", () => {
	const testCaseInfo = underTestEl.querySelector(".testcase-info")?.querySelectorAll("div")

	expect(testCaseInfo?.item(0).innerHTML).toContain("Title:")
	expect(testCaseInfo?.item(1).innerHTML).toContain("Description:")
	expect(testCaseInfo?.item(2).innerHTML).toContain("Creator:")
})

test("should display a table for steps", () => {
	const stepsTable = underTestEl.querySelector("table")

	expect(stepsTable).toBeTruthy()
})