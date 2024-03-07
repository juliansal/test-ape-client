import React, { BaseSyntheticEvent, useContext } from "react"
import { 
	signInWithEmailAndPassword,
	signOut } from 'firebase/auth'
import { auth } from "../firebase.config"
import { useNavigate } from "react-router-dom"
import { AuthContext } from "../context/AuthContext"

function Login() {
	const navigate = useNavigate()
	const { dispatch } = useContext(AuthContext)

	const handleSignIn = async (ev: BaseSyntheticEvent) => {
		ev.preventDefault()
		const form = new FormData(ev.target as HTMLFormElement)
		const email = form.get("email")?.toString() || ""
		const password = form.get("password")?.toString() || ""
		await signInWithEmailAndPassword(auth, email, password)
			.then(
				(success) => { 
					dispatch({type: "LOGIN", payload: success.user})
					navigate("/")
				},
				(fail) => console.log(fail)
			)
	}

	const handleSignOut = async (ev: BaseSyntheticEvent) => {
		ev.preventDefault()
		await signOut(auth)
			.then(
				(success) => {
					dispatch({type: "LOGOUT"})
				},
				(fail) => console.log(fail)
			)
	}

	return (
	<div className="section ">
		<form onSubmit={(ev) => handleSignIn(ev)} className="columns is-0">
			<div className="column">
				<div className="field">
					<div className="control">
						<input 
							type="text" 
							name="email"
							className="input"
							placeholder="Email Address"/>
					</div>
				</div>
				<div className="field">
					<div className="control">
						<input 
							type="password" 
							name="password"
							className="input"
							placeholder="Password"/>
					</div>
				</div>
				<div className="field">
					<div className="control">
						<input 
							type="submit"
							className="button"
							value={"Log In"}/>
					</div>
				</div>
			</div>
		</form>

		<form onSubmit={(ev) => handleSignOut(ev)} className="columns is-0">
			<div className="column">
				<div className="field">
					<div className="control">
						<input 
							type="submit"
							className="button"
							value={"Log Out"}/>
					</div>
				</div>
			</div>
		</form>
	</div>)
}

export default Login