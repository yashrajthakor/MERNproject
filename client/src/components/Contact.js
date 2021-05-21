import React,{useEffect, useState} from 'react';

const Contact = () => {
    const [userData, setUserData] = useState({name:"", email:"",phone:"",message:"" });

    const  userContact =async ()=>{        
        try{
            const res = await fetch('/getdata', {
                method:'GET',
                headers:{
                    "Content-Type":"application/json"
                }});
            const data = await res.json();
            console.log(data);
            setUserData({...userData, name:data.name, email:data.email, phone:data.phone});
            if(!res.status === 200){
                const error = new Error(res.error);
                throw error;
            }

        }catch(err){
            console.log(err);
           }
    }
    useEffect(() => {
       userContact();
    }, []);

    const handleInputs =(e)=>{
        const name= e.target.name;
        const value= e.target.value;
        setUserData({...userData, [name]: value})
    }
   
    const contactForm =async(e)=>{
        e.preventDefault();
        const {name, email, phone, message} =userData;
        const res = await fetch('/contact',{
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body: JSON.stringify({
                name, email, phone, message
            })
        });

        const data = await res.json();
        if(!data){
            console.log("message not send");
        }else{
            alert("Message sent");
            setUserData({...userData, message:""})
        }
    }
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
                    <input type="email" className="form-control" id="name" 
                    name="name"
                    value={userData.name}
                    onChange={handleInputs}
                    placeholder="name@example.com"/>
                </div>
                
                <div className="form-group">
                    <label htmlFor="exampleFormControlInput1">Email address</label>
                    <input type="email" className="form-control" id="email" 
                    name="email"
                    value={userData.email}
                    onChange={handleInputs}
                    placeholder="name@example.com"/>
                </div>
                <div className="form-group">
                    <label htmlFor="exampleFormControlInput1">Phone Number</label>
                    <input type="number" className="form-control" id="phone" 
                    name="number"
                    value={userData.phone}
                    onChange={handleInputs}
                    placeholder="name@example.com"/>
                </div>
                
                <div className="form-group">
                    <label htmlFor="exampleFormControlTextarea1"> Message</label>
                    <textarea className="form-control" id="exampleFormControlTextarea1" 
                    name="message"
                    value={userData.message}
                    onChange={handleInputs}
                    rows="9"></textarea>
                </div>
                
                <button type="submit" className="btn btn-primary" onClick={contactForm}>Submit</button>
            
                </form>
            </div>
        </div>
        </>
    )
}

export default Contact
