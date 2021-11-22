import React, {useRef} from 'react';

const Login = ({onLogin}) => {

    const researcherEle = useRef()
    const emailEle = useRef()
    const passwordEle = useRef()

    const handleOnLogin = () => {
        onLogin(researcherEle.current.checked)
    }

    return (
        <div className="margin-top margin-left">
            <div>Are you a ECON Researcher&nbsp;<input type="checkbox" defaultValue={true} ref={researcherEle}/></div>
            <div className="margin-top" ref={emailEle}>Email&nbsp;<input type="text"/></div>
            <div>Password&nbsp;<input ref={passwordEle} type="text"/></div>
            <div className="margin-top">
                <button onClick={handleOnLogin}>Login</button>
            </div>
            <div><small>Any email password works</small></div>
        </div>
    );
};

export default Login;