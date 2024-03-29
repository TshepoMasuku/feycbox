import React from 'react';
import BASE_API_URL from '../../api-base_url';

class SignIn extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            signInEmail: "",
            signInPassword: ""
        }
        this.onEmailChange = this.onEmailChange.bind(this);
        this.onPasswordChange = this.onPasswordChange.bind(this);
        this.onSubmitSignIn = this.onSubmitSignIn.bind(this);
    }

    onEmailChange(event){
        this.setState({signInEmail: event.target.value})
    }
    onPasswordChange(event){
        this.setState({signInPassword: event.target.value})
    }
    onSubmitSignIn(){ 
        const { signInEmail,signInPassword } = this.state;
        fetch(BASE_API_URL+"/signIn", { 
            method: "post",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify({
                email: signInEmail,
                password: signInPassword
            })
        })
            .then(response => response.json()) 
            .then( user => {
                if(user.id){
                    this.props.loadUser(user);
                    this.props.onRouteChange("signedIn");
                }
            })
    }

    render(){
        const { onRouteChange } = this.props;
        return (
            <div>
                <article className='br3 ba b--black-10 mv2 w-100 w-50-m w-25-l mw6 shadow-5 center' >
                    <main className="pa4 black-80" style={{zIndex: 1, position: 'relative'}}>
                        <div className="measure">
                            <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
                                <legend className="f1 fw6 ph0 mh0">Sign In</legend>
                                <div className="mt3">
                                    <label className="db fw6 lh-copy f6" htmlFor="email-address">Email</label>
                                    <input 
                                        type="email" name="email-address"  id="email-address" 
                                        className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                                        onChange={this.onEmailChange}
                                    />
                                </div>
                                <div className="mv3">
                                    <label className="db fw6 lh-copy f6" htmlFor="password">Password</label>
                                    <input 
                                        type="password" name="password"  id="password"
                                        className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
                                        onChange={this.onPasswordChange}
                                    />
                                </div>
                            </fieldset>
                            <div>
                                <input 
                                    type="submit" value="Sign in" 
                                    onClick={this.onSubmitSignIn}
                                    className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib" 
                                />
                            </div>
                            <div className="lh-copy mt3" onClick={() => onRouteChange('register')}>
                                <p className="f6 link dim black db pointer">Register</p>
                            </div>
                        </div>
                    </main>
                </article>
            </div>
        )
    }
}

export default SignIn;
