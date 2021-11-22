import React, {useEffect, useRef, useState} from 'react';
import './App.css';
import Dashboard from "./components/dashboard";
import Login from "./components/login";

const App = () => {

    const [currentUser, setCurrentUser] = useState(null)
    const [email, setEmail] = useState(null)
    const handleOnLogin = (isResearcher, email) => {
        setCurrentUser(isResearcher)
        setEmail(email)
    }

    return currentUser !== null
        ? <Dashboard currentUser={currentUser} email={email}/>
        : <Login onLogin={handleOnLogin}/>
}

export default App;