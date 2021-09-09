import React, { useState, useContext, createContext, useEffect } from 'react'
import firebase from '../../services/firebaseConnection' 

export const AuthContext = createContext({})

export function AuthProvider({ children }){
	const [user, setUser] = useState(null)

  async function signIn(email, password, name){
    console.log(email, password, name)

		await firebase.auth().signInWithEmailAndPassword(email.trim(), password)
		.then(async (value) => {
				let uid = value.user.uid;

				await firebase.database().ref('users').child(uid).once('value')
				.then((snapshot) => {
          let data = {
              uid: uid,
              name: snapshot.val().name,
              email: value.user.email,
          }
          console.log('DATA:', data)
          setUser(data)
				})
				.catch( (error) => {
						alert(error.code)
				})
		})
  }

	async function signUp(email, password, name){
    console.log(email, password, name)

		await firebase.auth().createUserWithEmailAndPassword(email.trim(), password)
		.then(async (value) => {
				let uid = value.user.uid;

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
          console.log('DATA:', data)
          setUser(data)
				})
				.catch( (error) => {
						alert(error.code)
				})
		})
  }

    return (
        <AuthContext.Provider value={{ signed: !!user, user, signIn, signUp }}>
            {children}
        </AuthContext.Provider>
    )
}

export function useAuth(){
    return useContext(AuthContext)
}