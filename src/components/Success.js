
import { redirect, useNavigate, useParams } from "react-router-dom"
import success_icon from "../assets/images/icon-success.svg"
export default function Success(){
    const {email} = useParams()
    const nav = useNavigate();
    const handleDissmiss = ()=>{
       nav("/")
    }

    return (
        <>
        <div className="center">
            <div className="card success-card">
                    <img src={success_icon}/>
                    <h1>Thanks for subscribing!</h1>
                    <p>A confirmation email has been sent to <strong>{email}</strong>. Please open it and click the button inside to confirm your subscription.</p>
                    <input className="button" type="button" onClick={handleDissmiss} value="Dismiss message"/> 
            </div>
        </div>
        </>
    )
}