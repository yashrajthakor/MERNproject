import React from 'react'

const Contact = () => {
    return (
        <>
        <div className="signup-form">
            <div className="row">
            <div className="col-sm-4">
                <div className="card">
                <div className="card-body">
                    <h5 className="card-title">Phone</h5>
                    <p className="card-text"> content:7894561230</p>
                   
                </div>
                </div>
            </div>
            <div className="col-sm-4">
                <div className="card">
                <div className="card-body">
                    <h5 className="card-title">Email</h5>
                    <p className="card-text"> content:7894561230</p>                   
                </div>
                </div>
            </div>
            <div className="col-sm-4">
                <div className="card">
                <div className="card-body">
                    <h5 className="card-title">Address</h5>
                    <p className="card-text"> content:7894561230</p>
                   
                </div>
                </div>
            </div>
            <form>

            <div className="form-group">
                    <label htmlFor="exampleFormControlInput1">Name</label>
                    <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com"/>
                </div>
                
                <div className="form-group">
                    <label htmlFor="exampleFormControlInput1">Email address</label>
                    <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com"/>
                </div>
                <div className="form-group">
                    <label htmlFor="exampleFormControlInput1">Phone Number</label>
                    <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com"/>
                </div>
                
                <div className="form-group">
                    <label htmlFor="exampleFormControlTextarea1"> Message</label>
                    <textarea className="form-control" id="exampleFormControlTextarea1" rows="9"></textarea>
                </div>
                
                <button type="submit" className="btn btn-primary">Submit</button>
            
                </form>
            </div>
        </div>
        </>
    )
}

export default Contact
