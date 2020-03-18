import React, { Component } from 'react';
import './form.css';

export default class Signin extends Component{
    constructor(props){

super(props);
this.state={
    fullname:"",
    email:"",
    phone:"",
    password:"",
}
}

setData =(event) =>
{
    this.setState({[event.target.name]:event.target.value})
}
list=[]

submitData=(event)=>
{
    if(localStorage.getItem("data"))
{

this.list=JSON.parse(localStorage.getItem("data"))
console.log("list",this.list)
event.preventDefault();
}

this.list=[...this.list,this.state]
localStorage.setItem("userdata",JSON.stringify(this.list))

event.preventDefault();
}

    render()
    {
        return(

<div className="my-form">
    <div className="cotainer">
        <div className="row justify-content-center">
            <div className="col-md-8">
                    <div className="card">
                        <div className="card-header">Register</div>
                        <div className="card-body">
                            <form name="my-form" onSubmit={this.submitData} >
                                <div className="form-group row">
                                    <label className="col-md-4 col-form-label text-md-right">Full Name</label>
                                    <div className="col-md-6">
                                        <input type="text" name="fullname" value={this.state.fullname}
                                  onChange={this.setData} className="form-control" />
                                    </div>
                                </div>
                              

                                <div className="form-group row">
                                    <label  className="col-md-4 col-form-label text-md-right">E-Mail Address</label>
                                    <div className="col-md-6">
                                        <input type="text" name="email" value={this.state.email}
                                  onChange={this.setData}  className="form-control" />
                                    </div>
                                </div>

                               <div className="form-group row">
                                    <label  className="col-md-4 col-form-label text-md-right">Password</label>
                                    <div className="col-md-6">
                                        <input type="text"  name="password" value={this.state.password}
                                  onChange={this.setData}  className="form-control"/>
                                    </div>
                                </div>

                               
                                <div className="form-group row">
                                    <label className="col-md-4 col-form-label text-md-right">Phone Number</label>
                                    <div className="col-md-6">
                                        <input type="number" name="phone" value={this.state.phone}
                                  onChange={this.setData}  className="form-control"/>
                                    </div>
                                </div>
                            
                                    <div className="col-md-6 offset-md-4">
                                        <button type="submit" className="btn btn-primary">
                                        Register
                                        </button>
                                    </div>
                                
                            </form>
                        </div>
                    </div>
                    </div>
            </div>
        </div>
    </div>
  )
    }
}