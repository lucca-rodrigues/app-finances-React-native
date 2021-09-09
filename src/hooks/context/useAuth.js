import React, { useState, useContext, createContext, useEffect } from 'react'
import firebase from '../../services/firebaseConnection' 

export const AuthContext = createContext({})

export function AuthProvider( { children }){
	const [user, setUser] = useState(null)

	async function signUp(email, password, name){
		await firebase.auth().createUserWithEmailAndPassword(email, password)
		.then(async (value) => {
				let uid = value.user.uid
				await firebase.database().ref('users').child(uid).set({
						balance: 0,
						name: name
				})
				.then( () => {
						let data = {
								uid: uid,
								name: name,
								email: value.user.email,
						}
						setUser(data)
				})
				.catch( (error) => {
						alert(error.code)
				})
		})
  }

    return (
        <AuthContext.Provider value={{ signed: !!user, user, signUp }}>
            {children}
        </AuthContext.Provider>
    )
}

export function useAuth(){
    return useContext(AuthContext)
}