import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { submitUser } from "../redux/action";

const Login = () => {
  const username = useSelector((state) => state.userReducer.name)
  const usermail = useSelector((state) => state.userReducer.email)
  const dispatch = useDispatch()
  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(e.target.firstName.value)
    console.log(e.target.email.value)
    const name = e.target.firstName.value
    const email = e.target.email.value
    dispatch(submitUser({name, email}))
  }
  return (
    <>
      {/* <!-- Modal --> */}
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="exampleModalLabel">
              Hi {username}
            </h5>
          </div>
          <div className="modal-body">
            <form onSubmit={(e) => handleSubmit(e)}>
              <div className="mb-3">
                <label htmlFor="exampleInputFname" className="form-label">
                  First Name
                </label>
                <input
                  type="text"
                  name="firstName"
                  className="form-control"
                  id="exampleInputFname"
                  defaultValue={username}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">
                  Email address
                </label>
                <input
                  type="email"
                  name="email"
                  className="form-control"
                  id="exampleInputEmail1"
                  defaultValue={usermail}
                />
              </div>

              {/* <!-- Button trigger modal --> */}
              <button
                type="submit"
                className="btn btn-outline-primary ms-auto"
                data-bs-toggle="modal"
                data-bs-target="#loginModal"
              >
                <span className="fa fa-sign-in me-1"></span> Login
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
