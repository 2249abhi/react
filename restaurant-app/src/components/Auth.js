import React, {useState} from 'react';

function Auth() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        //alert(email);
        fetch('http://localhost/laravel8/public/api/login',{
                method:"POST",
                headers:{
                    "Accept":"appilication/json",
                    "Content-Type":"application/json"
                },
                body: JSON.stringify({
                    email:email,
                    password:password
                })
        }).then((result)=>{
            result.json().then((response)=>{
              console.log(response.api_token);
              localStorage.setItem("auth",JSON.stringify(response.api_token))
              
              
            })
          })
    }

    return (
        <div>
            <h1>Login</h1>
            <div className="container mt-3 col-md-6" style={{textAlign: 'left'}}>
                    <form onSubmit={handleSubmit} >
                        <div className="mb-3 mt-3">
                            <label for="email">Email:</label>
                            <input 
                           onChange={(e=>{setEmail(e.target.value)})}
                            type="email" className="form-control" id="email" placeholder="Enter email" name="email" />
                        </div>
                        <div className="mb-3">
                            <label for="pwd">Password:</label>
                            <input 
                            onChange={(e)=>{setPassword(e.target.value)}}
                            type="password" className="form-control" id="pwd" placeholder="Enter password" name="pswd" />
                        </div>
                        <button type="submit" className="btn btn-primary">Submit</button>
                    </form>
                </div>
        </div>
    )
}

export default Auth