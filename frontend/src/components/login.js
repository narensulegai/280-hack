import React, {useRef} from 'react';

const Login = ({onLogin}) => {

    const researcherEle = useRef()
    const emailEle = useRef()
    const passwordEle = useRef()

    const handleOnLogin = () => {
        const email = emailEle.current.value
        const password = passwordEle.current.value
        if (email.length === 0 || password.length === 0) {
            alert("Email/Password cannot be empty")
            return
        }
        onLogin(researcherEle.current.checked, email)
    }

    return (
        <div className="margin-top margin-left center">
            <div className="margin-top">
                Are you a ECON Researcher?&nbsp;
                <input type="checkbox" defaultValue={true} ref={researcherEle}/>
            </div>
            <div className="margin-top left-text login">
                <div>
                    Email&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <input type="text" ref={emailEle}/>
                </div>
                <div>
                    Password&nbsp;&nbsp;&nbsp;
                    <input ref={passwordEle} type="password"/>
                </div>
            </div>
            <div className="margin-top">
                <button onClick={handleOnLogin}>Login</button>
            </div>
        </div>
    );
};

export default Login;