import { useEffect, useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import UserMenu from "./usermenu";
import { useAuth } from "../../components/context/auth";

function Profile() {
  //context
  const [auth, setAuth] = useAuth();
  //state
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");

  //get user data
  useEffect(() => {
    const { email, name, phone, address } = auth?.user;
    setName(name);
    setPhone(phone);
    setEmail(email);
    setAddress(address);
  }, [auth?.user]);

  // form function
  const handleSubmit = async (e) => {
    e.preventDefault();
    const url = "http://localhost:9000/api/v1/auth/profile";
    try {
      const { data } = await axios.put(url, {
        name,
        email,
        password,
        phone,
        address,
      });
      if (data?.errro) {
        toast.error(data?.error);
      } else {
        setAuth({ ...auth, user: data?.updatedUser });
        let ls = localStorage.getItem("auth");
        ls = JSON.parse(ls);
        ls.user = data.updatedUser;
        localStorage.setItem("auth", JSON.stringify(ls));
        toast.success("Profile Updated Successfully");
      }
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong");
    }
  };
  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-4 col-lg-3">
            <UserMenu />
          </div>
          <div className="col-md-8">
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
                        {/* <li className="nav-item">
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
                </li> */}
                        <li className="nav-item">
                          <a
                            className="nav-link"
                            id="register-tab"
                            data-toggle="tab"
                            href="#register"
                            role="tab"
                            aria-controls="register"
                            aria-selected="false"
                          >
                            USER PROFILE
                          </a>
                        </li>
                      </ul>
                      <div className="tab-content" id="tab-content-5">
                        {/* <div
                  className="tab-pane fade show active"
                  id="signin"
                  role="tabpanel"
                  aria-labelledby="signin-tab"
                >
                  <form action="#">
                    <div className="form-group">
                      <label htmlFor="singin-email">
                        Email
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="singin-email"
                        name="singin-email"
                        required=""
                      />
                    </div>
                    End .form-group
                    <div className="form-group">
                      <label htmlFor="singin-password">Password</label>
                      <input
                        type="password"
                        className="form-control"
                        id="singin-password"
                        name="singin-password"
                        required=""
                      />
                    </div>
                    End .form-group
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
                          className="custom-control-label"
                          htmlFor="signin-remember"
                        >
                          Remember Me
                        </label>
                      </div>
                      End .custom-checkbox
                      <a href="#" className="forgot-link">
                        Forgot Your Password?
                      </a>
                    </div>
                    End .form-footer
                  </form>
                </div>
                .End .tab-pane */}
                        <div
                          className="tab-pane fade"
                          id="register"
                          role="tabpanel"
                          aria-labelledby="register-tab"
                        >
                          <form action="#" onSubmit={handleSubmit}>
                            <div className="form-group">
                              <label htmlFor="singin-email">
                                Name
                              </label>
                              <input
                                type="text"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                className="form-control"
                                id="singin-email"
                                name="singin-email"
                              />
                            </div>
                            <div className="form-group">
                              <label htmlFor="register-email">
                                Email
                              </label>
                              <input
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="form-control"
                                id="register-email"
                                name="register-email"
                                disabled
                              />
                            </div>
                            {/* End .form-group */}
                            <div className="form-group">
                              <label htmlFor="register-password">Password</label>
                              <input
                                type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className="form-control"
                                id="register-password"
                                name="register-password"
                              />
                            </div>
                            <div className="form-group">
                              <label htmlFor="singin-email">
                                Phone
                              </label>
                              <input
                                type="text"
                                value={phone}
                                onChange={(e) => setPhone(e.target.value)}
                                className="form-control"
                                id="singin-email"
                                name="singin-email"
                              />
                            </div>
                            <div className="form-group">
                              <label htmlFor="singin-email">
                                Address
                              </label>
                              <input
                                type="text"
                                value={address}
                                onChange={(e) => setAddress(e.target.value)}
                                className="form-control"
                                id="singin-email"
                                name="singin-email"
                              />
                            </div>
                            {/* <div className="form-group">
                      <input
                        type="text"
                        value={answer}
                        onChange={(e) => setAnswer(e.target.value)}
                        className="form-control"
                        id="singin-email"
                        name="singin-email"
                        placeholder="What Is Your Favourite Sport"
                        required
                      />
                    </div>
                    End .form-group */}
                            <div className="form-footer justify-content-center">
                              <button
                                type="submit"
                                className="btn btn-outline-primary-2"
                              >
                                <span>UPDATE</span>
                                <i className="icon-long-arrow-right" />
                              </button>
                              {/* <div className="custom-control custom-checkbox">
                        <input
                          type="checkbox"
                          className="custom-control-input"
                          id="register-policy"
                          required=""
                        />
                        <label
                          className="custom-control-label"
                          htmlFor="register-policy"
                        >
                          Already have an account? <a href="/login">Login now</a>
                        </label>
                      </div> */}
                              {/* End .custom-checkbox */}
                            </div>
                            {/* End .form-footer */}
                          </form>
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
          </div>
        </div>
      </div>
    </>
  )
}
export default Profile;