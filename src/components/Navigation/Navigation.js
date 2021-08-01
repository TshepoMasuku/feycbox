import React from 'react'

function Navigation({ onRouteChange, isSignedIn }) {
    if(isSignedIn){
        return (
            <nav style={{display: 'flex', justifyContent:'flex-end'}}>
                <p  
                    onClick={() => onRouteChange('loggedOut')}
                    className='f3 link dim black underline pa2 pointer' 
                >
                    Sign Out
                </p>
            </nav>
        )
    } else {
        return (
            <nav style={{display: 'flex', justifyContent:'flex-end'}}>
                <p  
                    onClick={() => onRouteChange('loggedOut')}
                    className='f3 link dim black underline pa2 pointer'
                >
                    Sign In
                </p>
                <p  
                    onClick={() => onRouteChange('register')}
                    className='f3 link dim black underline pa2 pointer'
                >
                    Register
                </p>
            </nav>
        )
    }
}

export default Navigation;
