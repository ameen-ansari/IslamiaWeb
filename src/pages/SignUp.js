import { useNavigate } from "react-router-dom";
import logincss from "./SignUp.module.css";

export default function SignUp() {
  const navigate = useNavigate()
  return (
    <div className={logincss.container}>
      <div className={logincss.login}>
        <div className={logincss.head}>
          <p>
            Welcome to <span style={{ color: "#F46A06" }}>Islamia</span>
          </p>
        </div>
        <p>Sign up</p>
        <div className="w-100">
          <form className="w-100">
            <div className="mb-3">
              <label htmlFor="exampleInputEmail1" className="form-label">
                Enter Email address
              </label>
              <input
                type="email"
                placeholder="Enter username or email address"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                name="email"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="exampleInputPassword1" className="form-label">
                User Name
              </label>
              <input
                type="text"
                className="form-control"
                id="exampleInputPassword1"
                placeholder="User Name"
                name="userName"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="exampleInputEmail1" className="form-label">
                Contact Number
              </label>
              <input
                placeholder="Contact Number"
                type="text"
                className="form-control"
                id="exampleInputEmail1"
                name="phoneNumber"
                aria-describedby="emailHelp"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="exampleInputPassword1" className="form-label">
                Password
              </label>
              <input
                placeholder="Password"
                name="password"
                type="password"
                className="form-control"
                id="exampleInputPassword1"
              />
              <div style={{cursor:'pointer'}} onClick={() => {
                navigate('/login')
              }} id="emailHelp" className="form-text">
                Have a acount ? SignIn
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
