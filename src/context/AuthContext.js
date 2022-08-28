import { createContext, useContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from "../firebase/config";


export const authContext = createContext()

export const useAuth = () => {
 const context = useContext(authContext)
 if (!context) throw new Error ('There is not auth provider')
 return context

}
export function AuthProvider ({children}) {
  const [user, setuser] = useState(null)

  const signUp = (email, password) => {
    createUserWithEmailAndPassword(auth, email, password);
  }

  const login = async (email, password) => {
    if (!email || !password) return;
    return await signInWithEmailAndPassword(auth, email, password);
  };

  const loginWithGoogle = () => {
    const googleProvider = new GoogleAuthProvider()
    return signInWithPopup(auth, googleProvider)
  }

  const logout = () => signOut(auth)

  useEffect(() =>{
    onAuthStateChanged(auth, currentUser => {
      setuser(currentUser)
      
    })
  }, [])


  return(
    <authContext.Provider value={{ signUp, login, user, logout, loginWithGoogle }}>
      {children}
    </authContext.Provider>
  )
}