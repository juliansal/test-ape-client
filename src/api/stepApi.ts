import axios, { AxiosRequestConfig } from "axios"

const stepApi = axios.create({
	baseURL: "http://localhost:8080/api/v1/steps/"
})

export const fetchSteps = async (path: string) => {
	const response = await stepApi.get(path)
	return response.data
}

export const createStep = async (step: any) => {
	const config: AxiosRequestConfig<any> = { 
		headers: { 
			'Content-Type': 'application/json' 
		}
	}
	const response = await stepApi.post("/", step, config)
	
	return response.data
}

export const updateStep = async (step: any) => {
	const config: AxiosRequestConfig<any> = { 
		headers: { 
			'Content-Type': 'application/json' 
		}
	}
	const response = await stepApi.put("/", step, config)
	
	return response.data
}