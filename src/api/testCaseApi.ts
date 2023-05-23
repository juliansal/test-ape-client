import axios, { AxiosRequestConfig } from "axios"

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

export const createTestCase = async (testCase: any) => {
	const config: AxiosRequestConfig<any> = { 
		headers: { 
			'Content-Type': 'application/json' 
		}
	}
	const response = await testCaseApi.post("new", testCase, config)
	
	return response.data
}