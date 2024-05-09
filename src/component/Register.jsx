import {React, useContext, useState} from 'react'
import { Link } from 'react-router-dom'
import AdminContext from '../AdminContext';


function Register() {
    const {register} = useContext(AdminContext)
    const [name, setName] = useState("");
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

  return (
    <div>
         <div className="login-container">
      <div className="img-div">
        <img src="https://wwr-pro.s3-us-west-2.amazonaws.com/blog/2020/09/Strengthen+Your+Remote+Job+Search1.png" alt="" />
      </div>
      <div className="form-div">
        <div className="form-bx form-bx-register">
          <h2>Register</h2>
          <form>
            <input
              placeholder="Username"
              type="text"
              onChange={(e) => setName(e.currentTarget.value)}
            />
            <br />
            <input
              placeholder="Email"
              type="email"
              onChange={(e) => setEmail(e.currentTarget.value)}
            />
            <br />
            <input
              placeholder="Password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            <br />
            <button type="button" onClick={ () => register(name, email, password)}>
              Register
            </button>
          <p>Already have Account? <Link className="Link-item" to={"/"}>Login</Link> </p>
          </form>
        </div>
      </div>
    </div>  
    </div>
  )
}

export default Register