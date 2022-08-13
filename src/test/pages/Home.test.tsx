/**
 * @jest-environment jsdom
 */
import { render, fireEvent, waitFor, screen } from "@testing-library/react"
import { test, expect, beforeAll } from "vitest"
import Home from "../../pages/Home"

let homeEl: HTMLElement

beforeAll(() => {
	const { getByTestId } = render(<Home/>)
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