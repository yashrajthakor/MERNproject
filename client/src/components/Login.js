import React,{useState} from 'react';
import{useHistory} from 'react-router-dom';

const Login = () => {
    const history = useHistory();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const LoginUser= async(e)=>{
        debugger
        e.preventDefault();
        //const { email, password} = user;
        
        const res = await fetch("/signin", {            
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body: JSON.stringify({
                 email, password
            })
        });
        const data = await res.json();
        if(data.status === 400 || !data){
            window.alert("invalid credential");
            console.log("invalid credential");
        }else{
            window.alert("successfully login");
            console.log("successfully login");

            history.push("/");
        }
    }
    return (
        <>
        <div className="signup-form">
        <h5 className="center-align">Sign in</h5>
       {/*  <div className="card-body"> */}
            <form method="POST">
                <div className="form-group">
                    <label for="exampleInputEmail1">Email address</label>
                    <input type="email" className="form-control" id="email" aria-describedby="emailHelp" 
                    value={email}
                    onChange={(e)=>setEmail(e.target.value)}
                    placeholder="Enter email"/>
                </div>
                <div className="form-group">
                    <label for="exampleInputPassword1">Password</label>
                    <input type="password" className="form-control" id="password" 
                    value={password}
                    onChange={(e)=>setPassword(e.target.value)}
                    placeholder="Password"/>
                </div>
               
                <button type="submit" className="btn btn-primary" onClick={LoginUser}>Submit</button>
            </form>

  </div>
  </>
    )
}

export default Login
