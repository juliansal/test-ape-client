import axios from "axios"

const testCaseApi = axios.create({
	baseURL: "http://localhost:8080/api/v1/test-cases/"
})

export const fetchTestCases = async (path: string) => {
	const response = await testCaseApi.get(path)
	return response.data
}

export const searchTestCases = async (searchParams: any) => {
	console.log(searchParams)
	const response = await testCaseApi.get("search", { params: searchParams })
	return response.data
}