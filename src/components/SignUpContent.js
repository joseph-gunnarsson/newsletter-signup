import { useState } from "react";
import { useNavigate } from "react-router-dom";

const validateEmail = (email) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };

export default function SignUpContent() {
    const [email,setEmail] = useState("")
    const [validEmail,setValidEmail] = useState()
    const navigate = useNavigate()
    const submitEmail = (e)=>{

        e.preventDefault()
        if(validateEmail(email)){
            setValidEmail("")
            navigate("/success/" + e.target.value)
        }else{
            setValidEmail("error")
        }
    }
    return (
    <div className="signup-content">
        <h1>Stay updated!</h1>
        <p>Join 60,00+ product managers receiving monthly updates on:</p>
        <ul>
            <li>Product discovery and build what matters</li>
            <li>Measuring to ensure updates are a success</li>
            <li>And much more!</li>
        </ul>
        <form className="input-signup">
        <label>Email address</label>
        <input type="text" className={`${validEmail}`}value={email} onChange={(e)=>setEmail(e.target.value)} placeholder="some.email@gmail.com" />
        <input type="submit" className="button" onClick={submitEmail} value="Subscribe to monthly newsletter"/>
        </form>
    </div>

    );
}