import axios, { AxiosRequestConfig } from "axios"

const bugReportApi = axios.create({
	baseURL: "http://localhost:8080/api/v1/bug-reports/"
})

export const fetchBugReports = async (status: string) => {
	console.debug(status)
	const response = await bugReportApi.get("", { params: { status: status } })
	return response.data
}

export const fetchBugReport = async (bugId: string, testcaseId: string) => {
	const response = await bugReportApi.get("bug", { params: { bug: bugId, testcase: testcaseId } })
	return response.data
}

export const fetchBugReportsByTestcase = async (testcaseId: string) => {
	const response = await bugReportApi.get("testcase", { params: { testcase: testcaseId } })
	return response.data
}

export const fetchAllBugReports = async () => {
	const response = await bugReportApi.get("all")
	return response.data
}

export const createBugReport = async (bugReport: any) => {
	const config: AxiosRequestConfig<any> = { 
		headers: { 
			'Content-Type': 'application/json' 
		}
	}
	const response = await bugReportApi.post("", bugReport, config)
	return response.data
}

export const deleteBugReport = async (bugReport: any) => {
	const config: AxiosRequestConfig<any> = { 
		data: {
			id: bugReport["id"],
			testcaseId: bugReport["testcaseId"]
		},
		headers: { 
			'Content-Type': 'application/json' 
		}
	}
	const response = await bugReportApi.delete("", config)
	return response.data
}

export const updateBugReport = async (bugReport: any) => {
	const config: AxiosRequestConfig<any> = { 
		headers: { 
			'Content-Type': 'application/json' 
		}
	}

	const response = await bugReportApi.put("", bugReport, config)
	return response.data
}
