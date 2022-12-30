import React from 'react';
import Logo from "../Logo/Logo";
import "./Navigation.css";

function Navigation({ onRouteChange, isSignedIn }) {
    if(isSignedIn){
        return (
            <header style={{display:'flex', justifyContent:'space-between'}}>
                <Logo />
                <nav style={{display:'flex', justifyContent:'flex-end', alignItems: "center"}}>
                    <p  
                        onClick={() => onRouteChange('loggedOut')}
                        className='f3 link dim black underline pa2 pointer' 
                        style={{zIndex: 1}}
                    >
                        Sign Out
                    </p>
                </nav>
            </header>
        )
    } else {
        return (
            <header style={{display:'flex', justifyContent:'space-between'}}>
                <Logo />
                <nav style={{display:'flex', justifyContent:'flex-end', alignItems: "center"}}>
                    <p
                        onClick={() => onRouteChange('loggedOut')}
                        className='f3 link dim black underline pa2 pointer'
                        style={{zIndex: 1}}
                    >
                        Sign In
                    </p>
                    <p  
                        onClick={() => onRouteChange('register')}
                        className='f3 link dim black underline pa2 pointer'
                        style={{zIndex: 1}}
                    >
                        Register
                    </p>
                </nav>
            </header>
        )
    }
}

export default Navigation;
