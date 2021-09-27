import React, {useContext}from 'react'
import './auth.css'
import {Link,useHistory} from 'react-router-dom'
import { MyContext } from '../../components/context/Provider'


export default function Login(){
const { user, setUser } = useContext(MyContext);
const history = useHistory();
	const handleChange = (e) => {
		setUser({
			...user,
			[e.target.name]: e.target.value,
		});
	};
	const handleSubmit = (e) => {
		e.preventDefault();
		localStorage.setItem("email", JSON.stringify(user.email));
		localStorage.setItem("password", JSON.stringify(user.password));
        setTimeout(function() {
            history.push("/");
        }, 1000)
       
		console.log();
	};
    return(
        <div>
            <div className="login">
			<div className="left"></div>
			<div className="right">
				<div className="container-yk">
					<div className="head">
						<h3>Login</h3>
						<p>
							Need an account?&nbsp;
							<Link to="/signup">
								Sign up
							</Link>
						</p>
					</div>
				
					
					<form className="Lform" onSubmit={(e) => handleSubmit(e)}>
						<label>Email address</label>
						<div className="LformInput">
							<div>
								<img src="../assets/envelope.png" alt="" />
							</div>
							<input
								placeholder="example@gmail.com"
								name="email"
								type="email"
								required
								onChange={(e) => handleChange(e)}
							/>
						</div>
						<label>Password</label>
						<div className="LformInput">
							<div>
								<img src="../assets/lock.png" alt="" />
							</div>
							<input
								placeholder="* * * * * * * * * *"
								type="password"
								name="password"
								minLength="8"
								required
								onChange={(e) => handleChange(e)}
							/>
						</div>

						<button type="submit" className="formSubmit">
							Login
						</button>
					</form>
				</div>
			</div>
		</div>
        </div>
    )


}
