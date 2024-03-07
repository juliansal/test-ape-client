import React, { createContext, useEffect, useReducer } from "react"
import AuthReducer from "./AuthReducer"

const INITIAL_STATE = {
	currentUser: JSON.parse(localStorage.getItem("user") as any),
	dispatch: (action: any) => {}
}

export const AuthContext = createContext(INITIAL_STATE)

export const AuthContextProvider = (props: any) => {
	const [state, dispatch] = useReducer(AuthReducer, INITIAL_STATE)

	useEffect(() => {
		console.log(state.currentUser)
		localStorage.setItem("user", JSON.stringify(state.currentUser))
	}, [state.currentUser])

	return (
		<AuthContext.Provider value={{ currentUser: state.currentUser, dispatch }}>
			{ props.children }
		</AuthContext.Provider>
	)
}