import { AiOutlineEye } from 'react-icons/ai';
import { AiOutlineLock } from 'react-icons/ai';
import { AiOutlineMail } from 'react-icons/ai';
import { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { useNavigate } from "react-router-dom";


function Register() {
  const [user, setuser] = useState({
    email: '',
    password: '',
    confirmPassword: ''
  })
  const { password, confirmPassword } = user;
  const { signUp } = useAuth()
  const navigate = useNavigate()
  const [passwordShown, setPasswordShown] = useState(false);
  const [error, setError] = useState("");
  
  // const [success, setSuccess] = useState("");

  const handleChange = ({target: {name, value}}) => {
    setuser({...user, [name]: value})
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    
    if (password !== confirmPassword) {
      setError("Password not match");
      return;
    }

    if (password.length && confirmPassword.length < 6) {
      setError("Password must be more than 6");
      return;
    }

    try {
      await signUp(user.email, user.password)
      setError("");
      navigate('/')

      
    } catch (error) {
      console.log(error.message);
    }
  }

  return (
    <div className="auth-sign-up">
      <form onSubmit={handleSubmit}>
        <div className="email-input">
          <input
            type="email"
            placeholder="Email address"
            onChange={handleChange}
            name="email"
            required
          />
          <AiOutlineMail className="input-icons" />
        </div>
        <div className="password-input">
          <input
            type={passwordShown ? "text" : "password"}
            placeholder="******"
            onChange={handleChange}
            name="password"
            required
          />
          <AiOutlineLock className="input-icons" />
          <AiOutlineEye
            onClick={() => setPasswordShown(!passwordShown)}
            className="pass-input-icons"
          />
        </div>
        <div className="password-input">
          <input
            type={passwordShown ? "text" : "password"}
            placeholder="Confirm Password"
            onChange={handleChange}
            name="confirmPassword"
            required
          />
          <AiOutlineLock className="input-icons" />
          <AiOutlineEye
            onClick={() => setPasswordShown(!passwordShown)}
            className="pass-input-icons" />
        </div>

        <div className="sign-in-btn">
          <button type="submit">
            Register
          </button>
        </div>
      </form>
      {error && <p style={{ color: "red" }}>{error}</p>}
      {/* {success && <p style={{ color: "green" }}>{success}</p>} */}
    </div>
  )
}

export default Register