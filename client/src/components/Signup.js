import React, {useState} from 'react';
import {useHistory} from 'react-router-dom';
const Signup = () => {
    const history = useHistory()
    const[user, setUser] = useState({
        name:"", email:"",phone:"", work:"", password:"", cpassword:"" 
    });
    let name, value;
    const handleInputs=(e)=>{
        console.log(e);
        name= e.target.name;
        value = e.target.value;
        setUser({...user, [name]:value});
    }
    const PostData= async(e)=>{
        debugger
        e.preventDefault();
        const {name, email, phone, work, password, cpassword} = user;
        debugger
        const res =await fetch("/register", {
            
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body: JSON.stringify({
                name, email, phone, work, password, cpassword
            })
        });
        const data = await res.json();
        if(data.status === 422 || !data){
            window.alert("invalid registration");
            console.log("invalid registration");
        }else{
            window.alert("successfully registration");
            console.log("successfully registration");

            history.push("/login");
        }
    }
    return (
    <>
        <div className="signup-form">
        <h5 className="center-align">Signup form</h5>
       {/*  <div className="card-body"> */}
            <form method="POST">
            <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Name</label>
                    <input type="text" className="form-control" name="name" id="exampleInputname1"  aria-describedby="nameHelp" 
                    value={user.name}
                    onChange={handleInputs} 
                    placeholder="Enter name"/>
                </div>
                <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Email address</label>
                    <input type="email" className="form-control" name="email" id="exampleInputEmail1" aria-describedby="emailHelp" 
                     value={user.email}
                     onChange={handleInputs}
                     placeholder="Enter email"/>
                </div>
                <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Mobile Number</label>
                    <input type="phone" className="form-control" name="phone" id="exampleInputphone1" aria-describedby="phoneHelp" 
                    value={user.phone}
                    onChange={handleInputs}
                    placeholder="Enter mobile number"/>
                </div>
                <div className="form-group">
                    <label htmlFor="exampleInputwork1">Profession</label>
                    <input type="text" className="form-control" id="exampleInputwork1" name="work" aria-describedby="workHelp" 
                    value={user.work}
                    onChange={handleInputs}
                    placeholder="Enter work type"/>
                </div>
                <div className="form-group">
                    <label htmlFor="exampleInputPassword1">Password</label>
                    <input type="password" className="form-control" name="password" id="exampleInputPassword1" 
                    value={user.password}
                    onChange={handleInputs}
                    placeholder="Password"/>
                </div>
                <div className="form-group">
                    <label htmlFor="exampleInputcPassword1">Confirm Password</label>
                    <input type="password" className="form-control" name="cpassword" id="exampleInputcPassword" 
                    value={user.cpassword}
                    onChange={handleInputs}
                    placeholder="confirm Password"/>
                </div>
               
                <button type="submit" className="btn btn-primary"
                name="signup"
                value="register" 
                onClick={PostData}>Submit</button>
            </form>

  </div>
 {/* </div> */}

     </>
    )
}

export default Signup
