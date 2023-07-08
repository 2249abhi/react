import React from 'react'

export default class Forms extends React.Component {
    constructor()
    {
        super()
        this.state={
            user:"",
            password:"",
            userError:"",
            passwordError:""

        }
    }
    valid()
    {
        if(!this.state.user.includes("@"))
        {
            this.setState({userError:"Invalid User Name"});
        } else {
            
            return true;
        }
    }

    submit()
    {
        this.setState({userError:""});
        //console.warn(this.state);
        if(this.valid())
        {
            //console.log('success');
            alert('form Submitted Succuesfully');
        }
    }
  render() {
    return (
      <div style={{border: "solid white 4px",margin: "15px 15px 25px 15px",width:"500px"}}>
        <h4>Form Handling</h4>
        <input type="text" name="user"
            onChange={(e)=>{this.setState({user:e.target.value})}}
        /><br/><p>{this.state.userError}</p><br/>
        <input type="password" name="password" 
            onChange={(e)=>{this.setState({password:e.target.value})}}
        />
        <button onClick={()=>this.submit()} >Submit</button>
      </div>

    )
  }
}


// import React,{useEffect,useState} from 'react'

// const Forms = () => {
//     //count1 & setCount1 are variables in array
//     const [count1,setCount1] = useState(1);
//     useEffect(()=>{
//         console.warn(count1);
//     },[count1==4])
//   return (
//     <div style={{border: "solid white 4px",margin: "15px 15px 25px 15px"}}>
//         <p>Use effect hooks in fun. comp.:- {count1}</p>
//         <button onClick={()=>setCount1(count1+1)}>Update State</button>
//     </div>
    
//   )
// }

// export default Forms