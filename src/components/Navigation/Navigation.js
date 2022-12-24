import React from 'react'

function Navigation({ onRouteChange, isSignedIn }) {
    if(isSignedIn){
        return (
            <nav style={{zIndex: 1, display: 'flex', justifyContent:'flex-end'}}>
                <p  
                    onClick={() => onRouteChange('loggedOut')}
                    className='f3 link dim black underline pa2 pointer' 
                    style={{zIndex: 1}}
                >
                    Sign Out
                </p>
            </nav>
        )
    } else {
        return (
            <nav style={{zIndex:"1", display: 'flex', justifyContent:'flex-end'}}>
                <p
                    onClick={() => onRouteChange('loggedOut')}
                    className='f3 link dim black underline pa2 pointer'
                    style={{zIndex: "1"}}
                >
                    Sign In
                </p>
                <p  
                    onClick={() => onRouteChange('register')}
                    className='f3 link dim black underline pa2 pointer'
                    style={{zIndex: "1"}}
                >
                    Register
                </p>
            </nav>
        )
    }
}

export default Navigation;
