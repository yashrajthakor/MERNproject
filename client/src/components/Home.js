import React,{useEffect, useState} from 'react';

const Home = () => {
    const [userName, setUserName] = useState('');
    const [show, setShow] = useState('false');
    

    const  userHome =async()=>{        
        try{
            const res = await fetch('/getdata', {
                method:'GET',
                headers:{
                    "Content-Type":"application/json"
                }});
            const data = await res.json();
            console.log(data);
            setUserName(data.name);
            setShow(true);
            
        }catch(err){
            console.log(err);
           }
    }
    useEffect(() => {
       userHome();
    }, []);

    return (
        <>
            <div className="contact-form">
                <div className= "home-div">
                    <h2 className="pt-5"> Welcome</h2>
                    <h2>{userName}</h2>
                    <h2>{show ? 'Happy, to see you back':'We are the MERN Developer'}</h2>
                </div>
            </div>
          </>
    )
}

export default Home
