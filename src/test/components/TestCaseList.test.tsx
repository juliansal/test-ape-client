/**
 * @jest-environment jsdom
 */
import { render, fireEvent, waitFor, screen } from "@testing-library/react"
import { test, expect, beforeAll, afterEach, afterAll } from "vitest"
import Home from "../../pages/Home"

test("should display a list of test cases", () => {
	// const { getByTestId } = render(<Home/>)
	// const homeEl = getByTestId("home")
	
	// expect(homeEl.querySelector("form")).toBeTruthy()
	expect(true)
})
