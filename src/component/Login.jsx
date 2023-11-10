import React from "react";

const Login = () => {
  return (
    <>
      {/* <!-- Modal --> */}
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                {/* Hi {loginName} */}
              </h5>
            </div>
            <div className="modal-body">
              <form>
                <div className="mb-3">
                  <label htmlFor="exampleInputFname" className="form-label">
                    First Name
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="exampleInputFname"
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="exampleInputEmail1" className="form-label">
                    Email address
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="exampleInputEmail1"
                  />
                </div>
                
                
                {/* <!-- Button trigger modal --> */}
                <button
                  type="button"
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
