import { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import '../styles/ForgotPassword.css'




const ForgotPassword = () => {
  const [field, setField] = useState({});
  const [error, setError] = useState("")
 const { resetPassword } = useAuth();
  
  const onEmailChange = ({target: {name, value}}) => {
    setField({[name]: value})
  }

  const handleResetPassword = async () => {
    if(!field.email) return setError("Please enter your email")
    try {
      await resetPassword(field.email);
      setError("we sent you an email with a link to reset your password")
    } catch (error) {
      setError(error.message); 
    }
  }


  return(
    <div className='forgot_password'>
      <h3>Forgot Your Password?</h3>
      <p>Enter your email address and we will send you a password reset email.</p>
      <br />
      <input name="email" type="email" placeholder="Enter your email" onChange={onEmailChange} required className="input_forgotPassword" />
      <br />
      <br />
      <button onClick={handleResetPassword}>&nbsp; Send Password Reset Email</button>
      {error && <p style={{ color: "red" }}>{error}</p>}
    </div>


  )


}

export default ForgotPassword;