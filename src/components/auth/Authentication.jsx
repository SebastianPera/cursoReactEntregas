
import { FcGoogle } from "react-icons/fc";
import { useState } from "react";
import SignIn from '../SignIn';
import Register from '../Register';
import { useAuth } from "../../context/AuthContext";
import { useNavigate } from 'react-router-dom';
import "./Authentication.css";

const Authentication = () => {
  
  const navigate = useNavigate()
  const { loginWithGoogle, user } = useAuth();
  const [show, setShow] = useState(true);
  
  const handleGoogleSignIn = async () => {
    try {
      await loginWithGoogle()
      navigate('/')
      
    } catch (error) {
      console.log(error.message);
    }
  }

  return (
    <div className="auth-container">
      <div className="auth-card-container">
        <div className="auth-card">
          <div className="auth-card-top">
            <h1 onClick={() => setShow(true)} className={show ? "active" : ""}>
              Sign in
            </h1>
            <h1 onClick={() => setShow(false)} className={show ? "" : "active"}>
              Register
            </h1>
          </div>
          <div className="auth-card-bottom">
            {show ? <SignIn /> : <Register />}
          </div>
          <div className="auth-bottom">
            <p>Or sign in with</p>
            <FcGoogle className="google-sign-in" onClick={handleGoogleSignIn} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Authentication;