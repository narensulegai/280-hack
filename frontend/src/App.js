import React, {useEffect, useRef, useState} from 'react';
import './App.css';
import Dashboard from "./components/dashboard";
import Login from "./components/login";

const App = () => {

    const [currentUser, setCurrentUser] = useState(null)
    const handleOnLogin = (isResearcher) => {
        setCurrentUser(isResearcher)
    }

    return currentUser !== null
        ? <Dashboard currentUser={currentUser}/>
        : <Login onLogin={handleOnLogin}/>
}

export default App;