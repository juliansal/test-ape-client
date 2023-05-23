/**
 * @jest-environment jsdom
 */
import { render, fireEvent, waitFor, screen } from "@testing-library/react"
import { test, expect, beforeAll } from "vitest"
import { BrowserRouter } from "react-router-dom"
import CreateTestCase from "../../pages/CreateTestCase"

let testcaseEl: HTMLElement

beforeAll(() => {
	const { getByTestId } = render(
		<BrowserRouter>
			<CreateTestCase/>
		</BrowserRouter>
		)
	testcaseEl = getByTestId("create-testcase")
})

test("should display a form on the create test case page", () => {
	const form = testcaseEl.querySelector("form")

	expect(form).toBeTruthy()
})