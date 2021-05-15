import React from 'react'

const Login = () => {
    return (
        <>
        <div className="signup-form">
        <h5 className="center-align">Sign in</h5>
       {/*  <div className="card-body"> */}
            <form>
                <div className="form-group">
                    <label for="exampleInputEmail1">Email address</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
                </div>
                <div className="form-group">
                    <label for="exampleInputPassword1">Password</label>
                    <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password"/>
                </div>
               
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>

  </div>
  </>
    )
}

export default Login
