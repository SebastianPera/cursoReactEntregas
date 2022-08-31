import { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { useNavigate, Link } from 'react-router-dom';
import { AiOutlineMail, AiOutlineEye, AiOutlineLock } from 'react-icons/ai';
import './auth/Authentication.css'

function SignIn() {
  const [user, setuser] = useState({
    email: '',
    password: ''
  })
  const { login } = useAuth();
  const [error, setError] = useState("");
  const [passwordShown, setPasswordShown] = useState(false);
  const navigate = useNavigate();


  const handleChange = ({target: {name, value}}) => {
    setuser({...user, [name]: value})
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    try {
      await login(user.email, user.password);
      navigate('/');
      setuser('');
    } catch (error) {
      switch (error.code) {
        case "auth/wrong-password":
          setError("Wrong Email or Password");
          break;
        case "auth/user-not-found":
          setError("User not found");
          break;
        default:
          break;
      }
      console.log(error.message);
    }
  }

  return (
    <div className="auth-sign-in">
      <form onSubmit={handleSubmit}>
        <div className="email-input">
          <input
            type="email"
            placeholder="Email"
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
        <Link to={'/forgotpassword'}>
          <span>Forgot password?</span>
        </Link>
        <div className="sign-in-btn">
          <button type="submit">Sign in</button>
        </div>
      </form>
      {error && <p style={{ color: "red" }}>{error}</p>}
    </div>
  )
}

export default SignIn
