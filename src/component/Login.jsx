import {React, useContext, useState} from 'react'
import { Link } from 'react-router-dom';
import AdminContext from '../AdminContext';


function Login() {
    const {login} = useContext(AdminContext)
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("")
  return (
    <div>
         <div> 
      <div className="login-container">
      <div className="img-div">
        <img src="https://wwr-pro.s3-us-west-2.amazonaws.com/blog/2020/09/Strengthen+Your+Remote+Job+Search1.png"  className="hidden md:flex" alt="" />
      </div>
      <div className="form-div">
        <div className="form-bx">
          <h2>Login</h2>
          <form>
            <input
              placeholder="Email"
              type="email"
              onChange={(e) => setEmail(e.currentTarget.value)}
            />
            <br />
            <input
              placeholder="Password"
              type="password"
              onChange={(e) => setPassword(e.currentTarget.value)}
            />

            <br />
            <button type="button" onClick={() => login(email, password)}>
              Login
            </button>
            <p>
              Don't have a Account?{" "}
              <Link className="Link-item" to={"/register"}>
                Register
              </Link>{" "}
            </p>
          </form>
        </div>
      </div>
    </div>
    </div>
    </div>
  )
}

export default Login