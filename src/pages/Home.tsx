import React, { BaseSyntheticEvent, useEffect, useState } from "react"
import { searchTestCases, fetchTestCases } from "../api/testCaseApi"
import { TestCaseList, TestCaseControls } from "../components/TCase/TestCaseList"
import SearchForm from "../components/TCase/SearchForm"
import FilterTestCases from "../components/TCase/FilterTestCases"

function Home() {
	const [tcases, setTCases] = useState([])

	useEffect(() => {
		fetchTestCases("all")
			.then(data => setTCases(data))
	}, [])

	const handleSearch = (ev: React.SyntheticEvent) => {
		ev.preventDefault()
		const form = new FormData(ev.target as HTMLFormElement)
		const searchParams = { 
			title: form.get("title"), 
			status: form.get("status"), 
			author: form.get("author") 
		}

		searchTestCases(searchParams)
			.then(data => setTCases(data))
	}

	const handleFilter = (ev: BaseSyntheticEvent) => {		
		switch (ev.target.value) {
			case "ACTIVE":
				fetchTestCases("").then(data => setTCases(data))
				break
			case "INACTIVE":
				searchTestCases({status: "INACTIVE"}).then(data => setTCases(data))
				break
			default:
		}
	}

	return (
		<div data-testid="home" className="section container is-max-desktop">
			<SearchForm submitHandler={ (ev: any) => handleSearch(ev) } />
			<FilterTestCases filterHandler={ (ev: any) => handleFilter(ev) } />
			<TestCaseControls />
			<TestCaseList tcases={ tcases } />
		</div>)
}

export default Home