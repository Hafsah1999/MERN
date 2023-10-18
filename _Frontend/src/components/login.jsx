import React from "react";

const Login = () => {
  return (
    <>
    <div className="container-fluid w-100 bg-img">
      <div className="col">
        <div className="card shadow bg-light bg-opacity-25 d-block m-auto loginCard">
          <div className="card-header">
            <h1 className="text-danger">LOGIN</h1>
          </div>
          <div className="card-body">
            <form>
              <div className="form-group ">
                <label className="text-danger">Email address:</label>
                <input type="email" className="form-control ms-0 m-2 bg-transparent "  />
              </div>
              <div className="form-group">
                <label  className="text-danger">Password:</label>
                <input type="text" className="form-control ms-0 m-2 bg-transparent" />
              </div>
          <button className="btn btn-danger ms-0 m-2 p-2 w-100">LOGIN</button>
            </form>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default Login;
