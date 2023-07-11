import { useNavigate } from "react-router-dom";
import logincss from "./SignUp.module.css";

export default function SignIn() {
  const navigate = useNavigate()
  return (
    <div className={logincss.container}>
      <div className={logincss.login}>
        <div className={logincss.head}>
          <p>
            Welcome to <span style={{ color: "#F46A06" }}>Islamia</span>
          </p>
        </div>
        <p>Sign In</p>
        <div className="w-100 mb-4">
          <form className="w-100 mb-5">
            <div className="mb-3">
              <label htmlFor="exampleInputEmail1" className="form-label">
                Enter Email address
              </label>
              <input
                type="email"
                placeholder="Enter Email address"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                name="email"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="exampleInputPassword1" className="form-label">
                Password
              </label>
              <input
                type="password"
                className="form-control"
                id="exampleInputPassword1"
                placeholder="Password"
                name="password"
              />
              <div style={{cursor:'pointer'}} onClick={() => {
                navigate('/signup')
              }} id="emailHelp" className="form-text mt-1">
                Don't have a Acount ? SignUP
              </div>
            </div>
            <button onClick={() => {
                navigate('/')
              }}  type="submit" className="btn btn-primary">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
