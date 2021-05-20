import React,{useEffect, useState} from 'react';
import {useHistory} from 'react-router-dom';

const About = () => {

    const history = useHistory();
    const [userData, setUserData] = useState('');

    const  callAboutPage =async ()=>{
        
        try{
            const res = await fetch('/about', {
                method:'GET',
                headers:{
                    Accept:"application/json",
                    "Content-Type":"application/json"
                },
                credentials:"include"
            });
            const data = await res.json();
            console.log(data);
            setUserData(data);
            if(!res.status === 200){
                const error = new Error(res.error);
                throw error;
            }

        }catch(err){
            console.log(err);
            history.push('/login');
        }
    }
    useEffect(() => {
       callAboutPage();
    }, [])
    return (
        <>
          <div className="container">
            <form method="GET">
                <div className= "signup-form">
                    <div className="col-md-12">
                    <div className="row">
                            <div className="col-md-6">
                                <img src="" alt=""/>
                            </div>
                            <div className="col-md-6">
                                <label> {userData.name}</label>
                            </div>
                            {/* <div className="col-md-3">
                                <label> Yash</label>
                            </div> */}
                        </div>
                        <div className="row mt-5">
                            <div className="col-md-6">
                                <label> User Id</label>
                            </div>
                            <div className="col-md-6">
                                <label> 123455677</label>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-6">
                                <label> name</label>
                            </div>
                            <div className="col-md-6">
                                <label> {userData.name}</label>
                            </div>
                        </div>
                       <div className="row">
                            <div className="col-md-6">
                                <label> Email</label>
                            </div>
                            <div className="col-md-6">
                                <label> {userData.email}</label>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-6">
                                <label> Phone</label>
                            </div>
                            <div className="col-md-6">
                                <label> {userData.phone}</label>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-6">
                                <label> Profession</label>
                            </div>
                            <div className="col-md-6">
                                <label> {userData.work}</label>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
          </div>
        </>
    )
}

export default About
