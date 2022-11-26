import React, { useState } from 'react';
import Signin from '../component/signin';
import Signup from '../component/signup';

function Lender() {
    const [toggle, setToggle] = useState(false)

    const listenToSignin = () => {
        setToggle(true)
    }

    const listenToSignup = () => {
        setToggle(false)
    }
    return (
        <div>
            {
                toggle ? <Signup listenToSignup={listenToSignup} /> : <Signin listenToSignin={listenToSignin} />
            }
        </div>
    );
}

export default Lender;