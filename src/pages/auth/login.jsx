import { useState } from "react";
import axios from "axios";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate, useLocation } from "react-router-dom";
import { useAuth } from "../../components/context/auth";

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [auth, setAuth] = useAuth()


  const navigate = useNavigate();
  const location = useLocation();

  // form function
  const handleSubmit = async (e) => {
    e.preventDefault();
    const url = "http://localhost:9000/api/v1/auth/login";
    try {
      const res = await axios.post(url, { email, password });
      if (res && res.data.success) {
        toast.success(res.data && res.data.message);
        setAuth({
          ...auth,
          user: res.data.user,
          token: res.data.token,
        });
        localStorage.setItem("auth", JSON.stringify(res.data));
        navigate(location.state || '/');
      } else {
        toast.error(res.data.message)
      }
    } catch (error) {
      console.log(error)
      toast.error("Something Went Wrong");
    }
  }
  return (
    <>
      <div className="modal-dialog modal-dialog-centered" role="document">
        <div className="modal-content">
          <div className="modal-body">
            <button
              type="button"
              className="close"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">
                <i className="icon-close" />
              </span>
            </button>
            <div className="form-box">
              <div className="form-tab">
                <ul
                  className="nav nav-pills nav-fill nav-border-anim"
                  role="tablist"
                >
                  <li className="nav-item">
                    <a
                      className="nav-link active"
                      id="signin-tab"
                      data-toggle="tab"
                      href="#signin"
                      role="tab"
                      aria-controls="signin"
                      aria-selected="true"
                    >
                      Sign In
                    </a>
                  </li>
                </ul>
                <div className="tab-content" id="tab-content-5">
                  <div
                    className="tab-pane fade show active"
                    id="signin"
                    role="tabpanel"
                    aria-labelledby="signin-tab"
                  >
                    <form action="#" onSubmit={handleSubmit}>
                      <div className="form-group">
                        <label htmlFor="singin-email">
                          Email
                        </label>
                        <input
                          type="text"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          className="form-control"
                          id="singin-email"
                          name="singin-email"
                          required
                        />
                      </div>
                      {/* End .form-group */}
                      <div className="form-group">
                        <label htmlFor="singin-password">Password</label>
                        <input
                          type="password"
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                          className="form-control"
                          id="singin-password"
                          name="singin-password"
                          required
                        />
                      </div>
                      {/* End .form-group */}
                      <div className="form-footer">
                        <button
                          type="submit"
                          className="btn btn-outline-primary-2"
                        >
                          <span>LOG IN</span>
                          <i className="icon-long-arrow-right" />
                        </button>
                        <div className="custom-control custom-checkbox">
                          <input
                            type="checkbox"
                            className="custom-control-input"
                            id="signin-remember"
                          />
                          <label
                            className=""
                            htmlFor="register-policy"
                          >
                            Not a member? <a href="/signup">Signup now</a>
                          </label>
                        </div>
                        {/* End .custom-checkbox */}
                      </div>
                      {/* End .form-footer */}
                    </form>
                    <div className="form-choice">
                      <a href="#" className="forgot-link" onClick={() => { navigate('/forgot-password') }}>Forgot Your Password?</a>
                    </div>
                    {/* End .form-choice */}
                  </div>
                  {/* .End .tab-pane */}
                </div>
                {/* End .tab-content */}
              </div>
              {/* End .form-tab */}
            </div>
            {/* End .form-box */}
          </div>
          {/* End .modal-body */}
        </div>
        {/* End .modal-content */}
      </div>
    </>
  )
}
export default Login;