import React, {useState} from 'react'
import './auth.css'

function SignUp(){
    const [signup, setSignUp] = useState({
        username:"",
        email:"",
        password:""
    })
    function handleChange(e){
        setSignUp({...signup,
            [e.target.name]:e.target.value
        })
    }
    function handleSubmit(e){
        e.preventdefault()
        var data = new FormData();
        data.append('username', signup.username );
        data.append('email', signup.email);
        data.append('password', signup.password);
        setSignUp(signup)
    }
    
    console.log(signup)
    return(
        <div className="signupContainer container">
            <div className="signup">
                <form action="" className="signupForm" onSubmit={handleSubmit}>
                    <input type="text" placeholder="Name" onChange={(e)=>handleChange(e)} name="username" />
                    <input type="text" placeholder="email" onChange={(e)=>handleChange(e)} name="email"/>
                    <input type="text" placeholder="password" onChange={(e)=>handleChange(e)} name="password"/>
                    <input type="text" placeholder="confirm password" onChange={(e)=>handleChange(e)} name="confirmPassword"/>
                    <button className="signup-submit-button">Submit</button>
                </form>
            </div>
        </div>
    )
}

export default SignUp
