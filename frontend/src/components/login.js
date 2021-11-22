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
        <div className="margin-top margin-left">
            <div>Are you a ECON Researcher?&nbsp;
                <input type="checkbox" defaultValue={true} ref={researcherEle}/>
            </div>
            <div className="margin-top">Email&nbsp;
                <input type="text" ref={emailEle}/>
            </div>
            <div>Password&nbsp;
                <input ref={passwordEle} type="text"/>
            </div>
            <div className="margin-top">
                <button onClick={handleOnLogin}>Login</button>
            </div>
            <div><small>Any email password works</small></div>
        </div>
    );
};

export default Login;