/**
 * @jest-environment jsdom
 */
import { render, fireEvent, waitFor, screen } from "@testing-library/react"
import { test, expect, beforeAll } from "vitest"
import App from "../../App"

let homeEl: HTMLElement

beforeAll(() => {
	const { getByTestId } = render(<App/>)
	homeEl = getByTestId("home")
})

test("should display a form on the home page", () => {
	const form = homeEl.querySelector("form")

	expect(form).toBeTruthy()
})

test("should display testcases on the home page", () => {
	const testcases = homeEl.querySelector("div.testcases")

	expect(testcases).toBeTruthy()
})