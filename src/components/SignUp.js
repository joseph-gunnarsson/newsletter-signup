
import React, { useState } from "react";
import icon from "../assets/images/icon-list.svg"
import SignUpContent from "./SignUpContent";
import Image from "./Image";
export default function SignUp() {

    return (<>
    <div className="center">
        <div className="signup card">
            <div className="split">
            <SignUpContent/>
            <Image/>
            </div>
        </div>
        </div>
    </>)
}


